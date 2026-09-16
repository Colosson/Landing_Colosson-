import type { Metadata } from "next";
import PortfolioPage from "./PortfolioPage";

export const metadata: Metadata = {
  title: "Portafolio | Impresión 3D, Software y Experiencias | Colosson",
  description:
    "Explora el portafolio de Colosson: piezas impresas en 3D, automatización y software, y experiencias digitales que conectan ideas con el mundo real.",
  alternates: { canonical: "https://colosson.net/portfolio" },
  openGraph: {
    title: "Ideas que ya son realidad. | Portafolio Colosson",
    description: "Objetos, sistemas y experiencias. Distintas formas de llevar una idea al mundo.",
    url: "https://colosson.net/portfolio",
    locale: "es_CO",
    images: [{ url: "/og.png", alt: "Colosson — Ideas que ya son realidad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideas que ya son realidad. | Portafolio Colosson",
    description: "Impresión 3D, automatización y software, y experiencias interactivas de Colosson.",
    images: ["/og.png"],
  },
};

export default function PortfolioRoute() {
  return <PortfolioPage />;
}
