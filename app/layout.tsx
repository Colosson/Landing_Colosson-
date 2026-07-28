import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "colosson.com";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const imageUrl = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title: "Colosson — We make ideas real",
    description:
      "Colosson combines artificial intelligence, digital creation and physical production to turn ambitious ideas into working realities.",
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/colosson-symbol.png", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/colosson-symbol.png",
    },
    openGraph: {
      title: "Colosson — We make ideas real",
      description:
        "Artificial intelligence, digital creation and physical production — built under one roof.",
      type: "website",
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
      title: "Colosson — We make ideas real",
      description:
        "Artificial intelligence, digital creation and physical production — built under one roof.",
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
        <LanguageProvider initialLanguage="en">
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
