/**
 * SELVARA Backend Init
 * Run once after first deployment to create admin user + publishable API key.
 *
 * Usage:
 *   docker exec <backend-container> node init.mjs
 */

import { execSync } from "node:child_process";

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

function createUserViaCLI() {
  console.log("Creating admin user via CLI...");
  try {
    execSync(
      `./node_modules/.bin/medusa user --email "${ADMIN_EMAIL}" --password "${ADMIN_PASSWORD}"`,
      { stdio: "inherit" }
    );
    console.log("Admin user created\n");
  } catch (err) {
    // CLI may fail if user already exists — that's ok
    console.log("CLI user creation finished (user may already exist)\n");
  }
}

async function authenticate() {
  const res = await fetch(`${BASE}/auth/user/emailpass`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.token;
}

async function main() {
  console.log("\n=== SELVARA Backend Init ===\n");

  await waitForServer();
  console.log("Server is ready\n");

  // 1. Try to authenticate
  let token = await authenticate();

  if (!token) {
    // No auth identity exists — create user via CLI (creates both auth + user)
    createUserViaCLI();
    token = await authenticate();
    if (!token) {
      console.error("Failed to authenticate after creating user");
      process.exit(1);
    }
  }

  console.log("Authenticated\n");

  // 2. Test if token actually works for admin routes
  const testRes = await fetch(`${BASE}/admin/api-keys?type=publishable`, {
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
  });

  if (testRes.status === 401) {
    // Orphaned auth identity — auth works but no User entity linked.
    // Recreate user via CLI to fix the link.
    console.log("Token rejected by admin routes (orphaned auth identity). Fixing...\n");
    createUserViaCLI();
    token = await authenticate();
    if (!token) {
      console.error("Failed to authenticate after fixing user");
      process.exit(1);
    }
  }

  const headers = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

  // 3. Check existing publishable keys (re-fetch if we had to fix)
  const keysRes = testRes.status === 401
    ? await fetch(`${BASE}/admin/api-keys?type=publishable`, { headers })
    : testRes;
  const keysData = await keysRes.json();
  const existingKey = keysData.api_keys?.[0];

  if (existingKey) {
    console.log("Publishable key already exists\n");
    printKey(existingKey.token);
    await seedIfEmpty(headers);
    return;
  }

  // 4. Create publishable key
  console.log("Creating publishable API key...");
  const createRes = await fetch(`${BASE}/admin/api-keys`, {
    method: "POST",
    headers,
    body: JSON.stringify({ title: "Storefront", type: "publishable" }),
  });
  const { api_key } = await createRes.json();

  // 5. Link to default sales channel
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

  // 6. Seed products if none exist
  await seedIfEmpty(headers);
}

async function seedIfEmpty(headers) {
  try {
    const res = await fetch(`${BASE}/admin/products?limit=1`, { headers });
    const data = await res.json();
    if (data.products?.length > 0) {
      console.log(`Products already exist (${data.count} total). Skipping seed.\n`);
      return;
    }
    console.log("No products found. Seeding SELVARA products...\n");
    execSync("node seed-selvara.mjs", { stdio: "inherit" });
    console.log("Seeding complete.\n");
  } catch (err) {
    console.error("Seed check/run failed:", err.message);
  }
}

function printKey(key) {
  console.log("\n" + "=".repeat(60));
  console.log("Add to .env on VPS:\n");
  console.log(`NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=${key}`);
  console.log("\nThen rebuild frontend:");
  console.log("  docker compose build frontend --no-cache && docker compose up -d frontend");
  console.log("=".repeat(60) + "\n");
}

main().catch((err) => {
  console.error("Init failed:", err.message);
  process.exit(1);
});
