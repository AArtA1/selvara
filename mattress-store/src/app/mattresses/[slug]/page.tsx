import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import { ProductHero } from "@/components/ProductHero/ProductHero";
import { FeatureGrid } from "@/components/FeatureGrid/FeatureGrid";
import { MattressLayers } from "@/components/MattressLayers/MattressLayers";
import { SizeTable } from "@/components/SizeTable/SizeTable";
import { Accordion } from "@/components/Accordion/Accordion";
import { RelatedProducts } from "@/components/RelatedProducts/RelatedProducts";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { productDetails } from "@/data/productDetails";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(productDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = productDetails[slug];
  if (!detail) return {};

  return {
    title: detail.name,
    description: detail.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = productDetails[slug];

  if (!detail) {
    notFound();
  }

  const product = products.find((p) => p.slug === slug);
  const relatedProducts = products.filter((p) =>
    detail.relatedSlugs.includes(p.slug)
  );

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Mattresses", href: "/mattresses" },
          { label: detail.name },
        ]}
      />
      <ProductHero detail={detail} price={product?.price || ""} />
      <FeatureGrid features={detail.features} />
      <MattressLayers layers={detail.layers} />
      <SizeTable sizes={detail.sizes} />
      <Accordion items={detail.faqs} />
      <RelatedProducts products={relatedProducts} />
      <CtaBanner
        title="Sleep on it. For a full year."
        subtitle="Every Selvara mattress comes with a 365-night home trial. If you don't love it, we'll pick it up for free."
      />
    </>
  );
}
