import type { ProductDetail } from "@/data/types";

export const productDetails: Record<string, ProductDetail> = {
  "selvara-classic": {
    slug: "selvara-classic",
    name: "Selvara Classic",
    tagline: "Our signature luxury innerspring mattress",
    description:
      "The Selvara Classic combines premium Euro pillow top comfort with a durable dual steel coil support system. Designed for every sleep position, it delivers exceptional back support and lasting quality night after night.",
    images: [
      "https://saatva.imgix.net/products/saatva-classic/lifestyle1-plush-soft/saatva-classic-lifestyle1-plush-soft-3-2.jpg?w=600&auto=format",
      "https://saatva.imgix.net/products/saatva-classic/room/standard/saatva-classic-room-standard-3-2.jpg?w=600&auto=format",
    ],
    features: [
      {
        icon: "support",
        title: "Dual Coil Support",
        description:
          "Individually wrapped coils paired with a durable steel coil base for responsive, full-body support.",
      },
      {
        icon: "comfort",
        title: "Euro Pillow Top",
        description:
          "A luxurious pillow top layer sewn flush into the mattress for a smooth, plush sleeping surface.",
      },
      {
        icon: "cooling",
        title: "Breathable Design",
        description:
          "Natural cotton cover and open coil design promote airflow, keeping you cool throughout the night.",
      },
    ],
    layers: [
      { name: "Organic Cotton Cover", description: "Soft, breathable top layer made from certified organic cotton." },
      { name: "Euro Pillow Top", description: "High-density comfort foam sewn into the cover for plush support." },
      { name: "Lumbar Support Pad", description: "Targeted lumbar zone for enhanced lower back support." },
      { name: "Individually Wrapped Coils", description: "Responsive coils that contour to your body and minimize motion transfer." },
      { name: "Durable Steel Coil Base", description: "Sturdy base layer providing foundational support and durability." },
    ],
    sizes: [
      { size: "Twin", dimensions: "99 x 190 cm", price: "$795" },
      { size: "Twin XL", dimensions: "99 x 203 cm", price: "$895" },
      { size: "Full", dimensions: "137 x 190 cm", price: "$995" },
      { size: "Queen", dimensions: "152 x 203 cm", price: "$1,095" },
      { size: "King", dimensions: "193 x 203 cm", price: "$1,395" },
      { size: "Cal King", dimensions: "183 x 213 cm", price: "$1,395" },
    ],
    faqs: [
      {
        question: "What firmness levels are available?",
        answer: "The Selvara Classic comes in three comfort levels: Plush Soft, Luxury Firm, and Firm. Luxury Firm is our most popular choice.",
      },
      {
        question: "How long does the mattress last?",
        answer: "With proper care, the Selvara Classic is designed to maintain its comfort and support for 10-15 years. It comes with a lifetime warranty.",
      },
      {
        question: "Is this mattress good for back pain?",
        answer: "Yes. The dual coil system with targeted lumbar support is designed to promote proper spinal alignment, which can help alleviate back pain.",
      },
      {
        question: "Do I need a specific foundation?",
        answer: "The Selvara Classic works with any solid, flat surface including platform beds, adjustable bases, box springs, and slatted frames with slats no more than 7 cm apart.",
      },
    ],
    relatedSlugs: ["memory-foam-hybrid", "latex-hybrid", "selvara-rx"],
    valueProps: [
      { label: "365-Night Trial", detail: "Sleep on it for a full year" },
      { label: "Free Delivery", detail: "White-glove setup included" },
      { label: "Lifetime Warranty", detail: "We stand behind our craft" },
    ],
  },

  "memory-foam-hybrid": {
    slug: "memory-foam-hybrid",
    name: "Memory Foam Hybrid",
    tagline: "The best of both worlds",
    description:
      "Our Memory Foam Hybrid pairs gel-infused memory foam with a premium innerspring system. The result is a mattress that hugs your body while providing the responsive support of traditional coils.",
    images: [
      "https://saatva.imgix.net/products/memory-foam-hybrid/sweep/memory-foam-hybrid-sweep-3-2.jpg?w=600&auto=format",
      "https://saatva.imgix.net/products/memory-foam-hybrid/room-corner/standard/memory-foam-hybrid-room-corner-standard-3-2.jpg?w=600&auto=format",
    ],
    features: [
      {
        icon: "support",
        title: "Gel-Infused Memory Foam",
        description:
          "Premium memory foam with cooling gel infusion that contours to your body and relieves pressure points.",
      },
      {
        icon: "comfort",
        title: "Hybrid Construction",
        description:
          "Individually wrapped coils provide responsive support while the foam layers deliver plush comfort.",
      },
      {
        icon: "cooling",
        title: "Cool Sleep Surface",
        description:
          "Phase-change cooling cover and gel memory foam work together to regulate temperature all night.",
      },
    ],
    layers: [
      { name: "Cooling Cover", description: "Phase-change fabric that absorbs and releases heat to maintain a comfortable temperature." },
      { name: "Gel Memory Foam", description: "3 inches of gel-infused memory foam for pressure relief and body contouring." },
      { name: "Transition Foam", description: "Responsive foam layer that prevents you from sinking too deep." },
      { name: "Wrapped Coil System", description: "Individually pocketed coils for targeted support and motion isolation." },
      { name: "Foam Base", description: "High-density base foam for durability and edge support." },
    ],
    sizes: [
      { size: "Twin", dimensions: "99 x 190 cm", price: "$795" },
      { size: "Twin XL", dimensions: "99 x 203 cm", price: "$895" },
      { size: "Full", dimensions: "137 x 190 cm", price: "$995" },
      { size: "Queen", dimensions: "152 x 203 cm", price: "$1,095" },
      { size: "King", dimensions: "193 x 203 cm", price: "$1,395" },
      { size: "Cal King", dimensions: "183 x 213 cm", price: "$1,395" },
    ],
    faqs: [
      {
        question: "Does memory foam sleep hot?",
        answer: "Our gel-infused memory foam and phase-change cover are specifically designed to prevent heat retention. Most sleepers report a noticeably cooler experience compared to traditional memory foam.",
      },
      {
        question: "How firm is this mattress?",
        answer: "The Memory Foam Hybrid offers a medium feel — firm enough for proper support but soft enough to relieve pressure points. It's ideal for side and back sleepers.",
      },
      {
        question: "Will I feel my partner move?",
        answer: "The individually wrapped coils and memory foam layers provide excellent motion isolation, so you're unlikely to be disturbed by your partner's movements.",
      },
    ],
    relatedSlugs: ["selvara-classic", "contour5", "latex-hybrid"],
    valueProps: [
      { label: "365-Night Trial", detail: "Sleep on it for a full year" },
      { label: "Free Delivery", detail: "White-glove setup included" },
      { label: "Lifetime Warranty", detail: "We stand behind our craft" },
    ],
  },

  "latex-hybrid": {
    slug: "latex-hybrid",
    name: "Selvara Latex Hybrid",
    tagline: "Natural comfort, responsive support",
    description:
      "The Selvara Latex Hybrid combines natural Talalay latex with individually wrapped coils for a buoyant, responsive feel. Naturally hypoallergenic and eco-friendly, it's the choice for health-conscious sleepers.",
    images: [
      "https://saatva.imgix.net/products/saatva-latex-hybrid/lifestyle/standard/saatva-latex-hybrid-lifestyle-standard-3-2.jpg?w=600&auto=format",
      "https://saatva.imgix.net/products/saatva-latex-hybrid/angle/standard/saatva-latex-hybrid-angle-standard-3-2.jpg?w=600&auto=format",
    ],
    features: [
      {
        icon: "support",
        title: "Natural Talalay Latex",
        description:
          "Sustainably sourced latex that's naturally responsive, durable, and resistant to dust mites and mold.",
      },
      {
        icon: "comfort",
        title: "Buoyant Feel",
        description:
          "Unlike memory foam, latex responds instantly to your movements for an energizing, floating sensation.",
      },
      {
        icon: "cooling",
        title: "Naturally Cool",
        description:
          "Latex's open-cell structure and pin-hole design allow maximum airflow for a consistently cool sleep.",
      },
    ],
    layers: [
      { name: "Organic Cotton Cover", description: "GOTS-certified organic cotton for a soft, chemical-free sleep surface." },
      { name: "Natural Talalay Latex", description: "3 inches of naturally responsive latex for pressure relief and bounce." },
      { name: "Transition Poly Foam", description: "Supportive foam layer that works with the coils for ergonomic support." },
      { name: "Individually Wrapped Coils", description: "Recycled steel coils that respond independently for precise support." },
      { name: "Recycled Steel Base Coils", description: "Durable foundation using recycled materials for eco-conscious construction." },
    ],
    sizes: [
      { size: "Twin", dimensions: "99 x 190 cm", price: "$995" },
      { size: "Twin XL", dimensions: "99 x 203 cm", price: "$1,095" },
      { size: "Full", dimensions: "137 x 190 cm", price: "$1,195" },
      { size: "Queen", dimensions: "152 x 203 cm", price: "$1,295" },
      { size: "King", dimensions: "193 x 203 cm", price: "$1,595" },
      { size: "Cal King", dimensions: "183 x 213 cm", price: "$1,595" },
    ],
    faqs: [
      {
        question: "Is the latex natural or synthetic?",
        answer: "We use 100% natural Talalay latex harvested from rubber trees. No synthetic fillers or blends.",
      },
      {
        question: "Is this mattress good for allergies?",
        answer: "Yes. Natural latex is naturally hypoallergenic, antimicrobial, and resistant to dust mites. The organic cotton cover adds another layer of purity.",
      },
      {
        question: "What does latex feel like compared to memory foam?",
        answer: "Latex has a more buoyant, responsive feel. Rather than sinking in like memory foam, you float on top with gentle contouring. Most people describe it as 'sleeping on, not in' the mattress.",
      },
    ],
    relatedSlugs: ["zenhaven", "selvara-classic", "memory-foam-hybrid"],
    valueProps: [
      { label: "365-Night Trial", detail: "Sleep on it for a full year" },
      { label: "Free Delivery", detail: "White-glove setup included" },
      { label: "Lifetime Warranty", detail: "We stand behind our craft" },
    ],
  },

  contour5: {
    slug: "contour5",
    name: "Contour5",
    tagline: "Deep, pressure-free comfort",
    description:
      "The Contour5 is our most advanced body-conforming mattress. Five layers of premium foam create a truly cradling experience that relieves pressure from head to toe. Ideal for side sleepers and those seeking maximum pressure relief.",
    images: [
      "https://saatva.imgix.net/products/saatva-contour5/room-above/standard/saatva-contour5-room-above-standard-3-2.jpg?w=600&auto=format",
      "https://saatva.imgix.net/products/saatva-contour5/angle/standard/saatva-contour5-angle-standard-3-2.jpg?w=600&auto=format",
    ],
    features: [
      {
        icon: "support",
        title: "5-Layer Foam System",
        description:
          "Five specialized foam layers work in harmony to deliver targeted support and body-conforming comfort.",
      },
      {
        icon: "comfort",
        title: "Pressure Relief",
        description:
          "AirCradle memory foam adapts to your body shape, eliminating pressure points at hips and shoulders.",
      },
      {
        icon: "cooling",
        title: "Heat-Managed Comfort",
        description:
          "Gel-infused and phase-change materials actively manage temperature for cooler sleep.",
      },
    ],
    layers: [
      { name: "Phase-Change Cover", description: "Temperature-regulating fabric that feels cool to the touch." },
      { name: "AirCradle Memory Foam", description: "Proprietary foam that provides deep contouring without the 'stuck' feeling." },
      { name: "Gel Memory Foam", description: "Cooling gel-infused layer for additional pressure relief." },
      { name: "Transition Foam", description: "Prevents excessive sinking while maintaining body-conforming feel." },
      { name: "High-Density Support Base", description: "Dense foam foundation for lasting durability and support." },
    ],
    sizes: [
      { size: "Twin", dimensions: "99 x 190 cm", price: "$995" },
      { size: "Twin XL", dimensions: "99 x 203 cm", price: "$1,095" },
      { size: "Full", dimensions: "137 x 190 cm", price: "$1,195" },
      { size: "Queen", dimensions: "152 x 203 cm", price: "$1,295" },
      { size: "King", dimensions: "193 x 203 cm", price: "$1,595" },
      { size: "Cal King", dimensions: "183 x 213 cm", price: "$1,595" },
    ],
    faqs: [
      {
        question: "Is the Contour5 right for side sleepers?",
        answer: "The Contour5 is our top recommendation for side sleepers. Its deep contouring relieves pressure at the shoulders and hips, the two areas where side sleepers need it most.",
      },
      {
        question: "Will I feel stuck in this mattress?",
        answer: "No. Our AirCradle memory foam is designed to be more responsive than traditional memory foam. It contours deeply but releases quickly when you move.",
      },
      {
        question: "How does it compare to the Memory Foam Hybrid?",
        answer: "The Contour5 offers a deeper, more enveloping feel since it's an all-foam mattress. The Memory Foam Hybrid has more bounce from its coil layer. Choose the Contour5 if you prefer a cradling sensation.",
      },
    ],
    relatedSlugs: ["memory-foam-hybrid", "selvara-rx", "selvara-classic"],
    valueProps: [
      { label: "365-Night Trial", detail: "Sleep on it for a full year" },
      { label: "Free Delivery", detail: "White-glove setup included" },
      { label: "Lifetime Warranty", detail: "We stand behind our craft" },
    ],
  },

  zenhaven: {
    slug: "zenhaven",
    name: "Zenhaven",
    tagline: "Two comfort levels in one bed",
    description:
      "The Zenhaven is a flippable mattress crafted from 100% natural Talalay latex. Flip to one side for a Luxury Plush feel, or the other for Gentle Firm. It's the ultimate in natural sleep comfort and versatility.",
    images: [
      "https://saatva.imgix.net/products/zenhaven/angle/standard/zenhaven-angle-standard-3-2.jpg?w=600&auto=format",
      "https://saatva.imgix.net/products/zenhaven/room/standard/zenhaven-room-standard-3-2.jpg?w=600&auto=format",
    ],
    features: [
      {
        icon: "support",
        title: "100% Natural Latex",
        description:
          "Four layers of American Talalay latex — no polyurethane foam, no synthetic blends. Pure natural comfort.",
      },
      {
        icon: "comfort",
        title: "Flippable Design",
        description:
          "Two firmness options in one mattress. Luxury Plush on one side, Gentle Firm on the other.",
      },
      {
        icon: "cooling",
        title: "Organic Materials",
        description:
          "GOTS-certified organic New Zealand wool and organic cotton create a naturally breathable, chemical-free sleep surface.",
      },
    ],
    layers: [
      { name: "Organic Cotton Cover", description: "Soft, breathable organic cotton on both sides." },
      { name: "Organic Wool Layer", description: "Natural temperature regulation and moisture wicking." },
      { name: "Soft Talalay Latex", description: "Plush comfort layer (Luxury Plush side)." },
      { name: "Firm Talalay Latex Core", description: "Supportive center that provides the foundation." },
      { name: "Medium Talalay Latex", description: "Gently firm comfort layer (Gentle Firm side)." },
    ],
    sizes: [
      { size: "Twin", dimensions: "99 x 190 cm", price: "$1,395" },
      { size: "Twin XL", dimensions: "99 x 203 cm", price: "$1,495" },
      { size: "Full", dimensions: "137 x 190 cm", price: "$1,595" },
      { size: "Queen", dimensions: "152 x 203 cm", price: "$1,695" },
      { size: "King", dimensions: "193 x 203 cm", price: "$2,095" },
      { size: "Cal King", dimensions: "183 x 213 cm", price: "$2,095" },
    ],
    faqs: [
      {
        question: "How do I know which side to sleep on?",
        answer: "We recommend trying the Luxury Plush side first. If you prefer a firmer feel, simply flip the mattress. Most sleepers find their ideal side within the first week.",
      },
      {
        question: "Is all the latex truly natural?",
        answer: "Yes. The Zenhaven uses 100% American Talalay latex. No synthetic latex, no polyurethane foam. It's one of the purest mattresses available.",
      },
      {
        question: "How heavy is this mattress?",
        answer: "A Queen Zenhaven weighs approximately 45 kg. We recommend having two people flip it. Our white-glove delivery team will set it up on your preferred side.",
      },
    ],
    relatedSlugs: ["latex-hybrid", "selvara-classic", "selvara-rx"],
    valueProps: [
      { label: "365-Night Trial", detail: "Sleep on it for a full year" },
      { label: "Free Delivery", detail: "White-glove setup included" },
      { label: "Lifetime Warranty", detail: "We stand behind our craft" },
    ],
  },

  "selvara-rx": {
    slug: "selvara-rx",
    name: "Selvara Rx",
    tagline: "Therapeutic support for chronic pain",
    description:
      "The Selvara Rx is specifically engineered for people who suffer from chronic back, joint, or muscle pain. Its prescription-strength support system was developed in collaboration with orthopedic specialists to deliver targeted relief where you need it most.",
    images: [
      "https://saatva.imgix.net/products/saatva-rx/lifestyle/saatva-rx-lifestyle-3-2.jpg?w=600&auto=format",
      "https://saatva.imgix.net/products/saatva-rx/angle/standard/saatva-rx-angle-standard-3-2.jpg?w=600&auto=format",
    ],
    features: [
      {
        icon: "support",
        title: "Therapeutic Support",
        description:
          "Zoned support system with firmer support at the lumbar and softer cushioning at the shoulders for optimal spinal alignment.",
      },
      {
        icon: "comfort",
        title: "Pressure-Free Comfort",
        description:
          "High-density memory foam and responsive latex work together to eliminate pressure points without sacrificing support.",
      },
      {
        icon: "cooling",
        title: "Pain-Relieving Design",
        description:
          "Developed with orthopedic specialists to address the specific needs of chronic pain sufferers.",
      },
    ],
    layers: [
      { name: "Cooling Euro Top", description: "Breathable cover with built-in cooling technology." },
      { name: "Responsive Latex Layer", description: "Natural latex provides buoyant pressure relief." },
      { name: "High-Density Memory Foam", description: "Targeted support that adapts to your body's contours." },
      { name: "Zoned Lumbar Support", description: "Reinforced midsection for enhanced lower back support." },
      { name: "Wrapped Coil System", description: "Individually pocketed coils for responsive, motion-isolated support." },
    ],
    sizes: [
      { size: "Twin", dimensions: "99 x 190 cm", price: "$1,395" },
      { size: "Twin XL", dimensions: "99 x 203 cm", price: "$1,495" },
      { size: "Full", dimensions: "137 x 190 cm", price: "$1,595" },
      { size: "Queen", dimensions: "152 x 203 cm", price: "$1,695" },
      { size: "King", dimensions: "193 x 203 cm", price: "$2,095" },
      { size: "Cal King", dimensions: "183 x 213 cm", price: "$2,095" },
    ],
    faqs: [
      {
        question: "Do I need a doctor's recommendation?",
        answer: "No prescription or referral is needed. The 'Rx' in the name reflects its therapeutic-grade design, not a medical requirement. However, we always recommend consulting your healthcare provider about sleep-related pain.",
      },
      {
        question: "What conditions does the Rx help with?",
        answer: "The Selvara Rx is designed to help with chronic lower back pain, sciatica, joint pain, fibromyalgia, and general muscle soreness. Its zoned support promotes healthy spinal alignment.",
      },
      {
        question: "Is this mattress very firm?",
        answer: "The Selvara Rx offers a supportive-medium feel. It's firmer where you need structural support (lumbar) and softer where you need pressure relief (shoulders, hips). It's not uncomfortably firm.",
      },
    ],
    relatedSlugs: ["selvara-classic", "contour5", "memory-foam-hybrid"],
    valueProps: [
      { label: "365-Night Trial", detail: "Sleep on it for a full year" },
      { label: "Free Delivery", detail: "White-glove setup included" },
      { label: "Lifetime Warranty", detail: "We stand behind our craft" },
    ],
  },
};
