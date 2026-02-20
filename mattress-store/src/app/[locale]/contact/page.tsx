import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero/PageHero";
import { ContactGrid } from "@/components/ContactGrid/ContactGrid";
import { HelpTopicsGrid } from "@/components/HelpTopicsGrid/HelpTopicsGrid";
import { Accordion } from "@/components/Accordion/Accordion";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { helpTopics } from "@/data/helpTopics";
import { generalFaqs } from "@/data/generalFaqs";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="How Can We Help?"
        subtitle="Our sleep consultants are ready to answer any question."
      />
      <ContactGrid />
      <HelpTopicsGrid topics={helpTopics} />
      <Accordion items={generalFaqs} />
      <CtaBanner />
    </>
  );
}
