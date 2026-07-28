"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function AnimatedWorkTitle() {
  const { language } = useLanguage();
  const words =
    language === "es"
      ? ["Cosas", "que", "hicimos", "realidad."]
      : ["Things", "we’ve", "made", "real."];
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [revealedWords, setRevealedWords] = useState(0);

  useEffect(() => {
    setRevealedWords(0);
    const title = titleRef.current;
    if (!title) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      setRevealedWords(words.length);
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = title.getBoundingClientRect();
      const start = window.innerHeight * 0.9;
      const finish = window.innerHeight * 0.5;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / Math.max(240, start - finish)),
      );

      const next = Math.min(
        words.length,
        Math.floor(progress * (words.length + 1)),
      );
      setRevealedWords((current) => (current === next ? current : next));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [language, words.length]);

  return (
    <h2
      aria-label={words.join(" ")}
      className="animated-work-title"
      key={language}
      ref={titleRef}
    >
      <span aria-hidden="true" className="work-title-line">
        {words.slice(0, 2).map((word, index) => (
          <span
            className={`work-title-word ${
              index < revealedWords ? "is-revealed" : ""
            }`}
            key={word}
          >
            {word}
          </span>
        ))}
      </span>
      <span aria-hidden="true" className="work-title-line">
        {words.slice(2).map((word, localIndex) => {
          const index = localIndex + 2;
          return (
            <span
              className={`work-title-word ${
                index < revealedWords ? "is-revealed" : ""
              } ${index === 3 ? "work-title-accent" : ""}`}
              key={word}
            >
              {index === 3 ? (
                <em
                  className={
                    index < revealedWords ? "hero-real" : undefined
                  }
                >
                  {word}
                </em>
              ) : (
                word
              )}
            </span>
          );
        })}
      </span>
    </h2>
  );
}
