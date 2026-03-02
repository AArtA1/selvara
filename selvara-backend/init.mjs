/**
 * SELVARA Backend Init
 * Run once after first deployment to create admin user + publishable API key.
 *
 * Usage:
 *   docker exec <backend-container> node init.mjs
 */

const BASE = process.env.MEDUSA_BACKEND_URL || "http://localhost:9000";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@selvara.ru";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "selvara2024";

async function waitForServer(maxAttempts = 30) {
  for (let i = 1; i <= maxAttempts; i++) {
    try {
      const res = await fetch(`${BASE}/health`);
      if (res.ok) return;
    } catch {}
    console.log(`Waiting for server... (${i}/${maxAttempts})`);
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error("Server did not become ready in time");
}

async function main() {
  console.log("\n=== SELVARA Backend Init ===\n");

  await waitForServer();
  console.log("Server is ready\n");

  // 1. Try to authenticate
  let token;
  const authRes = await fetch(`${BASE}/auth/user/emailpass`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD }),
  });

  if (!authRes.ok) {
    console.log("Admin user not found. Creating...");

    // Register admin user
    const regRes = await fetch(`${BASE}/auth/user/emailpass/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD }),
    });

    if (!regRes.ok) {
      const err = await regRes.text();
      console.error("Failed to create admin user:", err);
      console.error("\nRun manually on VPS:");
      console.error(`  docker exec <backend-container> ./node_modules/.bin/medusa user --email ${ADMIN_EMAIL} --password ${ADMIN_PASSWORD}`);
      process.exit(1);
    }

    const regData = await regRes.json();
    token = regData.token;

    // Create the actual User entity (auth identity alone is not enough)
    const createUserRes = await fetch(`${BASE}/admin/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ email: ADMIN_EMAIL }),
    });

    if (!createUserRes.ok) {
      const err = await createUserRes.text();
      console.error("Auth identity created but failed to create User entity:", err);
      console.error("\nRun manually on VPS:");
      console.error(`  docker exec <backend-container> ./node_modules/.bin/medusa user --email ${ADMIN_EMAIL} --password ${ADMIN_PASSWORD}`);
      process.exit(1);
    }

    console.log("Admin user created\n");
  } else {
    const authData = await authRes.json();
    token = authData.token;
    console.log("Authenticated as admin\n");
  }

  const headers = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

  // 2. Check existing publishable keys
  const keysRes = await fetch(`${BASE}/admin/api-keys?type=publishable`, { headers });
  const keysData = await keysRes.json();
  const existingKey = keysData.api_keys?.[0];

  if (existingKey) {
    console.log("Publishable key already exists\n");
    printKey(existingKey.token);
    return;
  }

  // 3. Create publishable key
  console.log("Creating publishable API key...");
  const createRes = await fetch(`${BASE}/admin/api-keys`, {
    method: "POST",
    headers,
    body: JSON.stringify({ title: "Storefront", type: "publishable" }),
  });
  const { api_key } = await createRes.json();

  // 4. Link to default sales channel
  const scRes = await fetch(`${BASE}/admin/sales-channels`, { headers });
  const { sales_channels } = await scRes.json();
  if (sales_channels?.[0]) {
    await fetch(`${BASE}/admin/api-keys/${api_key.id}/sales-channels`, {
      method: "POST",
      headers,
      body: JSON.stringify({ add: [sales_channels[0].id] }),
    });
    console.log("Linked to sales channel:", sales_channels[0].name);
  }

  printKey(api_key.token);
}

function printKey(key) {
  console.log("\n" + "=".repeat(60));
  console.log("Add to .env on VPS:");
  console.log("");
  console.log(`NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=${key}`);
  console.log("");
  console.log("Then rebuild frontend:");
  console.log("  docker compose build frontend --no-cache && docker compose up -d frontend");
  console.log("=".repeat(60) + "\n");
}

main().catch((err) => {
  console.error("Init failed:", err.message);
  process.exit(1);
});
