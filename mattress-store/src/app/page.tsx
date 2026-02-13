import { Hero } from "@/components/Hero/Hero";
import { ValueProps } from "@/components/ValueProps/ValueProps";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { WhySaatva } from "@/components/WhySaatva/WhySaatva";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ProductGrid />
      <WhySaatva />
      <ReviewsSection />
      <CtaBanner />
    </>
  );
}
