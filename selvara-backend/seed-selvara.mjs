/**
 * Seed SELVARA products into Medusa via Admin API
 * Run: node seed-selvara.mjs
 */

const BASE = process.env.MEDUSA_BACKEND_URL || "http://localhost:9000";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@selvara.ru";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "selvara2024";

// Parse "60 000 ₽" → 6000000 (kopecks)
function parsePrice(str) {
  return parseInt(str.replace(/[^\d]/g, ""), 10) * 100;
}

const products = [
  {
    title: "Selvara Linen",
    handle: "selvara-linen",
    description: "Linen построен на льняном волокне и латексированной кокосовой койре. Независимые пружины распределяют нагрузку точечно.",
    sizes: [
      { size: "80×190", price: "32 000 ₽" },
      { size: "90×200", price: "35 000 ₽" },
      { size: "120×200", price: "45 000 ₽" },
      { size: "140×200", price: "52 000 ₽" },
      { size: "160×200", price: "60 000 ₽" },
      { size: "180×200", price: "68 000 ₽" },
      { size: "200×200", price: "74 000 ₽" },
    ],
  },
  {
    title: "Selvara Coconut",
    handle: "selvara-coconut",
    description: "Coconut сочетает упругость натурального латекса с плотностью кокосовой койры. Средняя жёсткость.",
    sizes: [
      { size: "80×190", price: "33 000 ₽" },
      { size: "90×200", price: "37 000 ₽" },
      { size: "120×200", price: "47 000 ₽" },
      { size: "140×200", price: "54 000 ₽" },
      { size: "160×200", price: "62 000 ₽" },
      { size: "180×200", price: "70 000 ₽" },
      { size: "200×200", price: "76 000 ₽" },
    ],
  },
  {
    title: "Selvara Aero",
    handle: "selvara-aero",
    description: "Aero использует перфорированный латекс с постоянным воздухообменом. Мягкая посадка без эффекта ямы.",
    sizes: [
      { size: "80×190", price: "32 500 ₽" },
      { size: "90×200", price: "36 000 ₽" },
      { size: "120×200", price: "46 000 ₽" },
      { size: "140×200", price: "53 000 ₽" },
      { size: "160×200", price: "61 000 ₽" },
      { size: "180×200", price: "69 000 ₽" },
      { size: "200×200", price: "75 000 ₽" },
    ],
  },
  {
    title: "Selvara Origin",
    handle: "selvara-origin",
    description: "Origin — первая модель с пружинным блоком 1024 пружины на м². Средняя жёсткость, повышенная точность поддержки.",
    sizes: [
      { size: "80×190", price: "38 000 ₽" },
      { size: "90×200", price: "42 000 ₽" },
      { size: "120×200", price: "54 000 ₽" },
      { size: "140×200", price: "64 000 ₽" },
      { size: "160×200", price: "72 000 ₽" },
      { size: "180×200", price: "81 000 ₽" },
      { size: "200×200", price: "89 000 ₽" },
    ],
  },
  {
    title: "Selvara Latex",
    handle: "selvara-latex",
    description: "Latex — беспружинный. Десять чередующихся слоёв натурального латекса и кокоса. Двусторонний.",
    sizes: [
      { size: "80×190", price: "41 000 ₽" },
      { size: "90×200", price: "45 000 ₽" },
      { size: "120×200", price: "58 000 ₽" },
      { size: "140×200", price: "69 000 ₽" },
      { size: "160×200", price: "78 000 ₽" },
      { size: "180×200", price: "88 000 ₽" },
      { size: "200×200", price: "97 000 ₽" },
    ],
  },
  {
    title: "Selvara Signature",
    handle: "selvara-signature",
    description: "Signature объединяет кокос, латекс и мемори-пену на базе из 1024 независимых пружин.",
    sizes: [
      { size: "80×190", price: "50 000 ₽" },
      { size: "90×200", price: "55 000 ₽" },
      { size: "120×200", price: "70 000 ₽" },
      { size: "140×200", price: "84 000 ₽" },
      { size: "160×200", price: "95 000 ₽" },
      { size: "180×200", price: "108 000 ₽" },
      { size: "200×200", price: "118 000 ₽" },
    ],
  },
  {
    title: "Selvara Reserve",
    handle: "selvara-reserve",
    description: "Reserve создан из бельгийского натурального латекса и мемори-пены на пружинах 1024/м². Флагманская модель.",
    sizes: [
      { size: "80×190", price: "62 000 ₽" },
      { size: "90×200", price: "68 000 ₽" },
      { size: "120×200", price: "87 000 ₽" },
      { size: "140×200", price: "105 000 ₽" },
      { size: "160×200", price: "118 000 ₽" },
      { size: "180×200", price: "133 000 ₽" },
      { size: "200×200", price: "146 000 ₽" },
    ],
  },
];

async function main() {
  // 1. Auth
  const authRes = await fetch(`${BASE}/auth/user/emailpass`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD }),
  });
  const { token } = await authRes.json();
  const headers = { "Content-Type": "application/json", Authorization: `Bearer ${token}` };

  // 2. Get sales channel
  const scRes = await fetch(`${BASE}/admin/sales-channels`, { headers });
  const { sales_channels } = await scRes.json();
  const salesChannelId = sales_channels[0]?.id;
  console.log("Sales channel:", salesChannelId);

  // 3. Create products
  for (const p of products) {
    console.log(`\nCreating: ${p.title}`);

    const variants = p.sizes.map((s) => ({
      title: s.size,
      options: { Size: s.size },
      prices: [{ currency_code: "rub", amount: parsePrice(s.price) }],
      manage_inventory: false,
    }));

    const body = {
      title: p.title,
      handle: p.handle,
      description: p.description,
      status: "published",
      options: [{ title: "Size", values: p.sizes.map((s) => s.size) }],
      variants,
      sales_channels: salesChannelId ? [{ id: salesChannelId }] : [],
    };

    const res = await fetch(`${BASE}/admin/products`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (data.product) {
      console.log(`  ✓ Created: ${data.product.id} (${data.product.variants?.length} variants)`);
    } else {
      console.error(`  ✗ Error:`, JSON.stringify(data).slice(0, 200));
    }
  }

  console.log("\nDone.");
}

main().catch(console.error);
