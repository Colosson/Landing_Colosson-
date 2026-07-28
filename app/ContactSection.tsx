"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function ContactSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const copy =
    language === "es"
      ? {
          label: "Empecemos algo real",
          aria: "¿Una idea que merece ser realidad?",
          lines: ["¿Una idea", "que merece ser", "realidad?"],
          intro:
            "Ya sea un sistema, un producto o simplemente un problema difícil, descubramos juntos en qué puede convertirse.",
          conversation: "Hablemos",
          emailAria: "Escribir a ventas@colosson.co",
        }
      : {
          label: "Start something real",
          aria: "Have an idea worth making real?",
          lines: ["Have an idea", "worth making", "real?"],
          intro:
            "Whether it begins as a system, a product or simply a difficult problem, let’s figure out what it can become.",
          conversation: "Start a conversation",
          emailAria: "Email ventas@colosson.co",
        };

  useEffect(() => {
    setIsVisible(false);
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        rootMargin: "-12% 0px -12%",
        threshold: 0.14,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frame = 0;

    const mix = (from: number[], to: number[], progress: number) =>
      from.map((value, index) =>
        Math.round(value + (to[index] - value) * progress),
      );

    const updateTransition = () => {
      frame = 0;

      const top = section.getBoundingClientRect().top;
      const start = window.innerHeight * 1.04;
      const end = window.innerHeight * 0.18;
      let progress = Math.min(1, Math.max(0, (start - top) / (start - end)));

      if (reducedMotion.matches) {
        progress = progress < 0.5 ? 0 : 1;
      }

      const background = mix([17, 19, 17], [223, 255, 79], progress);
      const foreground = mix([251, 250, 245], [17, 19, 17], progress);

      root.style.setProperty(
        "--contact-transition-bg",
        `rgb(${background.join(" ")})`,
      );
      root.style.setProperty(
        "--contact-transition-fg",
        `rgb(${foreground.join(" ")})`,
      );
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateTransition);
      }
    };

    updateTransition();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      root.style.removeProperty("--contact-transition-bg");
      root.style.removeProperty("--contact-transition-fg");
    };
  }, []);

  return (
    <section
      className={`contact ${isVisible ? "is-visible" : ""}`}
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-mark" aria-hidden="true">
        <Image
          src="/colosson-symbol.png"
          alt=""
          width={855}
          height={678}
          unoptimized
        />
      </div>

      <div className="contact-copy" key={language}>
        <p className="section-label">{copy.label}</p>
        <h2 aria-label={copy.aria}>
          <span className="contact-line">
            <span>{copy.lines[0]}</span>
          </span>
          <span className="contact-line">
            <span>{copy.lines[1]}</span>
          </span>
          <span className="contact-line contact-line-real">
            <span>{copy.lines[2]}</span>
          </span>
        </h2>
        <p className="contact-intro">{copy.intro}</p>
        <a
          className="contact-email"
          href="mailto:ventas@colosson.co"
          aria-label={copy.emailAria}
        >
          <span>
            <small>{copy.conversation}</small>
            <strong>ventas@colosson.co</strong>
          </span>
        </a>
      </div>
    </section>
  );
}
