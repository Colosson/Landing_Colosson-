"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

const copy = {
  en: {
    lines: [
      "Some ideas live on a screen.",
      "Others belong in the real world.",
      "The best ones move between both.",
    ],
    focusWord: "both.",
  },
  es: {
    lines: [
      "Algunas ideas viven en una pantalla.",
      "Otras pertenecen al mundo real.",
      "Las mejores se mueven entre ambos.",
    ],
    focusWord: "ambos.",
  },
};

export default function AnimatedManifesto() {
  const { language } = useLanguage();
  const { lines, focusWord } = copy[language];
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeWord, setActiveWord] = useState(-1);
  const [isBothFocused, setIsBothFocused] = useState(false);
  const [revealedWords, setRevealedWords] = useState(0);
  const wordCount = useMemo(
    () => lines.reduce((total, line) => total + line.split(" ").length, 0),
    [lines],
  );

  useEffect(() => {
    setActiveWord(-1);
    setIsBothFocused(false);
    setRevealedWords(0);

    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      setRevealedWords(wordCount);
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const section = container.closest<HTMLElement>(".manifesto");
      const sectionBottom =
        section?.getBoundingClientRect().bottom ?? Number.POSITIVE_INFINITY;
      const start = window.innerHeight * 0.88;
      const finish = window.innerHeight * 0.48;
      const distance = Math.max(320, start - finish);
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / distance),
      );
      const nextRevealed = Math.min(
        wordCount,
        Math.floor(progress * (wordCount + 1)),
      );

      setRevealedWords((current) =>
        current === nextRevealed ? current : nextRevealed,
      );
      setActiveWord((current) => {
        const nextActive = nextRevealed > 0 ? nextRevealed - 1 : -1;
        return current === nextActive ? current : nextActive;
      });
      setIsBothFocused((current) => {
        const next =
          sectionBottom <= window.innerHeight * 0.88 &&
          sectionBottom >= window.innerHeight * 0.08;
        return current === next ? current : next;
      });
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
  }, [language, wordCount]);

  let wordIndex = 0;

  return (
    <div
      className={`manifesto-copy animated-manifesto ${
        isBothFocused ? "is-both-focused" : ""
      }`}
      ref={containerRef}
      aria-label={lines.join(" ")}
    >
      {lines.map((line, lineIndex) => (
        <p className={lineIndex === 2 ? "muted" : undefined} key={line}>
          {line.split(" ").map((word) => {
            const currentIndex = wordIndex++;
            const classNames = [
              "manifesto-word",
              word === focusWord ? "is-both" : "",
              currentIndex < revealedWords ? "is-revealed" : "",
              currentIndex === activeWord ? "is-active" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <span aria-hidden="true" className={classNames} key={currentIndex}>
                {word}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}
