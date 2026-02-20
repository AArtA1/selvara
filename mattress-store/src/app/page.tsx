import { Hero } from "@/components/Hero/Hero";
import { ValueProps } from "@/components/ValueProps/ValueProps";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { MaterialsSection } from "@/components/MaterialsSection/MaterialsSection";
import { FirmnessFinder } from "@/components/FirmnessFinder/FirmnessFinder";
import { ProductionSection } from "@/components/ProductionSection/ProductionSection";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <ValueProps />
      </FadeIn>
      <FadeIn>
        <ProductGrid products={products} title="Линейка" />
      </FadeIn>
      <FadeIn>
        <MaterialsSection />
      </FadeIn>
      <FadeIn>
        <FirmnessFinder />
      </FadeIn>
      <FadeIn>
        <ProductionSection />
      </FadeIn>
      <FadeIn>
        <CtaBanner />
      </FadeIn>
    </>
  );
}
