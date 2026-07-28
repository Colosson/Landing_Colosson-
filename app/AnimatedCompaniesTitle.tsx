"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function AnimatedCompaniesTitle() {
  const { language } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const title = titleRef.current;
    if (!title) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.2 },
    );

    observer.observe(title);
    return () => observer.disconnect();
  }, [language]);

  const copy =
    language === "es"
      ? {
          aria: "Construimos entre mundos.",
          firstLine: "Construimos entre",
          accent: "mundos.",
        }
      : {
          aria: "Built across realities.",
          firstLine: "Built across",
          accent: "realities.",
        };

  return (
    <h2
      aria-label={copy.aria}
      className={`companies-title ${isVisible ? "is-visible" : ""}`}
      key={language}
      ref={titleRef}
    >
      <span aria-hidden="true" className="companies-title-line">
        <span className="companies-title-inner">{copy.firstLine}</span>
      </span>
      <span aria-hidden="true" className="companies-title-line">
        <em className="companies-title-inner companies-title-realities">
          {copy.accent}
        </em>
      </span>
    </h2>
  );
}
