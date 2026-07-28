"use client";

import { useEffect, useRef, useState } from "react";

const DOCUMENT_WIDTH = 1600;
const DOCUMENT_HEIGHT = 1000;
const CROP_TOP = 47;

type HtmlMockupFrameProps = {
  src: string;
  title: string;
};

export default function HtmlMockupFrame({
  src,
  title,
}: HtmlMockupFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const frame = frameRef.current;

    if (!frame) {
      return;
    }

    const updateScale = () => {
      setScale(frame.getBoundingClientRect().width / DOCUMENT_WIDTH);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(frame);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="html-mockup-frame" ref={frameRef}>
      <iframe
        className="html-mockup-document"
        src={src}
        title={title}
        loading="lazy"
        sandbox="allow-same-origin"
        tabIndex={-1}
        style={{
          height: DOCUMENT_HEIGHT,
          opacity: scale > 0 ? 1 : 0,
          top: -CROP_TOP * scale,
          transform: `scale(${scale})`,
          width: DOCUMENT_WIDTH,
        }}
      />
    </div>
  );
}
