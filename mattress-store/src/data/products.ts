import type { Product } from "@/data/types";

export const products: Product[] = [
  {
    slug: "selvara-classic",
    name: "Selvara Classic",
    image:
      "https://saatva.imgix.net/products/saatva-classic/lifestyle1-plush-soft/saatva-classic-lifestyle1-plush-soft-3-2.jpg?w=348&auto=format",
    alt: "Selvara Classic mattress in a bedroom setting",
    description:
      "Our signature luxury innerspring. Exceptional back support with premium comfort for every sleeper.",
    price: "$1,095",
    salePrice: "$895",
    saleLabel: "Save $200",
    onSale: true,
  },
  {
    slug: "memory-foam-hybrid",
    name: "Memory Foam Hybrid",
    image:
      "https://saatva.imgix.net/products/memory-foam-hybrid/sweep/memory-foam-hybrid-sweep-3-2.jpg?w=348&auto=format",
    alt: "Memory Foam Hybrid mattress",
    description:
      "Gel-infused memory foam meets the buoyancy of a premium innerspring for the best of both worlds.",
    price: "$1,095",
  },
  {
    slug: "latex-hybrid",
    name: "Selvara Latex Hybrid",
    image:
      "https://saatva.imgix.net/products/saatva-latex-hybrid/lifestyle/standard/saatva-latex-hybrid-lifestyle-standard-3-2.jpg?w=348&auto=format",
    alt: "Selvara Latex Hybrid mattress",
    description:
      "Natural latex and individually wrapped coils for responsive, buoyant, eco-friendly comfort.",
    price: "$1,295",
    salePrice: "$995",
    saleLabel: "Save $300",
    onSale: true,
  },
  {
    slug: "contour5",
    name: "Contour5",
    image:
      "https://saatva.imgix.net/products/saatva-contour5/room-above/standard/saatva-contour5-room-above-standard-3-2.jpg?w=348&auto=format",
    alt: "Contour5 mattress",
    description:
      "Advanced body-hugging memory foam for a deeper, more pressure-free sleep experience.",
    price: "$1,295",
  },
  {
    slug: "zenhaven",
    name: "Zenhaven",
    image:
      "https://saatva.imgix.net/products/zenhaven/angle/standard/zenhaven-angle-standard-3-2.jpg?w=348&auto=format",
    alt: "Zenhaven mattress",
    description:
      "Flippable 100% natural Talalay latex mattress with two comfort options in one bed.",
    price: "$1,695",
  },
  {
    slug: "selvara-rx",
    name: "Selvara Rx",
    image:
      "https://saatva.imgix.net/products/saatva-rx/lifestyle/saatva-rx-lifestyle-3-2.jpg?w=348&auto=format",
    alt: "Selvara Rx therapeutic mattress",
    description:
      "Therapeutic support specifically designed for people with chronic back and joint conditions.",
    price: "$1,695",
    salePrice: "$1,395",
    saleLabel: "Save $300",
    onSale: true,
  },
];
