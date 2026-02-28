/**
 * screenshot.mjs — WAT screenshot tool
 * Usage: node screenshot.mjs <url> [label]
 * Saves to: ./temporary screenshots/screenshot-N[-label].png
 */
import pkg from "/Users/aslanyan.artak3/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.js";
const { chromium } = pkg;
import { existsSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";

const url = process.argv[2];
const label = process.argv[3] || "";

if (!url) {
  console.error("Usage: node screenshot.mjs <url> [label]");
  process.exit(1);
}

const dir = "./temporary screenshots";
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

// Auto-increment N
const existing = readdirSync(dir).filter((f) => f.endsWith(".png"));
const nums = existing.map((f) => parseInt(f.match(/^screenshot-(\d+)/)?.[1] || "0"));
const n = nums.length ? Math.max(...nums) + 1 : 1;

const filename = label
  ? `screenshot-${n}-${label}.png`
  : `screenshot-${n}.png`;
const outPath = join(dir, filename);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
// Scroll to bottom to trigger lazy-loaded images, then back to top
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(800);
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(300);
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved: ${outPath}`);
