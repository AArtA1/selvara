import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero/PageHero";
import { Timeline } from "@/components/Timeline/Timeline";
import { SplitContent } from "@/components/SplitContent/SplitContent";
import { PolicyCard } from "@/components/PolicyCard/PolicyCard";
import { Accordion } from "@/components/Accordion/Accordion";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";

const deliveryFaqs = [
  {
    question: "How long does delivery take?",
    answer: "Most orders ship within 7-14 business days. Our white-glove delivery team will contact you to schedule a 4-hour delivery window that works for your schedule.",
  },
  {
    question: "What does white-glove delivery include?",
    answer: "Our delivery team will bring your mattress into your room of choice, set it up on your bed frame or foundation, and remove all packaging. If you'd like, they'll also remove your old mattress at no extra charge.",
  },
  {
    question: "Can I return my mattress?",
    answer: "Yes. If you're not satisfied after sleeping on your mattress for at least 30 nights, contact us within your 365-night trial period. We'll arrange a free pickup and issue a full refund.",
  },
  {
    question: "Do I need to keep the box or packaging?",
    answer: "No. Our delivery team removes all packaging at the time of setup. If you decide to return, we'll handle everything — no box needed.",
  },
  {
    question: "What areas do you deliver to?",
    answer: "We currently offer free white-glove delivery throughout the continental United States. Delivery to Alaska, Hawaii, and U.S. territories is available for an additional fee.",
  },
  {
    question: "What happens to returned mattresses?",
    answer: "Returned mattresses in good condition are donated to local charities. Mattresses that can't be donated are responsibly recycled. Nothing goes to waste.",
  },
];

export const metadata: Metadata = {
  title: "Delivery & Returns",
  description:
    "Free white-glove delivery, 365-night trial, and hassle-free returns. Learn about Selvara's delivery and return policies.",
};

export default function DeliveryReturnsPage() {
  return (
    <>
      <PageHero
        title="Delivery, Returns & Warranty"
        subtitle="We make every step simple, from your door to your dreams."
      />
      <Timeline />
      <SplitContent
        title="Your 365-Night Home Trial"
        text="We believe the best way to know if a mattress is right for you is to sleep on it — in your own home, with your own pillows. That's why every Selvara mattress comes with a full 365-night trial. If it's not the perfect fit, we'll pick it up for free and refund every penny. No questions, no hassle."
        image="https://saatva.imgix.net/homepage/why-saatva/premium-quality/d-premium-quality.jpg?dpr=1&auto=format&w=720"
        alt="Comfortable bedroom with Selvara mattress"
        imagePosition="left"
      />
      <SplitContent
        title="Free White-Glove Delivery"
        text="Forget dragging a mattress-in-a-box up the stairs. Our professional delivery team brings your mattress directly to your bedroom, sets it up on your foundation, and removes all packaging. We'll even take your old mattress away — all completely free of charge."
        image="https://saatva.imgix.net/homepage/why-saatva/crafted-in-america/d-crafted-in-america.jpg?dpr=1&auto=format&w=720"
        alt="Selvara delivery service"
        imagePosition="right"
      />
      <PolicyCard />
      <Accordion items={deliveryFaqs} title="Delivery & Returns FAQ" />
      <CtaBanner
        title="Sleep on it. For a full year."
        subtitle="Not convinced? Try any Selvara mattress risk-free. We'll refund you if you don't love it."
      />
    </>
  );
}
