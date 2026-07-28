"use client";

import { useEffect, useRef } from "react";

export default function ScrollMotionVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const frame = video?.parentElement;

    if (!video || !frame) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let targetOffset = 0;
    let renderedOffset = 0;
    let animationFrame = 0;
    let isVisible = true;

    const render = () => {
      animationFrame = 0;
      renderedOffset += (targetOffset - renderedOffset) * 0.09;
      video.style.transform = `translate3d(0, ${renderedOffset}px, 0) scale(1.06)`;

      if (Math.abs(targetOffset - renderedOffset) > 0.05) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const updateParallax = () => {
      if (!isVisible) return;

      if (prefersReducedMotion.matches) {
        targetOffset = 0;
      } else {
        const rect = frame.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const frameCenter = rect.top + rect.height / 2;
        const normalized = Math.max(
          -1,
          Math.min(1, (viewportCenter - frameCenter) / window.innerHeight),
        );
        targetOffset = normalized * 22;
      }

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const updatePlayback = () => {
      if (isVisible && document.visibilityState === "visible") {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        updatePlayback();
        updateParallax();
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    );

    visibilityObserver.observe(frame);
    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);
    document.addEventListener("visibilitychange", updatePlayback);
    prefersReducedMotion.addEventListener("change", updateParallax);

    return () => {
      visibilityObserver.disconnect();
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
      document.removeEventListener("visibilitychange", updatePlayback);
      prefersReducedMotion.removeEventListener("change", updateParallax);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/colosson-team-final.webp"
      aria-hidden="true"
      disablePictureInPicture
    >
      <source src="/colosson-hero-boomerang.mp4" type="video/mp4" />
    </video>
  );
}
