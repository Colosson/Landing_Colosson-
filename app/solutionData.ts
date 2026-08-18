import type { Language } from "./LanguageContext";

export type SolutionSlug =
  | "ai-systems"
  | "connected-products"
  | "custom-products";

type SolutionCopy = {
  eyebrow: string;
  h1: string;
  intent: string;
  cta: string;
  takeawaysLabel: string;
  takeaways: string[];
  capabilitiesTitle: string;
  capabilities: Array<{ title: string; body: string }>;
  tableTitle: string;
  tableHeaders: [string, string, string];
  tableRows: Array<[string, string, string]>;
  processTitle: string;
  process: string[];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  relatedTitle: string;
  finalCta: string;
  back: string;
  share: string;
};

export type SolutionRecord = {
  slug: SolutionSlug;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: Record<Language, string>;
  copy: Record<Language, SolutionCopy>;
};

export const solutionSlugs: SolutionSlug[] = [
  "ai-systems",
  "connected-products",
  "custom-products",
];

export const solutions: Record<SolutionSlug, SolutionRecord> = {
  "ai-systems": {
    slug: "ai-systems",
    metaTitle: "AI Systems & Automation for Real Operations | Colosson",
    metaDescription:
      "Colosson designs practical AI systems, WhatsApp agents, automations and digital products for real business operations in Colombia and beyond.",
    image: "/inventory-product-mockup.webp",
    imageAlt: {
      en: "Inventory control system connecting a WhatsApp conversation with live product data",
      es: "Sistema de control de inventario que conecta una conversación de WhatsApp con datos de producto en vivo",
    },
    copy: {
      en: {
        eyebrow: "Colosson AI · Medellín, Colombia",
        h1: "AI systems built around real operations",
        intent:
          "For operations teams evaluating AI automation, Colosson turns a concrete workflow into a useful system: clear, integrated and ready for daily work.",
        cta: "Discuss an AI system",
        takeawaysLabel: "Key takeaways",
        takeaways: [
          "The operation comes before the model.",
          "Working prototypes replace speculative presentations.",
          "Automations fit the channels and tools your team already uses.",
        ],
        capabilitiesTitle: "What we build",
        capabilities: [
          {
            title: "Operational automation",
            body: "Inventory, reporting and repetitive workflows connected to a reliable source of truth.",
          },
          {
            title: "WhatsApp agents",
            body: "Purpose-built assistants that answer, qualify, update records and hand off to people when needed.",
          },
          {
            title: "Digital products",
            body: "Dashboards and internal tools designed around decisions, not feature lists.",
          },
        ],
        tableTitle: "From friction to outcome",
        tableHeaders: ["Operational need", "What we build", "Expected outcome"],
        tableRows: [
          ["Inventory visibility", "Conversational inventory workflow", "Faster, traceable updates"],
          ["Customer response", "WhatsApp agent with human handoff", "Shorter response time"],
          ["Scattered information", "Integrated operational dashboard", "One useful view of the work"],
        ],
        processTitle: "A compact way to start",
        process: [
          "Map one valuable workflow and its success criteria.",
          "Prototype the smallest useful version with real data.",
          "Launch, observe and improve it inside the operation.",
        ],
        faqTitle: "AI systems FAQ",
        faqs: [
          {
            question: "Do we need to replace our current tools?",
            answer:
              "Usually not. We first look for ways to connect and improve the tools your team already knows.",
          },
          {
            question: "Can an AI agent work through WhatsApp?",
            answer:
              "Yes. It can handle defined conversations and operational tasks while preserving a clear path to human support.",
          },
          {
            question: "Can we begin with one workflow?",
            answer:
              "Yes. A focused workflow is often the best way to validate value before expanding the system.",
          },
          {
            question: "Does Colosson work only with companies in Medellín?",
            answer:
              "No. Our team is based in Medellín and works with ambitious teams in Colombia and internationally.",
          },
        ],
        relatedTitle: "Explore adjacent capabilities",
        finalCta: "Start with a real workflow",
        back: "Back to Colosson",
        share: "Share",
      },
      es: {
        eyebrow: "Colosson AI · Medellín, Colombia",
        h1: "Sistemas de IA pensados para operaciones reales",
        intent:
          "Para equipos que están evaluando automatización con IA, Colosson convierte un flujo concreto en un sistema útil: claro, integrado y listo para el trabajo diario.",
        cta: "Conversemos sobre un sistema de IA",
        takeawaysLabel: "En pocas palabras",
        takeaways: [
          "La operación está antes que el modelo.",
          "Los prototipos funcionales reemplazan las presentaciones especulativas.",
          "La automatización se adapta a las herramientas que el equipo ya utiliza.",
        ],
        capabilitiesTitle: "Qué construimos",
        capabilities: [
          {
            title: "Automatización operativa",
            body: "Inventarios, reportes y tareas repetitivas conectadas a una fuente de información confiable.",
          },
          {
            title: "Agentes de WhatsApp",
            body: "Asistentes que responden, califican, actualizan registros y escalan a una persona cuando hace falta.",
          },
          {
            title: "Productos digitales",
            body: "Tableros y herramientas internas diseñadas alrededor de decisiones, no de listas de funciones.",
          },
        ],
        tableTitle: "De la fricción al resultado",
        tableHeaders: ["Necesidad operativa", "Lo que construimos", "Resultado esperado"],
        tableRows: [
          ["Visibilidad de inventario", "Flujo conversacional de inventario", "Actualizaciones más rápidas y trazables"],
          ["Respuesta a clientes", "Agente de WhatsApp con relevo humano", "Menor tiempo de respuesta"],
          ["Información dispersa", "Tablero operativo integrado", "Una vista útil del trabajo"],
        ],
        processTitle: "Una forma compacta de empezar",
        process: [
          "Mapeamos un flujo valioso y sus criterios de éxito.",
          "Prototipamos la versión útil más pequeña con datos reales.",
          "La lanzamos, observamos y mejoramos dentro de la operación.",
        ],
        faqTitle: "Preguntas sobre sistemas de IA",
        faqs: [
          {
            question: "¿Tenemos que reemplazar las herramientas actuales?",
            answer:
              "Normalmente no. Primero buscamos conectar y mejorar las herramientas que el equipo ya conoce.",
          },
          {
            question: "¿Un agente de IA puede funcionar por WhatsApp?",
            answer:
              "Sí. Puede manejar conversaciones y tareas definidas, manteniendo una ruta clara hacia soporte humano.",
          },
          {
            question: "¿Podemos comenzar con un solo flujo?",
            answer:
              "Sí. Un flujo enfocado suele ser la mejor forma de validar valor antes de ampliar el sistema.",
          },
          {
            question: "¿Colosson trabaja solo con empresas de Medellín?",
            answer:
              "No. Nuestro equipo está en Medellín y trabaja con empresas en Colombia y otros países.",
          },
        ],
        relatedTitle: "Explora capacidades relacionadas",
        finalCta: "Empecemos con un flujo real",
        back: "Volver a Colosson",
        share: "Compartir",
      },
    },
  },
  "connected-products": {
    slug: "connected-products",
    metaTitle: "NFC Products & Smart Token Systems | Colosson",
    metaDescription:
      "Colosson creates NFC-enabled products and smart token systems that connect physical interactions with useful digital operations.",
    image: "/media/work/smart-valet-token-system.webp",
    imageAlt: {
      en: "Smart valet platform displayed on mobile and desktop beside its physical NFC token",
      es: "Plataforma inteligente de valet en móvil y escritorio junto a su token físico NFC",
    },
    copy: {
      en: {
        eyebrow: "Connected products · NFC systems",
        h1: "Connected products that bridge physical and digital",
        intent:
          "For teams looking for NFC products or smart token systems, Colosson designs the physical object, the digital experience and the operation that connects them.",
        cta: "Explore a connected product",
        takeawaysLabel: "Key takeaways",
        takeaways: [
          "One team connects object, interface and operation.",
          "NFC removes unnecessary steps from the user experience.",
          "Every token is designed for a specific real-world context.",
        ],
        capabilitiesTitle: "What a connected product can do",
        capabilities: [
          {
            title: "Identify",
            body: "Link a physical token to a vehicle, person, product, place or unique record.",
          },
          {
            title: "Trigger",
            body: "Open a useful action with a tap: status, registration, content or service.",
          },
          {
            title: "Track",
            body: "Give operators a clear view of usage, state and exceptions through a focused platform.",
          },
        ],
        tableTitle: "One system, three layers",
        tableHeaders: ["Layer", "Example", "Purpose"],
        tableRows: [
          ["Physical", "Branded NFC token", "A durable point of interaction"],
          ["Digital", "Mobile status experience", "Immediate information or action"],
          ["Operational", "Management dashboard", "Control, traceability and reporting"],
        ],
        processTitle: "How we shape the system",
        process: [
          "Define the moment where a tap creates real value.",
          "Prototype the token and interface as one experience.",
          "Connect the operating dashboard and validate the complete flow.",
        ],
        faqTitle: "Connected products FAQ",
        faqs: [
          {
            question: "What happens when someone taps the NFC token?",
            answer:
              "The tap opens the action designed for that context, such as a status page, registration flow or branded experience.",
          },
          {
            question: "Does the user need to install an app?",
            answer:
              "Most experiences can open directly in the phone browser, so an app is often unnecessary.",
          },
          {
            question: "Can each token be unique?",
            answer:
              "Yes. Tokens can identify individual records while sharing one consistent physical design.",
          },
          {
            question: "Can Colosson produce the physical tokens too?",
            answer:
              "Yes. We can design and produce the object, integrate NFC and build the connected digital system.",
          },
        ],
        relatedTitle: "Explore adjacent capabilities",
        finalCta: "Connect a physical interaction",
        back: "Back to Colosson",
        share: "Share",
      },
      es: {
        eyebrow: "Productos conectados · Sistemas NFC",
        h1: "Productos conectados entre lo físico y lo digital",
        intent:
          "Para equipos que buscan productos NFC o sistemas de tokens inteligentes, Colosson diseña el objeto físico, la experiencia digital y la operación que los conecta.",
        cta: "Exploremos un producto conectado",
        takeawaysLabel: "En pocas palabras",
        takeaways: [
          "Un mismo equipo conecta objeto, interfaz y operación.",
          "El NFC elimina pasos innecesarios de la experiencia.",
          "Cada token responde a un contexto real específico.",
        ],
        capabilitiesTitle: "Qué puede hacer un producto conectado",
        capabilities: [
          {
            title: "Identificar",
            body: "Vincular un token físico con un vehículo, persona, producto, lugar o registro único.",
          },
          {
            title: "Activar",
            body: "Abrir una acción útil con un toque: estado, registro, contenido o servicio.",
          },
          {
            title: "Controlar",
            body: "Dar a la operación una vista clara del uso, el estado y las excepciones.",
          },
        ],
        tableTitle: "Un sistema, tres capas",
        tableHeaders: ["Capa", "Ejemplo", "Propósito"],
        tableRows: [
          ["Física", "Token NFC de marca", "Un punto de interacción durable"],
          ["Digital", "Experiencia móvil de estado", "Información o acción inmediata"],
          ["Operativa", "Tablero de administración", "Control, trazabilidad y reportes"],
        ],
        processTitle: "Cómo damos forma al sistema",
        process: [
          "Definimos el momento donde un toque crea valor real.",
          "Prototipamos el token y la interfaz como una sola experiencia.",
          "Conectamos el tablero operativo y validamos el recorrido completo.",
        ],
        faqTitle: "Preguntas sobre productos conectados",
        faqs: [
          {
            question: "¿Qué ocurre al acercar el celular al token NFC?",
            answer:
              "Se abre la acción diseñada para ese contexto, como una página de estado, un registro o una experiencia de marca.",
          },
          {
            question: "¿El usuario necesita instalar una aplicación?",
            answer:
              "La mayoría de experiencias puede abrir directamente en el navegador del celular, sin instalar una app.",
          },
          {
            question: "¿Cada token puede ser único?",
            answer:
              "Sí. Los tokens pueden identificar registros individuales y mantener un mismo diseño físico.",
          },
          {
            question: "¿Colosson también produce los tokens físicos?",
            answer:
              "Sí. Podemos diseñar y producir el objeto, integrar el NFC y construir el sistema digital conectado.",
          },
        ],
        relatedTitle: "Explora capacidades relacionadas",
        finalCta: "Conectemos una interacción física",
        back: "Volver a Colosson",
        share: "Compartir",
      },
    },
  },
  "custom-products": {
    slug: "custom-products",
    metaTitle: "Custom Corporate Products & 3D Production | Colosson",
    metaDescription:
      "Colosson designs and produces custom corporate objects, 3D-printed products, connected gifts and branded packaging for companies.",
    image: "/media/work/corporate-character-nfc.webp",
    imageAlt: {
      en: "Custom copper corporate character produced in 3D with an integrated NFC experience",
      es: "Personaje corporativo personalizado producido en 3D con una experiencia NFC integrada",
    },
    copy: {
      en: {
        eyebrow: "Colosson 3D · Custom production",
        h1: "Custom products designed to be used",
        intent:
          "For companies searching for distinctive corporate products, Colosson turns a brand or business need into a physical object with purpose, character and production logic.",
        cta: "Discuss a custom product",
        takeawaysLabel: "Key takeaways",
        takeaways: [
          "The object begins with a purpose, not a catalogue.",
          "Design, prototyping and production stay under one roof.",
          "Digital layers such as NFC can be integrated when they add value.",
        ],
        capabilitiesTitle: "What we produce",
        capabilities: [
          {
            title: "Corporate objects",
            body: "Characters, gifts and functional pieces developed from the brand rather than decorated after the fact.",
          },
          {
            title: "Connected gifts",
            body: "Physical products with NFC that open useful content, links or personalized experiences.",
          },
          {
            title: "Custom packaging",
            body: "Presentation systems and small-format packaging designed around the product and its unboxing moment.",
          },
        ],
        tableTitle: "From brief to object",
        tableHeaders: ["Stage", "Decision", "Deliverable"],
        tableRows: [
          ["Concept", "Purpose, audience and brand cues", "Clear product direction"],
          ["Prototype", "Form, material and interaction", "Physical sample for validation"],
          ["Production", "Finish, quantity and quality", "Ready-to-use final pieces"],
        ],
        processTitle: "A production process with intent",
        process: [
          "Translate the business goal into a focused product concept.",
          "Prototype quickly and validate scale, material and detail.",
          "Produce, finish and prepare the pieces for their real context.",
        ],
        faqTitle: "Custom products FAQ",
        faqs: [
          {
            question: "Can you create a product from our logo or brand character?",
            answer:
              "Yes. We translate brand assets into a manufacturable object while preserving the identity that matters.",
          },
          {
            question: "Do you work only with 3D printing?",
            answer:
              "3D printing is a central capability, but the design can also incorporate hardware, NFC, packaging and finishing processes.",
          },
          {
            question: "Can we validate a sample before production?",
            answer:
              "Yes. Prototyping is a core step used to validate size, material, interaction and visual detail.",
          },
          {
            question: "Can the product connect to a digital experience?",
            answer:
              "Yes. We can integrate NFC when a tap adds useful content, identification or interaction.",
          },
        ],
        relatedTitle: "Explore adjacent capabilities",
        finalCta: "Turn a brief into an object",
        back: "Back to Colosson",
        share: "Share",
      },
      es: {
        eyebrow: "Colosson 3D · Producción personalizada",
        h1: "Productos personalizados diseñados para usarse",
        intent:
          "Para empresas que buscan productos corporativos distintivos, Colosson convierte una marca o una necesidad de negocio en un objeto físico con propósito, carácter y lógica de producción.",
        cta: "Conversemos sobre un producto",
        takeawaysLabel: "En pocas palabras",
        takeaways: [
          "El objeto comienza con un propósito, no con un catálogo.",
          "Diseño, prototipado y producción viven bajo un mismo techo.",
          "Integramos capas digitales como NFC cuando agregan valor.",
        ],
        capabilitiesTitle: "Qué producimos",
        capabilities: [
          {
            title: "Objetos corporativos",
            body: "Personajes, regalos y piezas funcionales desarrolladas desde la marca, no decoradas al final.",
          },
          {
            title: "Regalos conectados",
            body: "Productos físicos con NFC que abren contenido, enlaces o experiencias personalizadas.",
          },
          {
            title: "Packaging personalizado",
            body: "Sistemas de presentación y empaques de formato pequeño diseñados alrededor del producto y su apertura.",
          },
        ],
        tableTitle: "Del brief al objeto",
        tableHeaders: ["Etapa", "Decisión", "Entregable"],
        tableRows: [
          ["Concepto", "Propósito, audiencia y señales de marca", "Dirección clara de producto"],
          ["Prototipo", "Forma, material e interacción", "Muestra física para validar"],
          ["Producción", "Acabado, cantidad y calidad", "Piezas finales listas para usarse"],
        ],
        processTitle: "Un proceso de producción con intención",
        process: [
          "Traducimos el objetivo del negocio en un concepto de producto enfocado.",
          "Prototipamos y validamos escala, material y detalle.",
          "Producimos, terminamos y preparamos las piezas para su contexto real.",
        ],
        faqTitle: "Preguntas sobre productos personalizados",
        faqs: [
          {
            question: "¿Pueden crear un producto desde nuestro logo o personaje?",
            answer:
              "Sí. Traducimos los activos de marca a un objeto producible, conservando los rasgos importantes de la identidad.",
          },
          {
            question: "¿Trabajan únicamente con impresión 3D?",
            answer:
              "La impresión 3D es una capacidad central, pero el diseño también puede incorporar hardware, NFC, packaging y acabados.",
          },
          {
            question: "¿Podemos validar una muestra antes de producir?",
            answer:
              "Sí. El prototipado permite validar tamaño, material, interacción y detalle visual antes de la producción.",
          },
          {
            question: "¿El producto puede conectarse con una experiencia digital?",
            answer:
              "Sí. Podemos integrar NFC cuando el toque agrega contenido, identificación o una interacción útil.",
          },
        ],
        relatedTitle: "Explora capacidades relacionadas",
        finalCta: "Convirtamos un brief en un objeto",
        back: "Volver a Colosson",
        share: "Compartir",
      },
    },
  },
};

export function isSolutionSlug(value: string): value is SolutionSlug {
  return solutionSlugs.includes(value as SolutionSlug);
}
