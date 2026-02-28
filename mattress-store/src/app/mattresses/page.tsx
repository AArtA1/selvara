import type { Metadata } from "next";
import { CraftSection } from "@/components/CraftSection/CraftSection";
import { BuyingGuide } from "@/components/BuyingGuide/BuyingGuide";
import { ValueProps } from "@/components/ValueProps/ValueProps";
import { products } from "@/data/products";
import { MattressesCatalog } from "./MattressesCatalog";

export const metadata: Metadata = {
  title: "Mattresses",
  description:
    "Коллекция матрасов Selvara. Натуральные материалы, собственное производство, 100 ночей на пробу.",
};

export default function MattressesPage() {
  return (
    <>
      <MattressesCatalog products={products} />
      <CraftSection />
      <BuyingGuide />
      <ValueProps />
    </>
  );
}
