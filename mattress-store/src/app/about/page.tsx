import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero/PageHero";
import { SplitContent } from "@/components/SplitContent/SplitContent";
import { ValuesGrid } from "@/components/ValuesGrid/ValuesGrid";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Selvara — our story, our values, and our commitment to crafting the best sleep experience.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Designed for Better Sleep"
        subtitle="We believe everyone deserves to wake up feeling their best."
      />
      <SplitContent
        title="Our Story"
        text="Selvara was born from a simple idea: luxury sleep shouldn't come with a luxury price tag. We cut out the middlemen and sell directly to you, so every dollar goes into the quality of your mattress — not into retail markups. From our first mattress to our latest innovation, we've stayed true to one principle: craft it with care, price it with honesty."
        image="https://saatva.imgix.net/homepage/why-saatva/premium-quality/d-premium-quality.jpg?dpr=1&auto=format&w=720"
        alt="Selvara mattress craftsmanship"
        imagePosition="left"
      />
      <SplitContent
        title="How We Make Them"
        text="Every Selvara mattress is handcrafted to order. We use premium materials — from organic cotton and natural latex to tempered steel coils and gel-infused foams. Each mattress passes through multiple quality checks before it reaches your door. No mass production lines, no shortcuts. Just thoughtful manufacturing that results in a mattress you can feel the difference in."
        image="https://saatva.imgix.net/homepage/why-saatva/crafted-in-america/d-crafted-in-america.jpg?dpr=1&auto=format&w=720"
        alt="Mattress manufacturing process"
        imagePosition="right"
      />
      <SplitContent
        title="Better for the Planet"
        text="Sustainability isn't a buzzword for us — it's how we operate. We use organic and recycled materials wherever possible, minimize packaging waste, and partner with responsible suppliers. Our mattresses are CertiPUR-US certified, meaning they're made without harmful chemicals. When you choose Selvara, you're choosing a mattress that's better for you and the environment."
        image="https://saatva.imgix.net/homepage/why-saatva/sustainability/d-sustainability.jpg?dpr=1&auto=format&w=720"
        alt="Sustainable materials"
        imagePosition="left"
      />
      <ValuesGrid />
      <CtaBanner
        title="Feel the Difference"
        subtitle="Experience Selvara with our 365-night risk-free trial."
        buttonText="Browse Mattresses"
      />
    </>
  );
}
