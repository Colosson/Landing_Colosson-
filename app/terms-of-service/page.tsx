import type { Metadata } from "next";
import { headers } from "next/headers";
import LegalPage from "../LegalPage";
import { termsOfService } from "../legalData";

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

export async function generateMetadata(): Promise<Metadata> {
  const record = termsOfService.en;
  const base = await requestBase();
  const canonical = new URL("/terms-of-service", base).toString();

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
    },
    twitter: {
      card: "summary",
      title: record.metaTitle,
      description: record.metaDescription,
    },
  };
}

export default function TermsOfServiceRoute() {
  return (
    <LegalPage
      copy={termsOfService}
      otherPage={{
        href: "/privacy-policy",
        label: { en: "View privacy policy", es: "Ver política de privacidad" },
      }}
    />
  );
}
