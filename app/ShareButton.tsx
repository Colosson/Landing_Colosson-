"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export default function ShareButton({ compact = false }: { compact?: boolean }) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const label = copied
    ? language === "es"
      ? "Enlace copiado"
      : "Link copied"
    : language === "es"
      ? "Compartir"
      : "Share";

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const share = async () => {
    const data = {
      title: document.title,
      text:
        language === "es"
          ? "Mira lo que construye Colosson."
          : "See what Colosson builds.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(data);
        (window as AnalyticsWindow).gtag?.("event", "share", {
          method: "web_share",
          content_type: "page",
          item_id: window.location.pathname,
        });
        return;
      }

      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      (window as AnalyticsWindow).gtag?.("event", "share", {
        method: "clipboard",
        content_type: "page",
        item_id: window.location.pathname,
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setCopied(false);
    }
  };

  return (
    <button
      aria-live="polite"
      className={`share-button ${compact ? "share-button-compact" : ""}`}
      onClick={share}
      type="button"
    >
      <span>{label}</span>
      <b aria-hidden="true">↗</b>
    </button>
  );
}
