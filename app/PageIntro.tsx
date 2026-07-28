"use client";

import { useEffect, useState } from "react";

export default function PageIntro() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("intro-skipped");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.classList.add("intro-active");

    const timer = window.setTimeout(
      () => {
        root.classList.remove("intro-active");
        root.classList.add("intro-skipped");
        setComplete(true);
      },
      reducedMotion ? 80 : 2850,
    );

    return () => {
      window.clearTimeout(timer);
      root.classList.remove("intro-active");
    };
  }, []);

  if (complete) return null;

  return (
    <div className="page-intro" aria-hidden="true">
      <span className="page-intro-panel page-intro-panel-top" />
      <span className="page-intro-panel page-intro-panel-bottom" />
      <div className="page-intro-mark">
        <img
          className="page-intro-piece page-intro-piece-top"
          src="/colosson-symbol.png"
          alt=""
          width="855"
          height="678"
          decoding="sync"
          draggable="false"
        />
        <img
          className="page-intro-piece page-intro-piece-bottom"
          src="/colosson-symbol.png"
          alt=""
          width="855"
          height="678"
          decoding="sync"
          draggable="false"
        />
      </div>
    </div>
  );
}
