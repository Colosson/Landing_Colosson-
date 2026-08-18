import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import SolutionPage from "../SolutionPage";
import {
  isSolutionSlug,
  solutionSlugs,
  solutions,
  type SolutionSlug,
} from "../solutionData";

type RouteProps = { params: Promise<{ solution: string }> };

async function requestBase() {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "colosson.net";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  return new URL(`${protocol}://${host}`);
}

export function generateStaticParams() {
  return solutionSlugs.map((solution) => ({ solution }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { solution: value } = await params;
  if (!isSolutionSlug(value)) return {};

  const record = solutions[value];
  const base = await requestBase();
  const canonical = new URL(`/${record.slug}`, base).toString();
  const image = new URL(record.image, base).toString();

  return {
    title: record.metaTitle,
    description: record.metaDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: record.metaTitle,
      description: record.metaDescription,
      type: "website",
      url: canonical,
      images: [
        {
          url: image,
          alt: record.imageAlt.en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: record.metaTitle,
      description: record.metaDescription,
      images: [image],
    },
  };
}

function faqSchema(slug: SolutionSlug) {
  const record = solutions[slug];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: record.copy.en.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function serviceSchema(slug: SolutionSlug) {
  const record = solutions[slug];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: record.copy.en.h1,
    description: record.metaDescription,
    url: `https://colosson.net/${record.slug}`,
    provider: {
      "@type": "Organization",
      "@id": "https://colosson.net/#organization",
      name: "Colosson",
      url: "https://colosson.net",
    },
    areaServed: ["Colombia", "Latin America"],
  };
}

export default async function SolutionRoute({ params }: RouteProps) {
  const { solution: value } = await params;
  if (!isSolutionSlug(value)) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(value)).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(value)).replace(/</g, "\\u003c"),
        }}
      />
      <SolutionPage slug={value} />
    </>
  );
}
