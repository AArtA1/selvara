import { Hero } from "@/components/Hero/Hero";
import { ValueProps } from "@/components/ValueProps/ValueProps";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { WhySelvara } from "@/components/WhySelvara/WhySelvara";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
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
        <ProductGrid products={products.slice(0, 3)} title="Our Collections" />
      </FadeIn>
      <WhySelvara />
      <FadeIn>
        <ReviewsSection />
      </FadeIn>
      <FadeIn>
        <CtaBanner />
      </FadeIn>
    </>
  );
}
