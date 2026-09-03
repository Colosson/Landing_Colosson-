"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";
import type { LegalCopy } from "./legalData";

export default function LegalPage({
  copy: allCopy,
  otherPage,
}: {
  copy: Record<"en" | "es", LegalCopy>;
  otherPage: { href: string; label: Record<"en" | "es", string> };
}) {
  const { language } = useLanguage();
  const copy = allCopy[language];

  return (
    <main className="solution-page legal-page">
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
          <Link className="nav-cta" href="/#contact">
            {language === "es" ? "Iniciar proyecto" : "Start a project"}
          </Link>
        </div>
      </header>

      <article className="legal-article">
        <section className="legal-hero">
          <p className="kicker">{copy.kicker}</p>
          <h1>{copy.title}</h1>
          <p className="legal-updated">{copy.updated}</p>
          <p className="legal-intro">{copy.intro}</p>
        </section>

        <section className="legal-content">
          {copy.sections.map((section) => (
            <div className="legal-block" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>

        <section className="legal-contact">
          <p className="section-label">{copy.contactLabel}</p>
          <a className="contact-email" href="mailto:ventas@colosson.co">
            <span>
              <strong>ventas@colosson.co</strong>
            </span>
            <b aria-hidden="true">↗</b>
          </a>
        </section>
      </article>

      <footer className="solution-footer">
        <Link href="/">{copy.back}</Link>
        <span>Medellín, Colombia</span>
        <Link href={otherPage.href} className="legal-cross-link">
          {otherPage.label[language]}
        </Link>
      </footer>
    </main>
  );
}
