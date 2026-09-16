import Image from "next/image";
import type { Locale, PortfolioProject } from "./portfolioData";
import styles from "./portfolio.module.css";

export default function PortfolioCaseCard({ project, locale, featured = false, onOpen }: {
  project: PortfolioProject;
  locale: Locale;
  featured?: boolean;
  onOpen: (project: PortfolioProject) => void;
}) {
  const viewProject = locale === "es" ? "Ver proyecto" : "View project";
  return (
    <article className={`${styles.caseStudy} ${featured ? styles.featuredCase : ""}`} id={`proyecto-${project.id}`} aria-labelledby={`title-${project.id}`}>
      <button type="button" className={styles.caseMedia} onClick={() => onOpen(project)} aria-label={`${viewProject}: ${project.title[locale]}`}>
        <Image src={project.image} alt={project.alt[locale]} width={1536} height={1024} sizes={featured ? "(max-width: 800px) 100vw, 60vw" : "(max-width: 800px) 100vw, 50vw"} unoptimized />
      </button>
      <div className={styles.caseCopy}>
        <p className={styles.label}>{project.subtitle[locale]}</p>
        <h3 id={`title-${project.id}`}>{project.title[locale]}</h3>
        <p className={styles.caseDescription}>{project.description[locale]}</p>
        <div className={styles.caseActions}>
          <button type="button" className={styles.caseDetailLink} onClick={() => onOpen(project)} aria-label={`${viewProject}: ${project.title[locale]}`}>{viewProject}</button>
          {project.href && <a className={styles.caseSiteLink} href={project.href} target="_blank" rel="noopener noreferrer">
            {project.linkLabel?.[locale] ?? (locale === "es" ? "Visitar sitio" : "Visit website")}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
          </a>}
        </div>
      </div>
    </article>
  );
}
