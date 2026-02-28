import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductHero } from "@/components/ProductHero/ProductHero";
import { FeatureGrid } from "@/components/FeatureGrid/FeatureGrid";
import { MattressLayers } from "@/components/MattressLayers/MattressLayers";
import { SizeTable } from "@/components/SizeTable/SizeTable";
import { Accordion } from "@/components/Accordion/Accordion";
import { RelatedProducts } from "@/components/RelatedProducts/RelatedProducts";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";
import { ValueProps } from "@/components/ValueProps/ValueProps";
import { productDetails } from "@/data/productDetails";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ["ru", "en"];
  const slugs = Object.keys(productDetails);
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
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
  const { locale, slug } = await params;
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
      <ProductHero detail={detail} price={product?.price || ""} />
      <FeatureGrid features={detail.features} images={detail.images} />
      <MattressLayers layers={detail.layers} />
      <SizeTable sizes={detail.sizes} />
      <Accordion items={detail.faqs} title={locale === "ru" ? "Вопросы и ответы" : "Frequently Asked Questions"} />
      <RelatedProducts products={relatedProducts} />
      <ValueProps />
      <CtaBanner />
    </>
  );
}
