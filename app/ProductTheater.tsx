"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

const rotationDelay = 5200;

const products = [
  {
    number: "01 / 03",
    title: "Inventory control",
    detail: "WhatsApp → Excel",
    src: "/inventory-product-mockup.webp",
    width: 1400,
    height: 747,
    alt: "Inventory control system updating product AM-007 from a WhatsApp conversation",
  },
  {
    number: "02 / 03",
    title: "Smart valet",
    detail: "NFC → Vehicle",
    src: "/valet-product-mockup.webp",
    width: 1400,
    height: 739,
    alt: "Smart valet parking system connecting an NFC token, a vehicle and its delivery status",
  },
  {
    number: "03 / 03",
    title: "WhatsApp agents",
    detail: "Conversations → Operations",
    src: "/whatsapp-agent-product-mockup.webp",
    width: 1716,
    height: 916,
    alt: "WhatsApp agent automating menus, lead qualification, CRM updates and human handoff",
  },
];

const spanishProducts = [
  {
    ...products[0],
    title: "Control de inventario",
    detail: "WhatsApp → Excel",
    alt: "Sistema de inventario actualizando el producto AM-007 desde una conversación de WhatsApp",
  },
  {
    ...products[1],
    title: "Valet inteligente",
    detail: "NFC → Vehículo",
    alt: "Sistema inteligente de valet conectando un token NFC, un vehículo y su estado de entrega",
  },
  {
    ...products[2],
    title: "Agentes de WhatsApp",
    detail: "Conversaciones → Operaciones",
    alt: "Agente de WhatsApp automatizando menús, calificación de prospectos, actualizaciones de CRM y entrega a un humano",
  },
];

export default function ProductTheater() {
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
      className={`company-visual company-visual-product ${
        isPaused ? "is-paused" : ""
      }`}
      ref={stageRef}
      role="region"
      aria-label={
        language === "es"
          ? "Productos destacados de Colosson AI"
          : "Featured Colosson AI products"
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
