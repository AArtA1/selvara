import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero/PageHero";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { BundleCard } from "@/components/BundleCard/BundleCard";
import { ValueProps } from "@/components/ValueProps/ValueProps";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Sale",
  description:
    "Thoughtful prices on premium mattresses. Explore current offers on select Selvara mattresses and bundles.",
};

export default function SalePage() {
  const saleProducts = products.filter((p) => p.onSale);

  return (
    <>
      <PageHero
        title="Thoughtful Prices on Premium Sleep"
        subtitle="Quality rest shouldn't require compromise. Explore our current offers."
      />
      <ProductGrid
        products={saleProducts}
        title="Current Offers"
        background="warm"
      />
      <BundleCard />
      <ValueProps />
      <CtaBanner
        title="Premium Comfort, Considered Price"
        subtitle="Every Selvara mattress includes free delivery, setup, and a 365-night trial."
      />
    </>
  );
}
