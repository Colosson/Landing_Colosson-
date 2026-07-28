"use client";

import { useEffect } from "react";

const light = {
  background: [242, 240, 232],
  foreground: [17, 19, 17],
  muted: [152, 152, 143],
};

const dark = {
  background: [17, 19, 17],
  foreground: [251, 250, 245],
  muted: [184, 184, 176],
};

const mix = (from: number[], to: number[], progress: number) =>
  from.map((value, index) =>
    Math.round(value + (to[index] - value) * progress),
  );

const rgb = (values: number[]) => `rgb(${values.join(" ")})`;

export default function ScrollThemeTransition() {
  useEffect(() => {
    const root = document.documentElement;
    const companies = document.querySelector<HTMLElement>("#companies");
    const work = document.querySelector<HTMLElement>("#work");
    if (!companies || !work) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frame = 0;

    const update = () => {
      frame = 0;

      const viewport = Math.max(window.innerHeight, 1);
      const companiesTop = companies.getBoundingClientRect().top;
      const workTop = work.getBoundingClientRect().top;

      const enterProgress = Math.min(
        1,
        Math.max(0, (viewport * 0.96 - companiesTop) / (viewport * 0.7)),
      );
      const exitProgress = Math.min(
        1,
        Math.max(0, (viewport * 0.98 - workTop) / (viewport * 0.78)),
      );

      let progress = enterProgress;
      let workProgress = exitProgress;
      if (reducedMotion.matches) {
        progress = progress >= 0.5 ? 1 : 0;
        workProgress = workProgress >= 0.5 ? 1 : 0;
      }

      root.style.setProperty("--theme-progress", progress.toFixed(4));
      root.style.setProperty(
        "--transition-bg",
        rgb(mix(light.background, dark.background, progress)),
      );
      root.style.setProperty(
        "--transition-fg",
        rgb(mix(light.foreground, dark.foreground, progress)),
      );
      root.style.setProperty(
        "--transition-muted",
        rgb(mix(light.muted, dark.muted, progress)),
      );
      root.style.setProperty(
        "--transition-line",
        `rgba(251, 250, 245, ${(0.18 * progress).toFixed(3)})`,
      );
      root.style.setProperty("--work-progress", workProgress.toFixed(4));
      root.style.setProperty(
        "--work-bg",
        rgb(mix(dark.background, light.background, workProgress)),
      );
      root.style.setProperty(
        "--work-fg",
        rgb(mix(dark.foreground, light.foreground, workProgress)),
      );
      root.style.setProperty(
        "--work-muted",
        rgb(mix(dark.muted, light.muted, workProgress)),
      );
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      root.style.removeProperty("--theme-progress");
      root.style.removeProperty("--transition-bg");
      root.style.removeProperty("--transition-fg");
      root.style.removeProperty("--transition-muted");
      root.style.removeProperty("--transition-line");
      root.style.removeProperty("--work-progress");
      root.style.removeProperty("--work-bg");
      root.style.removeProperty("--work-fg");
      root.style.removeProperty("--work-muted");
    };
  }, []);

  return null;
}
