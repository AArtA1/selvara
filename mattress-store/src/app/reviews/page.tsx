import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero/PageHero";
import { ReviewSummary } from "@/components/ReviewSummary/ReviewSummary";
import { ReviewFilters } from "@/components/ReviewFilters/ReviewFilters";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { detailedReviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read real reviews from real Selvara customers. See why thousands of sleepers trust us for their best night's rest.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Real Reviews from Real Sleepers"
        subtitle="Hear from thousands of satisfied customers who've made the switch to Selvara."
      />
      <ReviewSummary reviews={detailedReviews} />
      <ReviewFilters reviews={detailedReviews} />
      <CtaBanner />
    </>
  );
}
