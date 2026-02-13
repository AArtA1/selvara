import { Hero } from "@/components/Hero/Hero";
import { ValueProps } from "@/components/ValueProps/ValueProps";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { WhySelvara } from "@/components/WhySelvara/WhySelvara";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ProductGrid products={products} />
      <WhySelvara />
      <ReviewsSection />
      <CtaBanner />
    </>
  );
}
