export interface Product {
  slug: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  tagline?: string;
  price: string;
  salePrice?: string;
  saleLabel?: string;
  onSale?: boolean;
}

export interface Review {
  quote: string;
  author: string;
  product: string;
}

export interface ReviewDetailed {
  id: string;
  title: string;
  quote: string;
  author: string;
  product: string;
  productSlug: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface SizePrice {
  size: string;
  dimensions: string;
  price: string;
  salePrice?: string;
}

export interface MattressLayer {
  name: string;
  description: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
  specs?: { label: string; value: string }[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  layers: MattressLayer[];
  sizes: SizePrice[];
  faqs: ProductFaq[];
  relatedSlugs: string[];
  valueProps: {
    label: string;
    detail: string;
  }[];
}

export interface HelpTopic {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GeneralFaq {
  question: string;
  answer: string;
  category: string;
}
