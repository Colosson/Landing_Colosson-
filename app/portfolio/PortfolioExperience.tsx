"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale, ProjectView } from "./portfolioData";
import styles from "./portfolio.module.css";

export default function PortfolioExperience({ projectId, title, views, locale }: {
  projectId: string;
  title: string;
  views: ProjectView[];
  locale: Locale;
}) {
  const [selected, setSelected] = useState(0);
  const view = views[selected];
  const previewId = `${projectId}-experience`;

  return (
    <div className={styles.projectExperience}>
      <div className={styles.experienceHeading}>
        <p className={styles.label}>{locale === "es" ? "Dentro de la experiencia" : "Inside the experience"}</p>
        <span>{locale === "es" ? "Elige una vista para explorar" : "Choose a view to explore"}</span>
      </div>
      <div className={styles.experienceViews} role="group" aria-label={`${locale === "es" ? "Vistas de" : "Views of"} ${title}`}>
        {views.map((item, index) => (
          <button key={item.id} type="button" aria-pressed={selected === index} aria-controls={previewId} onClick={() => setSelected(index)}>
            <span>0{index + 1}</span>{item.label[locale]}
          </button>
        ))}
      </div>
      <div className={styles.experienceStage} id={previewId} role="region" aria-label={view.label[locale]}>
        <a className={styles.experienceCapture} href={view.screenshot} target="_blank" rel="noopener noreferrer" aria-label={`${locale === "es" ? "Ampliar captura" : "Enlarge screenshot"}: ${view.label[locale]}`}>
          <Image src={view.image} alt={`${title}: ${view.label[locale]}`} width={1512} height={807} sizes="(max-width: 800px) 100vw, 65vw" unoptimized />
        </a>
        <div className={styles.experienceCaption}>
          <div aria-live="polite" aria-atomic="true">
            <p className={styles.label}>0{selected + 1} / 0{views.length}</p>
            <h4>{view.title[locale]}</h4>
            <p>{view.description[locale]}</p>
          </div>
          <a className={styles.caseSiteLink} href={view.href} target="_blank" rel="noopener noreferrer">
            {locale === "es" ? "Explorar esta sección" : "Explore this section"}<span aria-hidden="true">↗</span>
          </a>
          <a className={styles.captureLink} href={view.screenshot} target="_blank" rel="noopener noreferrer">{locale === "es" ? "Ampliar captura original" : "Enlarge original screenshot"}</a>
        </div>
      </div>
    </div>
  );
}
