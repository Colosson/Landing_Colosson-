export type Locale = "es" | "en";

export type Localized = Record<Locale, string>;

export type PortfolioProject = {
  id: string;
  category: "physical" | "software" | "interactive";
  title: Localized;
  subtitle: Localized;
  description: Localized;
  image: string;
  alt: Localized;
  details: Array<{ label: Localized; value: Localized }>;
  source?: string;
  href?: string;
  linkLabel?: Localized;
  note?: Localized;
};

const l = (es: string, en: string): Localized => ({ es, en });
const catalogSource = "https://portfolio.colossonlab.com/";

export const physicalProjects: PortfolioProject[] = [
  {
    id: "llavero-nfc",
    category: "physical",
    title: l("Llaveros NFC", "NFC keychains"),
    subtitle: l("Llavero corporativo · NFC", "Corporate keychain · NFC"),
    description: l(
      "Un objeto de marca que también es un acceso directo. Al acercarlo al teléfono, puede abrir un catálogo, una página o un perfil.",
      "A branded object that doubles as a shortcut. A tap with a phone can open a catalog, a page or a profile.",
    ),
    image: "/portfolio/llavero-nfc.jpg",
    alt: l(
      "Llave blanca impresa en 3D con símbolo NFC junto a un teléfono",
      "White 3D-printed key with an NFC symbol beside a phone",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Objeto conectado", "Connected object") },
      { label: l("Materiales", "Materials"), value: l("PLA Premium / PETG", "Premium PLA / PETG") },
      { label: l("Aplicación", "Application"), value: l("Ferias, onboarding y marca", "Events, onboarding and branding") },
    ],
    source: catalogSource,
  },
  {
    id: "trofeos-reconocimientos",
    category: "physical",
    title: l("Trofeos y reconocimientos", "Trophies and recognition"),
    subtitle: l("Trofeos · Reconocimientos", "Trophies · Recognition"),
    description: l(
      "Una forma propia de celebrar a un equipo. Piezas con nombre, mensaje e identidad, diseñadas para seguir contando la historia después del evento.",
      "A distinctive way to celebrate a team. Pieces with a name, a message and an identity, made to keep telling the story after the event.",
    ),
    image: "/portfolio/trofeos-reconocimientos.jpg",
    alt: l(
      "Trofeo personalizado con una mano que sostiene la forma de un árbol",
      "Custom trophy shaped as a hand holding a tree",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Reconocimiento personalizado", "Custom recognition piece") },
      { label: l("Materiales", "Materials"), value: l("PLA Silk / PLA+", "Silk PLA / PLA+") },
      { label: l("Aplicación", "Application"), value: l("Aniversarios y reconocimientos", "Anniversaries and recognition") },
    ],
    source: catalogSource,
  },
  {
    id: "mascota-corporativa",
    category: "physical",
    title: l("Mascotas corporativas", "Corporate mascots"),
    subtitle: l("Mascota corporativa · Impresión 3D", "Corporate mascot · 3D printing"),
    description: l(
      "El personaje de una marca sale de la pantalla. Figuras personalizadas para regalar, exhibir y llevar una identidad al mundo físico.",
      "A brand character steps off the screen. Custom figures to give, display and bring an identity into the physical world.",
    ),
    image: "/portfolio/mascota-corporativa.jpg",
    alt: l(
      "Figura corporativa impresa en 3D con acabado color cobre",
      "3D-printed corporate character with a copper-colored finish",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Personaje de marca", "Brand character") },
      { label: l("Materiales", "Materials"), value: l("PLA+ color / PETG", "Colored PLA+ / PETG") },
      { label: l("Aplicación", "Application"), value: l("Regalos, trofeos y stands", "Gifts, trophies and displays") },
    ],
    source: catalogSource,
  },
  {
    id: "packaging-display",
    category: "physical",
    title: l("Packaging y display", "Packaging and displays"),
    subtitle: l("Packaging · Displays a medida", "Packaging · Custom displays"),
    description: l(
      "Cajas, expositores y soportes que hacen parte del producto. Diseñados alrededor de su forma y de cómo una persona lo descubre.",
      "Boxes, displays and holders that become part of the product. Designed around its shape and the way someone discovers it.",
    ),
    image: "/portfolio/packaging-display.jpg",
    alt: l(
      "Cajas y piezas de presentación personalizadas en tonos negro y plateado",
      "Custom boxes and presentation pieces in black and silver tones",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Empaque y exhibición", "Packaging and display") },
      { label: l("Material", "Material"), value: l("PLA de color", "Colored PLA") },
      { label: l("Aplicación", "Application"), value: l("Punto de venta y unboxing", "Retail and unboxing") },
    ],
    source: catalogSource,
  },
  {
    id: "prototipos-funcionales",
    category: "physical",
    title: l("Prototipos funcionales", "Functional prototypes"),
    subtitle: l("Prototipos · Piezas funcionales", "Prototypes · Functional parts"),
    description: l(
      "Ideas que se pueden sostener, ensamblar y poner a prueba. Prototipos y componentes para explorar una solución antes de dar el siguiente paso.",
      "Ideas you can hold, assemble and test. Prototypes and components for exploring a solution before taking the next step.",
    ),
    image: "/portfolio/prototipos-funcionales.jpg",
    alt: l(
      "Engranajes y componentes funcionales negros impresos en 3D",
      "Black 3D-printed gears and functional components",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Prototipado funcional", "Functional prototyping") },
      { label: l("Materiales", "Materials"), value: l("Nylon PA12 / TPU / PETG", "Nylon PA12 / TPU / PETG") },
      { label: l("Aplicación", "Application"), value: l("Validación, ingeniería y repuestos", "Validation, engineering and spare parts") },
    ],
    source: catalogSource,
  },
  {
    id: "tarjetas-de-marca",
    category: "physical",
    title: l("Tarjetas de marca en 3D", "3D brand cards"),
    subtitle: l("Tarjetas de marca en 3D", "3D brand cards"),
    description: l(
      "La identidad visual toma volumen en una pieza pequeña. Una exploración de color, forma y relieve aplicada a una tarjeta de marca.",
      "Visual identity takes shape in a small object. An exploration of color, form and relief applied to a brand card.",
    ),
    image: "/portfolio/senaletica-3d.jpg",
    alt: l(
      "Tarjeta azul de hotel con identidad de marca y detalles en relieve",
      "Blue hotel card with branding and raised details",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Tarjeta de marca", "Brand card") },
      { label: l("Proceso", "Process"), value: l("Diseño e impresión 3D", "Design and 3D printing") },
      { label: l("Aplicación", "Application"), value: l("Identidad y experiencia de marca", "Brand identity and experience") },
    ],
    source: catalogSource,
  },
];

export const softwareProjects: PortfolioProject[] = [
  {
    id: "inventario-conversacional",
    category: "software",
    title: l("El inventario empieza en una conversación.", "Inventory starts with a conversation."),
    subtitle: l("Control de inventario · WhatsApp → Excel", "Inventory control · WhatsApp → Excel"),
    description: l(
      "Un flujo conversacional pensado para registrar movimientos de producto desde WhatsApp y organizarlos en Excel. La operación, desde una herramienta cotidiana.",
      "A conversational workflow designed to record product movements through WhatsApp and organize them in Excel. Operations through an everyday tool.",
    ),
    image: "/inventory-product-mockup.webp",
    alt: l(
      "Visualización de control de inventario desde una conversación de WhatsApp",
      "Inventory control visualization through a WhatsApp conversation",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Automatización operativa", "Operational automation") },
      { label: l("Flujo", "Workflow"), value: l("WhatsApp → Excel", "WhatsApp → Excel") },
      { label: l("Aplicación", "Application"), value: l("Movimientos de inventario", "Inventory movements") },
    ],
    note: l("Visualización del sistema", "System visualization"),
  },
  {
    id: "valet-inteligente",
    category: "software",
    title: l("Un toque. Todo conectado.", "One tap. All connected."),
    subtitle: l("Smart Valet · Sistema NFC", "Smart Valet · NFC system"),
    description: l(
      "Un token físico, la información del vehículo y una interfaz de operación. Una propuesta que une cada parte de la experiencia de valet en un mismo sistema.",
      "A physical token, vehicle information and an operational interface. A proposal that brings each part of the valet experience into one system.",
    ),
    image: "/valet-product-mockup.webp",
    alt: l(
      "Visualización de un sistema de valet con token NFC, vehículo y estado de entrega",
      "Valet system visualization with an NFC token, a vehicle and delivery status",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Producto físico + digital", "Physical + digital product") },
      { label: l("Interacción", "Interaction"), value: l("Token NFC → Vehículo", "NFC token → Vehicle") },
      { label: l("Aplicación", "Application"), value: l("Operación de valet", "Valet operations") },
    ],
    note: l("Visualización del sistema", "System visualization"),
  },
  {
    id: "agentes-whatsapp",
    category: "software",
    title: l("Conversaciones que avanzan.", "Conversations that move forward."),
    subtitle: l("Agentes de WhatsApp · Automatización", "WhatsApp agents · Automation"),
    description: l(
      "Asistentes diseñados para orientar conversaciones, organizar solicitudes y dar paso a una persona cuando hace falta. Cada flujo parte de una necesidad concreta.",
      "Assistants designed to guide conversations, organize requests and hand off to a person when needed. Each workflow starts with a specific need.",
    ),
    image: "/whatsapp-agent-product-mockup.webp",
    alt: l(
      "Visualización de un agente de WhatsApp con menús, prospectos y relevo humano",
      "WhatsApp agent visualization with menus, leads and human handoff",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Asistente conversacional", "Conversational assistant") },
      { label: l("Canal", "Channel"), value: l("WhatsApp", "WhatsApp") },
      { label: l("Aplicación", "Application"), value: l("Atención y gestión de solicitudes", "Support and request management") },
    ],
    note: l("Visualización del sistema", "System visualization"),
  },
];

export const interactiveProjects: PortfolioProject[] = [
  {
    id: "expectra",
    category: "interactive",
    title: l("Expectra", "Expectra"),
    subtitle: l("Eventos y boletería · Concepto UI/UX", "Events and ticketing · UI/UX concept"),
    description: l(
      "Una exploración de la experiencia de descubrir eventos y encontrar la próxima salida. Diseño de interfaz, jerarquía visual y navegación en un prototipo que puedes recorrer.",
      "An exploration of discovering events and finding your next night out. Interface design, visual hierarchy and navigation in a prototype you can explore.",
    ),
    image: "/media/work/expectra-events-ticketing-rework.webp",
    alt: l(
      "Concepto de rediseño de Expectra para descubrir eventos y boletería en móvil",
      "Expectra redesign concept for discovering events and tickets on mobile",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Concepto de rediseño", "Redesign concept") },
      { label: l("Disciplina", "Discipline"), value: l("UI/UX y prototipado", "UI/UX and prototyping") },
      { label: l("Aplicación", "Application"), value: l("Eventos y boletería", "Events and ticketing") },
    ],
    href: "/mockups/expectra/index.html",
    linkLabel: l("Explorar el prototipo", "Explore the prototype"),
    note: l("Concepto interactivo de interfaz", "Interactive interface concept"),
  },
  {
    id: "colosson-web",
    category: "interactive",
    title: l("Colosson", "Colosson"),
    subtitle: l("Sitio corporativo · Identidad digital", "Corporate website · Digital identity"),
    description: l(
      "Nuestra casa en internet. Un recorrido por las ideas, los objetos y los sistemas que construimos, con tipografía expresiva, movimiento y una identidad propia.",
      "Our home on the internet. A journey through the ideas, objects and systems we build, with expressive typography, motion and an identity of its own.",
    ),
    image: "/colosson-team-final.webp",
    alt: l(
      "Imagen del equipo Colosson utilizada en el sitio corporativo",
      "Colosson team image used on the corporate website",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Sitio web corporativo", "Corporate website") },
      { label: l("Disciplina", "Discipline"), value: l("Diseño y desarrollo web", "Web design and development") },
      { label: l("Aplicación", "Application"), value: l("Marca y presentación de proyectos", "Brand and project showcase") },
    ],
    href: "/",
    linkLabel: l("Visitar Colosson", "Visit Colosson"),
  },
];
