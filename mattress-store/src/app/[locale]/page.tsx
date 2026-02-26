import { Hero } from "@/components/Hero/Hero";
import { MaterialsSection } from "@/components/MaterialsSection/MaterialsSection";

import { QuizTeaser } from "@/components/QuizTeaser/QuizTeaser";
import { ProductionSection } from "@/components/ProductionSection/ProductionSection";
import { HomeCta } from "@/components/HomeCta/HomeCta";
import { FadeIn } from "@/components/FadeIn/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn><MaterialsSection /></FadeIn>
      <FadeIn><QuizTeaser /></FadeIn>
      <FadeIn><ProductionSection /></FadeIn>
      <FadeIn><HomeCta /></FadeIn>
    </>
  );
}
