"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

const rotationDelay = 6100;

const products = [
  {
    number: "01 / 03",
    title: "NFC brand objects",
    detail: "Tap → Digital experience",
    src: "/3d-nfc-mascot-product.webp",
    width: 1724,
    height: 912,
    alt: "Copper corporate mascot keychain connecting to a digital experience through NFC",
  },
  {
    number: "02 / 03",
    title: "Connected corporate keys",
    detail: "Object → Access",
    src: "/3d-nfc-key-product.webp",
    width: 1724,
    height: 912,
    alt: "White corporate keychain opening a digital destination through NFC",
  },
  {
    number: "03 / 03",
    title: "Custom packaging",
    detail: "Brand → Unboxing",
    src: "/3d-custom-packaging-product.webp",
    width: 1725,
    height: 912,
    alt: "Custom black and silver branded packaging with a fitted product insert",
  },
];

const spanishProducts = [
  {
    ...products[0],
    title: "Objetos de marca con NFC",
    detail: "Toque → Experiencia digital",
    alt: "Mascota corporativa en cobre conectando con una experiencia digital mediante NFC",
  },
  {
    ...products[1],
    title: "Llaves corporativas conectadas",
    detail: "Objeto → Acceso",
    alt: "Llave corporativa blanca abriendo un destino digital mediante NFC",
  },
  {
    ...products[2],
    title: "Packaging personalizado",
    detail: "Marca → Unboxing",
    alt: "Packaging corporativo personalizado en negro y plata con inserto para el producto",
  },
];

export default function ProductTheater3D() {
  const { language } = useLanguage();
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [rotationKey, setRotationKey] = useState(0);
  const localizedProducts = language === "es" ? spanishProducts : products;
  const product = localizedProducts[activeProduct];
  const isPaused = !pageVisible || !inView || reducedMotion;

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "160px 0px", threshold: 0.05 },
    );

    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateMotionPreference = () => {
      setReducedMotion(motionPreference.matches);
    };

    const updateVisibility = () => {
      setPageVisible(document.visibilityState === "visible");
    };

    updateMotionPreference();
    updateVisibility();
    motionPreference.addEventListener("change", updateMotionPreference);
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      motionPreference.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setActiveProduct((current) => (current + 1) % products.length);
      setRotationKey((current) => current + 1);
    }, rotationDelay);

    return () => window.clearTimeout(timer);
  }, [activeProduct, isPaused, rotationKey]);

  return (
    <div
      className={`company-visual company-visual-product company-visual-3d ${
        isPaused ? "is-paused" : ""
      }`}
      ref={stageRef}
      role="region"
      aria-label={
        language === "es"
          ? "Productos destacados de Colosson 3D"
          : "Featured Colosson 3D products"
      }
      aria-roledescription={language === "es" ? "carrusel" : "carousel"}
    >
      <div className="product-stage-images">
        {localizedProducts.map((item, index) => (
          <Image
            className={`product-stage-image ${
              index === activeProduct ? "is-active" : ""
            }`}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            unoptimized
            key={item.src}
          />
        ))}
      </div>

      <div className="product-stage-meta">
        <span>{product.number}</span>
        <strong>{product.title}</strong>
        <span className="product-stage-detail">{product.detail}</span>
        <span className="product-stage-timer" aria-hidden="true">
          <span key={rotationKey} />
        </span>
      </div>
    </div>
  );
}
