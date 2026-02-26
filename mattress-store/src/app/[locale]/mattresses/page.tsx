import type { Metadata } from "next";
import { ComparisonTeaser } from "@/components/ComparisonTeaser/ComparisonTeaser";
import { ValueProps } from "@/components/ValueProps/ValueProps";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { products } from "@/data/products";
import { MattressesCatalog } from "@/app/mattresses/MattressesCatalog";

export const metadata: Metadata = {
  title: "Mattresses",
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
