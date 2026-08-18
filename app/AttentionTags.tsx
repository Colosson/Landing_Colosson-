"use client";

import { useEffect, useRef, useState } from "react";

type AttentionTagsProps = {
  tags: string[];
};

export default function AttentionTags({ tags }: AttentionTagsProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const previousIndex = useRef(-1);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "80px 0px", threshold: 0.1 },
    );

    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      !isVisible ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const reset = window.setTimeout(() => setActiveIndex(-1), 0);
      return () => window.clearTimeout(reset);
    }

    let timer = 0;
    let cancelled = false;

    const chooseNext = () => {
      if (cancelled) return;

      let next = Math.floor(Math.random() * tags.length);
      if (tags.length > 1 && next === previousIndex.current) {
        next = (next + 1 + Math.floor(Math.random() * (tags.length - 1))) %
          tags.length;
      }

      previousIndex.current = next;
      setActiveIndex(next);

      timer = window.setTimeout(() => {
        setActiveIndex(-1);
        timer = window.setTimeout(chooseNext, 550 + Math.random() * 900);
      }, 850 + Math.random() * 450);
    };

    timer = window.setTimeout(chooseNext, 700 + Math.random() * 1100);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [isVisible, tags.length]);

  return (
    <div className="tag-row" ref={rowRef}>
      {tags.map((tag, index) => (
        <span className={index === activeIndex ? "is-active" : ""} key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
