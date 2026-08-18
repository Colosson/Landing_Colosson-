"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import ShareButton from "./ShareButton";
import { useLanguage } from "./LanguageContext";
import { solutions, type SolutionSlug } from "./solutionData";

const relatedNames: Record<
  SolutionSlug,
  Record<"en" | "es", string>
> = {
  "ai-systems": { en: "AI systems", es: "Sistemas de IA" },
  "connected-products": { en: "Connected products", es: "Productos conectados" },
  "custom-products": { en: "Custom products", es: "Productos personalizados" },
};

export default function SolutionPage({ slug }: { slug: SolutionSlug }) {
  const { language } = useLanguage();
  const solution = solutions[slug];
  const copy = solution.copy[language];
  const related = Object.values(solutions).filter((item) => item.slug !== slug);
  const whatsappText =
    language === "es"
      ? `Quiero empezar un proyecto de ${copy.h1.toLowerCase()}`
      : `I want to start a project about ${copy.h1.toLowerCase()}`;
  const whatsappUrl = `https://wa.me/573170893000?text=${encodeURIComponent(
    whatsappText,
  )}`;

  return (
    <main className="solution-page">
      <header className="solution-header">
        <Link className="brand" href="/" aria-label={copy.back}>
          <Image
            className="brand-lockup"
            src="/colosson-lockup-2026.png"
            alt=""
            width={244}
            height={58}
            priority
            unoptimized
          />
        </Link>
        <nav aria-label={language === "es" ? "Navegación" : "Navigation"}>
          <Link href="/#companies">{language === "es" ? "Compañías" : "Companies"}</Link>
          <Link href="/#work">{language === "es" ? "Proyectos" : "Work"}</Link>
          <Link href="/#approach">{language === "es" ? "Proceso" : "Approach"}</Link>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            {language === "es" ? "Iniciar proyecto" : "Start a project"}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <a
        aria-label={language === "es" ? "Iniciar proyecto por WhatsApp" : "Start a project on WhatsApp"}
        className="whatsapp-button"
        href={whatsappUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="whatsapp-button-label">WhatsApp</span>
        <span className="whatsapp-button-short" aria-hidden="true">WA</span>
        <span aria-hidden="true">↗</span>
      </a>
      <ShareButton />

      <article>
        <section className="solution-hero">
          <div className="solution-hero-copy">
            <p className="kicker">{copy.eyebrow}</p>
            <h1>{copy.h1}</h1>
            <p className="solution-intent">{copy.intent}</p>
            <a className="solution-primary-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
              {copy.cta} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="solution-hero-media">
            <Image
              src={solution.image}
              alt={solution.imageAlt[language]}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
              unoptimized
            />
          </div>
        </section>

        <section className="solution-takeaways" aria-labelledby="takeaways-title">
          <p className="section-label" id="takeaways-title">{copy.takeawaysLabel}</p>
          <ul>
            {copy.takeaways.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="solution-section solution-capabilities">
          <p className="section-label">01 / 03</p>
          <h2>{copy.capabilitiesTitle}</h2>
          <div className="solution-capability-grid">
            {copy.capabilities.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="solution-section solution-table-section">
          <p className="section-label">02 / 03</p>
          <h2>{copy.tableTitle}</h2>
          <div className="solution-table-wrap">
            <table>
              <thead>
                <tr>{copy.tableHeaders.map((header) => <th key={header}>{header}</th>)}</tr>
              </thead>
              <tbody>
                {copy.tableRows.map((row) => (
                  <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="solution-section solution-process">
          <p className="section-label">03 / 03</p>
          <h2>{copy.processTitle}</h2>
          <ol>
            {copy.process.map((item, index) => (
              <li key={item}><span>0{index + 1}</span><p>{item}</p></li>
            ))}
          </ol>
        </section>

        <section className="solution-section solution-faq">
          <p className="section-label">FAQ</p>
          <h2>{copy.faqTitle}</h2>
          <div>
            {copy.faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="solution-related">
          <p className="section-label">{copy.relatedTitle}</p>
          <div>
            {related.map((item) => (
              <Link href={`/${item.slug}`} key={item.slug}>
                {relatedNames[item.slug][language]} <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="solution-final-cta">
          <h2>{copy.finalCta}</h2>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            {copy.cta} <span aria-hidden="true">↗</span>
          </a>
        </section>
      </article>

      <footer className="solution-footer">
        <Link href="/">{copy.back}</Link>
        <span>Medellín, Colombia</span>
        <ShareButton compact />
      </footer>
    </main>
  );
}
