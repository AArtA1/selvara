import { Hero } from "@/components/Hero/Hero";
import { Manifest } from "@/components/Manifest/Manifest";
import { MaterialsSection } from "@/components/MaterialsSection/MaterialsSection";
import { LineupSection } from "@/components/LineupSection/LineupSection";
import { QuizTeaser } from "@/components/QuizTeaser/QuizTeaser";
import { ProductionSection } from "@/components/ProductionSection/ProductionSection";
import { ReviewsSection } from "@/components/ReviewsSection/ReviewsSection";
import { HomeCta } from "@/components/HomeCta/HomeCta";
import { FadeIn } from "@/components/FadeIn/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn><Manifest /></FadeIn>
      <FadeIn><MaterialsSection /></FadeIn>
      <FadeIn><LineupSection /></FadeIn>
      <FadeIn><QuizTeaser /></FadeIn>
      <FadeIn><ProductionSection /></FadeIn>
      <FadeIn><ReviewsSection /></FadeIn>
      <FadeIn><HomeCta /></FadeIn>
    </>
  );
}
