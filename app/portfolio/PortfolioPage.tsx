"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import HtmlMockupFrame from "../HtmlMockupFrame";
import ProjectDialog from "./ProjectDialog";
import PortfolioCaseCard from "./PortfolioCaseCard";
import { physicalProjects, softwareProjects, interactiveProjects, type Locale, type PortfolioProject } from "./portfolioData";
import styles from "./portfolio.module.css";

const copy = {
  es: {
    home: "Inicio", portfolio: "Portafolio", talk: "Hablemos", language: "Cambiar idioma",
    title: "Ideas que ya", accent: "son realidad.",
    intro: "Objetos, sistemas y experiencias. Distintas formas de llevar una idea al mundo.",
    explore: "Explorar el portafolio", caption: "Del objeto a la experiencia.",
    categories: ["Impresión 3D", "Automatización y software", "Experiencias interactivas"],
    shortCategories: ["Impresión 3D", "Software", "Experiencias"],
    physicalTitle: "Materia hecha", physicalAccent: "marca.",
    physicalIntro: "Piezas que representan una marca, conectan con una experiencia o resuelven una necesidad real.",
    viewPiece: "Ver pieza", viewProject: "Ver proyecto",
    softwareTitle: "Menos fricción.", softwareAccent: "Más posibilidades.",
    softwareIntro: "Sistemas que conectan conversaciones, datos y operaciones.",
    interactiveTitle: "No solo se ven.", interactiveAccent: "Se viven.",
    interactiveIntro: "Sitios y productos digitales para explorar, descubrir y conectar.",
    expectraSubtitle: "Eventos y boletería", expectraIntro: "Una nueva forma de descubrir la próxima gran noche.",
    expectraNote: "Concepto de interfaz", openExperience: "Explorar experiencia",
    colossonSubtitle: "Nuestra casa digital.", openSite: "Conocer el sitio",
    contactTitle: "¿Qué hacemos realidad", contactAccent: "ahora?",
    contactLink: "Hablemos de tu proyecto", location: "Medellín, Colombia", back: "Volver al inicio",
    skip: "Ir al portafolio", projectNavigation: "Explorar disciplinas", softwareNavigation: "Proyectos de automatización y software",
  },
  en: {
    home: "Home", portfolio: "Portfolio", talk: "Let’s talk", language: "Change language",
    title: "Ideas made", accent: "real.",
    intro: "Objects, systems and experiences. Different ways to bring an idea into the world.",
    explore: "Explore the portfolio", caption: "From object to experience.",
    categories: ["3D printing", "Automation and software", "Interactive experiences"],
    shortCategories: ["3D printing", "Software", "Experiences"],
    physicalTitle: "Matter made", physicalAccent: "meaningful.",
    physicalIntro: "Pieces that represent a brand, connect to an experience or solve a real need.",
    viewPiece: "View piece", viewProject: "View project",
    softwareTitle: "Less friction.", softwareAccent: "More possibility.",
    softwareIntro: "Systems that connect conversations, data and operations.",
    interactiveTitle: "Not just seen.", interactiveAccent: "Experienced.",
    interactiveIntro: "Websites and digital products to explore, discover and connect.",
    expectraSubtitle: "Events and ticketing", expectraIntro: "A new way to discover the next great night.",
    expectraNote: "Interface concept", openExperience: "Explore the experience",
    colossonSubtitle: "Our digital home.", openSite: "Explore the website",
    contactTitle: "What shall we make real", contactAccent: "next?",
    contactLink: "Let’s talk about your project", location: "Medellín, Colombia", back: "Back to the top",
    skip: "Skip to portfolio", projectNavigation: "Explore disciplines", softwareNavigation: "Automation and software projects",
  },
};

const sectionIds = ["impresion-3d", "automatizacion-software", "experiencias-interactivas"];
const physicalPieces = physicalProjects.filter((project) => !project.href);
const physicalShowcases = physicalProjects.filter((project) => project.href);
const websiteProjects = interactiveProjects.filter((project) => project.screenshot);
const expectra = interactiveProjects.find((project) => project.id === "expectra")!;
const colosson = interactiveProjects.find((project) => project.id === "colosson-web")!;

function Arrow({ diagonal = false, down = false }: { diagonal?: boolean; down?: boolean }) {
  return <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" style={down ? { transform: "rotate(90deg)" } : undefined}>
    <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
  </svg>;
}

export default function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>("es");
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [selectedSoftware, setSelectedSoftware] = useState(0);
  const [openProject, setOpenProject] = useState<PortfolioProject | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const text = copy[locale];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  const whatsapp = `https://wa.me/573170893000?text=${encodeURIComponent(locale === "es" ? "Hola, vi el portafolio de Colosson y quiero hablar de un proyecto." : "Hi, I saw Colosson’s portfolio and would like to discuss a project.")}`;

  return (
    <main className={styles.portfolio} lang={locale} id="portfolio-top">
      <a className={styles.skipLink} href="#portfolio-index">{text.skip}</a>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Colosson">
          <Image src="/colosson-lockup-2026.png" alt="Colosson" width={244} height={58} unoptimized />
        </Link>
        <nav className={styles.mainNav} aria-label={locale === "es" ? "Navegación principal" : "Main navigation"}>
          <Link href="/">{text.home}</Link><a href="#portfolio-top" aria-current="page">{text.portfolio}</a>
        </nav>
        <div className={styles.headerActions}>
          <div className={styles.localeSwitch} role="group" aria-label={text.language}>
            {(["es", "en"] as const).map((value) => <button key={value} type="button" aria-label={value === "es" ? "Cambiar a español" : "Switch to English"} aria-pressed={locale === value} onClick={() => setLocale(value)}>{value.toUpperCase()}</button>)}
          </div>
          <a className={styles.headerCta} href="#portfolio-contact">{text.talk}</a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="portfolio-title">
        <div className={styles.heroCopy}>
          <h1 id="portfolio-title">{text.title}<br /><em>{text.accent}</em></h1>
          <p>{text.intro}</p>
          <a className={styles.textLink} href="#impresion-3d">{text.explore}<Arrow down /></a>
        </div>
        <button type="button" className={styles.heroProject} onClick={() => setOpenProject(physicalProjects[0])} aria-label={`${text.viewPiece}: ${physicalProjects[0].title[locale]}`}>
          <div className={styles.heroImage}>
            <Image src={physicalProjects[0].image} alt={physicalProjects[0].alt[locale]} width={1493} height={2000} priority unoptimized />
          </div>
          <span className={styles.heroCaption}>{text.caption}<span className={styles.circleArrow}><Arrow /></span></span>
        </button>
      </section>

      <nav className={styles.chapterNav} id="portfolio-index" aria-label={text.projectNavigation}>
        {sectionIds.map((id, index) => <a href={`#${id}`} key={id} aria-current={activeSection === id ? "location" : undefined}>
          <span className={styles.chapterNumber}>0{index + 1}</span>
          <span className={styles.chapterLong}>{text.categories[index]}</span>
          <span className={styles.chapterShort}>{text.shortCategories[index]}</span>
          <Arrow diagonal />
        </a>)}
      </nav>

      <section className={styles.physical} id="impresion-3d" aria-labelledby="physical-title">
        <div className={styles.sectionHeading}>
          <div><p className={styles.label}>01 / {text.categories[0]}</p><h2 id="physical-title">{text.physicalTitle}<br /><em>{text.physicalAccent}</em></h2></div>
          <p className={styles.sectionIntro}>{text.physicalIntro}</p>
        </div>
        <div className={styles.physicalGrid}>
          {physicalPieces.map((project, index) => <article className={styles.piece} key={project.id}>
            <button className={styles.pieceButton} type="button" onClick={() => setOpenProject(project)} aria-label={`${text.viewPiece}: ${project.title[locale]}`}>
              <div className={styles.pieceMedia}>
                <Image src={project.image} alt={project.alt[locale]} width={1200} height={1400} sizes="(max-width: 700px) 100vw, 55vw" unoptimized />
                <span className={styles.pieceOpen}><Arrow diagonal /></span>
              </div>
              <span className={styles.pieceHeading}><span className={styles.pieceNumber}>0{index + 1}</span><span>{project.title[locale]}</span><Arrow diagonal /></span>
              <span className={styles.pieceSubtitle}>{project.subtitle[locale]}</span>
              <span className={styles.pieceLink}>{text.viewPiece}<Arrow /></span>
            </button>
          </article>)}
        </div>
        <div className={styles.physicalShowcases}>
          {physicalShowcases.map((project) => <PortfolioCaseCard key={project.id} project={project} locale={locale} featured onOpen={setOpenProject} />)}
        </div>
      </section>

      <section className={styles.software} id="automatizacion-software" aria-labelledby="software-title">
        <div className={styles.softwareSelector}>
          <p className={styles.label}>02 / {text.categories[1]}</p>
          <h2 id="software-title">{text.softwareTitle}<br /><em>{text.softwareAccent}</em></h2>
          <p className={styles.softwareIntro}>{text.softwareIntro}</p>
          <div className={styles.softwareTabs} role="tablist" aria-orientation="vertical" aria-label={text.softwareNavigation}>
            {softwareProjects.map((project, index) => <button
              key={project.id} ref={(element) => { tabRefs.current[index] = element; }}
              type="button" role="tab" id={`tab-${project.id}`} aria-controls={`software-preview-${project.id}`} aria-selected={selectedSoftware === index} tabIndex={selectedSoftware === index ? 0 : -1}
              onClick={() => setSelectedSoftware(index)}
              onKeyDown={(event) => {
                let next: number | undefined;
                if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % softwareProjects.length;
                if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + softwareProjects.length - 1) % softwareProjects.length;
                if (event.key === "Home") next = 0;
                if (event.key === "End") next = softwareProjects.length - 1;
                if (next !== undefined) { event.preventDefault(); setSelectedSoftware(next); tabRefs.current[next]?.focus(); }
              }}
            ><span className={styles.tabNumber}>0{index + 1}</span><span><strong>{project.tabLabel?.[locale] ?? project.title[locale]}</strong><small>{project.tabCaption?.[locale] ?? project.subtitle[locale]}</small></span><Arrow /></button>)}
          </div>
        </div>
        {softwareProjects.map((software, index) => <div key={software.id} className={styles.softwarePreview} role="tabpanel" id={`software-preview-${software.id}`} aria-labelledby={`tab-${software.id}`} tabIndex={0} hidden={selectedSoftware !== index}>
          <div key={software.id} className={styles.softwarePreviewContent}>
            <div className={styles.softwareMedia}><Image src={software.image} alt={software.alt[locale]} width={1536} height={1024} sizes="(max-width: 900px) 100vw, 60vw" unoptimized /></div>
            <h3>{software.title[locale]}</h3>
            <p>{software.description[locale]}</p>
            <div className={styles.softwareBottom}>
              <button type="button" className={styles.outlineButton} onClick={() => setOpenProject(software)}>{text.viewProject}<Arrow /></button>
              {software.href
                ? <a className={styles.caseSiteLink} href={software.href} target="_blank" rel="noopener noreferrer">{software.linkLabel?.[locale] ?? text.openSite}<Arrow diagonal /></a>
                : <span className={styles.flow}>{software.tabCaption?.[locale]}</span>}
            </div>
          </div>
        </div>)}
      </section>

      <section className={styles.interactive} id="experiencias-interactivas" aria-labelledby="interactive-title">
        <div className={styles.sectionHeading}>
          <div><p className={styles.label}>03 / {text.categories[2]}</p><h2 id="interactive-title">{text.interactiveTitle}<br /><em>{text.interactiveAccent}</em></h2></div>
          <p className={styles.sectionIntro}>{text.interactiveIntro}</p>
        </div>
        <div className={styles.webProjects}>
          {websiteProjects.map((project, index) => <PortfolioCaseCard key={project.id} project={project} locale={locale} featured={index === 0 || !!project.views?.length} onOpen={setOpenProject} />)}
        </div>
        <article className={styles.experience}>
          <div className={styles.experiencePreview}>
            <HtmlMockupFrame src="/mockups/expectra/index.html" title={locale === "es" ? "Vista del concepto de interfaz Expectra" : "Expectra interface concept preview"} />
          </div>
          <div className={styles.experienceCopy}>
            <p className={styles.label}>{text.expectraNote}</p>
            <h3>Expectra</h3><p className={styles.experienceSubtitle}>{text.expectraSubtitle}</p>
            <p className={styles.experienceDescription}>{text.expectraIntro}</p>
            <a className={styles.textLink} href={expectra.href} target="_blank" rel="noopener noreferrer">{text.openExperience}<Arrow /></a>
          </div>
        </article>
        <article className={styles.experienceSecondary}>
          <Link className={styles.secondaryMedia} href="/" aria-label={text.openSite}><Image src={colosson.image} alt={colosson.alt[locale]} width={1536} height={1024} unoptimized /></Link>
          <div><h3>Colosson</h3><p>{text.colossonSubtitle}</p></div>
          <Link href="/" className={styles.textLink}>{text.openSite}<Arrow /></Link>
        </article>
      </section>

      <section className={styles.contact} id="portfolio-contact">
        <h2>{text.contactTitle} <em>{text.contactAccent}</em></h2>
        <a className={styles.textLink} href={whatsapp} target="_blank" rel="noopener noreferrer">{text.contactLink}<Arrow diagonal /></a>
      </section>
      <footer className={styles.footer}>
        <Link href="/" className={styles.brand} aria-label="Colosson"><Image src="/colosson-lockup-2026.png" alt="Colosson" width={244} height={58} unoptimized /></Link>
        <span>{text.location}</span><a href="#portfolio-top">{text.back}<Arrow down /></a>
      </footer>
      {openProject && <ProjectDialog project={openProject} locale={locale} onClose={() => setOpenProject(null)} />}
    </main>
  );
}
