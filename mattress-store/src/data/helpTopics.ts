import type { HelpTopic } from "@/data/types";

export const helpTopics: HelpTopic[] = [
  {
    id: "ordering",
    title: "Ordering",
    description: "How to place an order, payment options, and order modifications.",
    icon: "cart",
  },
  {
    id: "delivery",
    title: "Delivery & Setup",
    description: "Delivery timelines, white-glove setup, and scheduling your delivery.",
    icon: "truck",
  },
  {
    id: "returns",
    title: "Returns & Exchanges",
    description: "Our 365-night trial, return process, and exchange options.",
    icon: "return",
  },
  {
    id: "warranty",
    title: "Warranty",
    description: "Lifetime warranty coverage, claims process, and what's included.",
    icon: "shield",
  },
  {
    id: "financing",
    title: "Financing",
    description: "0% APR financing options, monthly payments, and pre-qualification.",
    icon: "finance",
  },
  {
    id: "care",
    title: "Mattress Care",
    description: "Cleaning tips, mattress rotation, and maintaining your mattress.",
    icon: "care",
  },
];
