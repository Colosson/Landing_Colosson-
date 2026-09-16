"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Locale, PortfolioProject } from "./portfolioData";
import styles from "./portfolio.module.css";

export default function ProjectDialog({
  project,
  locale,
  onClose,
}: {
  project: PortfolioProject;
  locale: Locale;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  const close = () => dialogRef.current?.close();
  const message = locale === "es"
    ? `Hola, me interesa un proyecto de ${project.subtitle.es.toLowerCase()}. Vi su portafolio y me gustaría conversar.`
    : `Hi, I'm interested in a project about ${project.subtitle.en.toLowerCase()}. I saw your portfolio and would like to talk.`;

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="portfolio-project-title"
      lang={locale}
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
      }}
    >
      <button className={styles.dialogClose} type="button" onClick={close} aria-label={locale === "es" ? "Cerrar proyecto" : "Close project"} autoFocus>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
      </button>
      <div className={styles.dialogGrid}>
        <div className={styles.dialogMedia}>
          <Image src={project.image} alt={project.alt[locale]} width={1200} height={1400} unoptimized />
        </div>
        <div className={styles.dialogCopy}>
          <p className={styles.label}>{project.subtitle[locale]}</p>
          <h2 id="portfolio-project-title">{project.title[locale]}</h2>
          <p>{project.description[locale]}</p>
          <dl className={styles.specs}>
            {project.details.map((detail) => (
              <div key={detail.label.es}><dt>{detail.label[locale]}</dt><dd>{detail.value[locale]}</dd></div>
            ))}
          </dl>
          {project.note && <p className={styles.projectNote}>{project.note[locale]}</p>}
          <a className={styles.solidButton} href={`https://wa.me/573170893000?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
            {locale === "es" ? "Quiero crear algo así" : "Let’s create something like this"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
          </a>
          {project.source && <a className={styles.sourceLink} href={project.source} target="_blank" rel="noopener noreferrer">{locale === "es" ? "Ver catálogo de origen" : "View source catalog"}</a>}
        </div>
      </div>
    </dialog>
  );
}
