"use client";

import Image from "next/image";
import AnimatedCompaniesTitle from "./AnimatedCompaniesTitle";
import AnimatedManifesto from "./AnimatedManifesto";
import AnimatedWorkTitle from "./AnimatedWorkTitle";
import ApproachProcess from "./ApproachProcess";
import AttentionTags from "./AttentionTags";
import ContactSection from "./ContactSection";
import HtmlMockupFrame from "./HtmlMockupFrame";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage, type Language } from "./LanguageContext";
import PageIntro from "./PageIntro";
import ProductTheater from "./ProductTheater";
import ProductTheater3D from "./ProductTheater3D";
import ScrollMotionVideo from "./ScrollScrubVideo";
import ScrollThemeTransition from "./ScrollThemeTransition";

const content = {
  en: {
    nav: {
      companies: "Companies",
      work: "Work",
      approach: "Approach",
      cta: "Start a project",
      ctaMobile: "Project",
      aria: "Main navigation",
      home: "Colosson home",
    },
    hero: {
      kicker: "Technology company · Medellín, Colombia",
      aria: "We make ideas real.",
      firstLine: "We make",
      secondLine: "ideas",
      accent: "real.",
      body: "AI, digital systems and physical products — imagined, engineered and built under one roof.",
      explore: "Explore",
      exploreAria: "Explore Colosson",
    },
    manifesto: {
      label: "Our point of view",
      note: "Colosson brings together artificial intelligence, digital creation and physical production to turn possibility into something useful, tangible and alive.",
    },
    companiesSection: {
      label: "The Colosson companies",
      note: "One company. Multiple ways to build.",
      link: "Explore company",
    },
    companies: [
      {
        number: "01",
        name: "Colosson AI",
        eyebrow: "Intelligence that works",
        description:
          "We create AI systems, automations and digital products designed around real operations — not technology for technology’s sake.",
        tags: ["Artificial intelligence", "Automation", "Digital products"],
        href: "#company-link",
        className: "company-card company-card-ai",
      },
      {
        number: "02",
        name: "Colosson 3D",
        eyebrow: "Ideas you can hold",
        description:
          "We design and produce custom 3D-printed objects for companies — from branded products to functional pieces made for the real world.",
        tags: ["Product design", "3D printing", "Manufacturing"],
        href: "#company-link",
        className: "company-card company-card-3d",
      },
    ],
    work: {
      label: "Selected work",
      note: "A growing archive of useful objects, connected products and ideas made tangible.",
    },
    productStories: [
      {
        number: "01",
        title: "Corporate character",
        detail: "Custom object · NFC enabled",
        image: "/media/work/corporate-character-nfc.webp",
        alt: "Copper 3D-printed corporate character keychain with an NFC-enabled design",
      },
      {
        number: "02",
        title: "Connected key",
        detail: "Branded hardware · NFC enabled",
        image: "/media/work/connected-key-nfc.webp",
        alt: "White 3D-printed branded key with a copper NFC mark",
      },
      {
        number: "03",
        title: "Smart Valet Token System",
        detail: "Digital platform · NFC operations",
        image: "/media/work/smart-valet-token-system.webp",
        alt: "Smart Valet Token System shown across its mobile and desktop interfaces with an NFC token",
        preserveFrame: true,
      },
      {
        number: "04",
        title: "Expectra — Events & Tickets",
        detail: "Product rework · UI/UX design",
        image: "/media/work/expectra-events-ticketing-rework.webp",
        alt: "Expectra events and ticketing app redesign presented in a mobile interface mockup",
        embedUrl: "/mockups/expectra/index.html",
      },
    ],
    footer: {
      line: "Medellín, Colombia · Working with ambitious teams everywhere.",
      top: "Back to top ↑",
    },
  },
  es: {
    nav: {
      companies: "Compañías",
      work: "Proyectos",
      approach: "Proceso",
      cta: "Iniciar proyecto",
      ctaMobile: "Proyecto",
      aria: "Navegación principal",
      home: "Inicio de Colosson",
    },
    hero: {
      kicker: "Empresa de tecnología · Medellín, Colombia",
      aria: "Hacemos ideas realidad.",
      firstLine: "Hacemos",
      secondLine: "ideas",
      accent: "realidad.",
      body: "IA, sistemas digitales y productos físicos — concebidos, diseñados y construidos bajo un mismo techo.",
      explore: "Explorar",
      exploreAria: "Explorar Colosson",
    },
    manifesto: {
      label: "Nuestra forma de verlo",
      note: "Colosson reúne inteligencia artificial, creación digital y producción física para convertir posibilidades en algo útil, tangible y vivo.",
    },
    companiesSection: {
      label: "Las compañías Colosson",
      note: "Una empresa. Múltiples maneras de construir.",
      link: "Conoce la compañía",
    },
    companies: [
      {
        number: "01",
        name: "Colosson AI",
        eyebrow: "Inteligencia que funciona",
        description:
          "Creamos sistemas de IA, automatizaciones y productos digitales pensados para operaciones reales — tecnología con un propósito concreto.",
        tags: ["Inteligencia artificial", "Automatización", "Productos digitales"],
        href: "#company-link",
        className: "company-card company-card-ai",
      },
      {
        number: "02",
        name: "Colosson 3D",
        eyebrow: "Ideas que puedes tocar",
        description:
          "Diseñamos y producimos objetos impresos en 3D para empresas — desde productos de marca hasta piezas funcionales hechas para el mundo real.",
        tags: ["Diseño de producto", "Impresión 3D", "Manufactura"],
        href: "#company-link",
        className: "company-card company-card-3d",
      },
    ],
    work: {
      label: "Proyectos seleccionados",
      note: "Un archivo en crecimiento de objetos útiles, productos conectados e ideas que ya existen fuera de la pantalla.",
    },
    productStories: [
      {
        number: "01",
        title: "Personaje corporativo",
        detail: "Objeto personalizado · NFC integrado",
        image: "/media/work/corporate-character-nfc.webp",
        alt: "Llavero corporativo impreso en 3D con acabado cobre y NFC integrado",
      },
      {
        number: "02",
        title: "Llave conectada",
        detail: "Hardware de marca · NFC integrado",
        image: "/media/work/connected-key-nfc.webp",
        alt: "Llave blanca impresa en 3D con identidad de marca y NFC integrado",
      },
      {
        number: "03",
        title: "Sistema inteligente de valet",
        detail: "Plataforma digital · Operación con NFC",
        image: "/media/work/smart-valet-token-system.webp",
        alt: "Sistema inteligente de valet en interfaces móvil y de escritorio con un token NFC",
        preserveFrame: true,
      },
      {
        number: "04",
        title: "Expectra — Eventos y boletería",
        detail: "Rediseño de producto · Diseño UI/UX",
        image: "/media/work/expectra-events-ticketing-rework.webp",
        alt: "Rediseño de la aplicación de eventos y boletería Expectra en una interfaz móvil",
        embedUrl: "/mockups/expectra/index.html",
      },
    ],
    footer: {
      line: "Medellín, Colombia · Construyendo con equipos ambiciosos, donde sea que estén.",
      top: "Volver arriba ↑",
    },
  },
} satisfies Record<Language, unknown>;

export default function Home() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <main>
      <PageIntro />
      <ScrollThemeTransition />

      <a
        aria-label={
          language === "es"
            ? "Empezar un proyecto por WhatsApp"
            : "Start a project on WhatsApp"
        }
        className="whatsapp-button"
        href="https://wa.me/573170893000?text=quiero%20empezar%20un%20proyecto"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="whatsapp-button-label">WhatsApp</span>
        <span className="whatsapp-button-short" aria-hidden="true">
          WA
        </span>
        <span aria-hidden="true">↗</span>
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label={copy.nav.home}>
          <Image
            className="brand-lockup"
            src="/colosson-lockup-2026.png"
            alt=""
            width={244}
            height={58}
            priority
            unoptimized
          />
        </a>

        <nav className="nav-links" aria-label={copy.nav.aria}>
          <a href="#companies">{copy.nav.companies}</a>
          <a href="#work">{copy.nav.work}</a>
          <a href="#approach">{copy.nav.approach}</a>
          <a href="#studio" hidden>
            Studio
          </a>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <a className="nav-cta" href="#contact">
            <span className="nav-cta-label nav-cta-label-desktop">
              {copy.nav.cta}
            </span>
            <span className="nav-cta-label nav-cta-label-mobile">
              {copy.nav.ctaMobile}
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" key={language}>
          <div>
            <p className="kicker">{copy.hero.kicker}</p>
            <h1 aria-label={copy.hero.aria}>
              <span className="hero-line" aria-hidden="true">
                <span className="hero-line-inner">{copy.hero.firstLine}</span>
              </span>
              <span className="hero-line" aria-hidden="true">
                <span className="hero-line-inner">
                  {copy.hero.secondLine}{" "}
                  <em className="hero-real">{copy.hero.accent}</em>
                </span>
              </span>
            </h1>
          </div>

          <div className="hero-bottom">
            <p>{copy.hero.body}</p>
            <a
              className="circle-link"
              href="#companies"
              aria-label={copy.hero.exploreAria}
            >
              <span>{copy.hero.explore}</span>
              <b aria-hidden="true">↓</b>
            </a>
          </div>
        </div>

        <div className="hero-media">
          <ScrollMotionVideo />
          <div className="hero-shade" />
        </div>
      </section>

      <section className="manifesto section-shell">
        <p className="section-label">{copy.manifesto.label}</p>
        <AnimatedManifesto />
        <p className="manifesto-note">{copy.manifesto.note}</p>
      </section>

      <section className="companies section-shell" id="companies">
        <div className="section-heading">
          <p className="section-label">{copy.companiesSection.label}</p>
          <AnimatedCompaniesTitle />
          <p className="heading-note">{copy.companiesSection.note}</p>
        </div>

        <div className="company-grid" id="company-link">
          {copy.companies.map((company) => (
            <article className={company.className} key={company.name}>
              <div className="company-top">
                <span>{company.number}</span>
                <span>↗</span>
              </div>
              {company.number === "01" ? (
                <ProductTheater />
              ) : (
                <ProductTheater3D />
              )}
              <div className="company-copy">
                <p>{company.eyebrow}</p>
                <h3>{company.name}</h3>
                <p className="company-description">{company.description}</p>
                <AttentionTags tags={company.tags} />
                <a href={company.href}>
                  {copy.companiesSection.link}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading work-heading">
          <p className="section-label">{copy.work.label}</p>
          <AnimatedWorkTitle />
          <p className="heading-note">{copy.work.note}</p>
        </div>

        <div className="panorama-gallery">
          {copy.productStories.map((product) => (
            <figure
              className={`panorama-item ${
                product.preserveFrame ? "panorama-item-contain" : ""
              }`}
              key={product.title}
            >
              <div
                className={`panorama-media ${
                  product.embedUrl ? "panorama-media-html" : ""
                }`}
              >
                {product.embedUrl ? (
                  <>
                    <HtmlMockupFrame
                      src={product.embedUrl}
                      title={
                        language === "es"
                          ? "Rediseño de la interfaz de eventos y boletería Expectra"
                          : "Expectra events and ticketing interface redesign"
                      }
                    />
                    <Image
                      className="panorama-image panorama-embed-fallback"
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="100vw"
                      unoptimized
                    />
                  </>
                ) : (
                  <Image
                    className="panorama-image"
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, 94vw"
                    unoptimized
                  />
                )}
              </div>
              <figcaption className="panorama-caption">
                <span>{product.number}</span>
                <h3>{product.title}</h3>
                <p>{product.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ApproachProcess />

      <section className="studio section-shell" id="studio" hidden>
        <div className="studio-copy">
          <p className="section-label">The studio</p>
          <h2>
            Small team.
            <br />
            Serious building
            <br />
            <em>power.</em>
          </h2>
          <p>
            Colosson is built by a multidisciplinary team of technologists,
            designers and relentless problem-solvers in Medellín, Colombia.
          </p>
          <p className="studio-aside">
            Usually coding, prototyping, printing or arguing about a
            three-pixel difference.
          </p>
        </div>

        <div className="team-slots">
          {["Team member 01", "Team member 02", "Team member 03", "Team member 04"].map(
            (member, index) => (
              <article key={member}>
                <div className={`portrait-slot portrait-${index + 1}`}>
                  <span>Add clay portrait</span>
                </div>
                <div>
                  <h3>{member}</h3>
                  <p>Name · Role</p>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <ContactSection />

      <footer>
        <a
          className="brand footer-brand"
          href="#top"
          aria-label={copy.nav.home}
        >
          <Image
            className="brand-lockup"
            src="/colosson-lockup-2026.png"
            alt=""
            width={244}
            height={58}
            unoptimized
          />
        </a>
        <p>{copy.footer.line}</p>
        <div>
          <a href="#social-link">Instagram</a>
          <a href="#social-link">LinkedIn</a>
          <a href="#top">{copy.footer.top}</a>
        </div>
      </footer>
    </main>
  );
}
