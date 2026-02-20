import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero/PageHero";
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
      <PageHero
        title="Линейка матрасов"
        subtitle="Натуральные материалы, собственное производство."
      />
      <MattressesCatalog products={products} />
      <ComparisonTeaser />
      <ValueProps />
      <CtaBanner />
    </>
  );
}
