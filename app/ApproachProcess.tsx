"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "./LanguageContext";

const steps = {
  en: [
  {
    number: "01",
    phase: "Frame",
    title: (
      <>
        Find the
        <br />
        real problem.
      </>
    ),
    body: "We get inside the operation, separate the symptom from the problem and define the smallest move worth making.",
    output: "A sharp brief + success criteria",
    className: "build-card-frame",
  },
  {
    number: "02",
    phase: "Make",
    title: (
      <>
        Put the idea
        <br />
        under pressure.
      </>
    ),
    body: "We design and prototype the core experience early, so decisions happen around something real—not a presentation.",
    output: "A working first version",
    className: "build-card-make",
  },
  {
    number: "03",
    phase: "Run",
    title: (
      <>
        Build for
        <br />
        real life.
      </>
    ),
    body: "We engineer, launch and improve the system where it will actually be used, by the people it was made for.",
    output: "A useful product in the world",
    className: "build-card-run",
  },
  ],
  es: [
    {
      number: "01",
      phase: "Enfocar",
      title: (
        <>
          Encontrar el
          <br />
          problema real.
        </>
      ),
      body: "Entramos en la operación, separamos el síntoma del problema y definimos el movimiento más pequeño que vale la pena hacer.",
      output: "Un brief claro + criterios de éxito",
      className: "build-card-frame",
    },
    {
      number: "02",
      phase: "Crear",
      title: (
        <>
          Poner la idea
          <br />
          a prueba.
        </>
      ),
      body: "Diseñamos y prototipamos temprano para decidir sobre algo que funciona, no sobre una presentación.",
      output: "Una primera versión funcional",
      className: "build-card-make",
    },
    {
      number: "03",
      phase: "Lanzar",
      title: (
        <>
          Construir para
          <br />
          la vida real.
        </>
      ),
      body: "Desarrollamos, lanzamos y mejoramos el sistema donde será usado, junto a las personas para quienes fue creado.",
      output: "Un producto útil en el mundo",
      className: "build-card-run",
    },
  ],
};

export default function ApproachProcess() {
  const { language } = useLanguage();
  const sectionCopy =
    language === "es"
      ? {
          label: "Cómo construimos",
          titleStart: "La idea es",
          titleEnd: "apenas el comienzo.",
          intro:
            "Acompañamos el problema desde la primera pregunta hasta su primer uso real. Un equipo, un proceso continuo.",
          output: "El resultado",
          close: ["Estrategia", "Prototipo", "En uso"],
        }
      : {
          label: "How we build",
          titleStart: "The idea is",
          titleEnd: "only the start.",
          intro:
            "We stay with the problem from the first question to the first real use. One team, one continuous build.",
          output: "You leave with",
          close: ["Strategy", "Prototype", "In use"],
        };

  return (
    <section className="approach" id="approach">
      <header className="approach-intro">
        <p className="section-label">{sectionCopy.label}</p>
        <h2>
          {sectionCopy.titleStart}
          <br />
          <em>{sectionCopy.titleEnd}</em>
        </h2>
        <p>{sectionCopy.intro}</p>
      </header>

      <div className="build-stack">
        {steps[language].map((step, index) => (
          <article
            className={`build-card ${step.className}`}
            key={step.number}
            style={{ "--card-index": index } as CSSProperties}
          >
            <div className="build-card-top">
              <span>{step.number} / 03</span>
              <span>{step.phase}</span>
            </div>

            <div className="build-card-main">
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>

            <div className="build-card-output">
              <span>{sectionCopy.output}</span>
              <strong>{step.output}</strong>
            </div>

            <span className="build-card-number" aria-hidden="true">
              {step.number}
            </span>
          </article>
        ))}
      </div>

      <div className="approach-close">
        <span>{sectionCopy.close[0]}</span>
        <i aria-hidden="true" />
        <span>{sectionCopy.close[1]}</span>
        <i aria-hidden="true" />
        <strong>{sectionCopy.close[2]}</strong>
      </div>
    </section>
  );
}
