import type { Metadata } from "next";
import { ComparisonTeaser } from "@/components/ComparisonTeaser/ComparisonTeaser";
import { ValueProps } from "@/components/ValueProps/ValueProps";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { products } from "@/data/products";
import { MattressesCatalog } from "./MattressesCatalog";

export const metadata: Metadata = {
  title: "Mattresses",
  description:
    "Browse our full collection of premium mattresses. Innerspring, memory foam, latex, and hybrid options with 365-night trial.",
};

export default function MattressesPage() {
  return (
    <>
      <MattressesCatalog products={products} />
      <ComparisonTeaser />
      <ValueProps />
      <CtaBanner />
    </>
  );
}
