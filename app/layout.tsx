import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Analytics from "./Analytics";
import { LanguageProvider } from "./LanguageContext";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "colosson.net";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const imageUrl = new URL("/og.png", metadataBase).toString();

  const verificationToken = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return {
    metadataBase,
    title: "Colosson | AI Systems, NFC Products & 3D Production",
    description:
      "Colosson creates AI systems, NFC-connected products and custom 3D production for real business operations in Medellín and beyond.",
    alternates: {
      canonical: new URL("/", metadataBase).toString(),
    },
    verification: verificationToken
      ? { google: verificationToken }
      : undefined,
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/colosson-symbol.png", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/colosson-symbol.png",
    },
    openGraph: {
      title: "Colosson | AI Systems, NFC Products & 3D Production",
      description:
        "AI systems, NFC-connected products and custom physical production — built under one roof.",
      type: "website",
      url: new URL("/", metadataBase).toString(),
      images: [
        {
          url: imageUrl,
          width: 1731,
          height: 909,
          alt: "Colosson — We make ideas real.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Colosson | AI Systems, NFC Products & 3D Production",
      description:
        "AI systems, NFC-connected products and custom physical production — built under one roof.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-language="en">
      <head>
        <Analytics />
        <link
          rel="preload"
          href="/colosson-symbol.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/colosson-lockup-2026.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://colosson.net/#organization",
              name: "Colosson",
              alternateName: "Colosson AI & 3D",
              url: "https://colosson.net",
              logo: "https://colosson.net/colosson-symbol.png",
              image: "https://colosson.net/og.png",
              email: "ventas@colosson.co",
              telephone: "+57 317 089 3000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Medellín",
                addressRegion: "Antioquia",
                addressCountry: "CO",
              },
              areaServed: ["Colombia", "Latin America"],
              knowsAbout: [
                "Artificial intelligence",
                "Business automation",
                "NFC products",
                "3D printing",
                "Product design",
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <LanguageProvider initialLanguage="en">
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
