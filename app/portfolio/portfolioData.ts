export type Locale = "es" | "en";

export type Localized = Record<Locale, string>;

export type ProjectView = {
  id: string;
  label: Localized;
  title: Localized;
  description: Localized;
  image: string;
  screenshot: string;
  href: string;
};

export type PortfolioProject = {
  id: string;
  category: "physical" | "software" | "interactive";
  title: Localized;
  subtitle: Localized;
  description: Localized;
  image: string;
  screenshot?: string;
  alt: Localized;
  details: Array<{ label: Localized; value: Localized }>;
  source?: string;
  href?: string;
  linkLabel?: Localized;
  note?: Localized;
  tabLabel?: Localized;
  tabCaption?: Localized;
  views?: ProjectView[];
};

const l = (es: string, en: string): Localized => ({ es, en });
const catalogSource = "https://portfolio.colossonlab.com/";
const publishedSiteNote = l(
  "Presentación visual basada en el sitio publicado.",
  "Visual presentation based on the published website.",
);

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
  {
    id: "colosson-empresas",
    category: "physical",
    title: l("Colosson3D para empresas", "Colosson3D for businesses"),
    subtitle: l("Identidad corporativa · Fabricación 3D", "Corporate identity · 3D fabrication"),
    description: l(
      "Identidad de marca convertida en objetos: impresión 3D, tarjetas NFC, kits corporativos y diseño paramétrico. Una vitrina para recorrer el proceso desde el concepto hasta la pieza final.",
      "Brand identity turned into objects: 3D printing, NFC cards, corporate kits and parametric design. A showcase of the journey from concept to finished piece.",
    ),
    image: "/portfolio/colosson-empresas.webp",
    screenshot: "/portfolio/sources/colosson-empresas.jpg",
    alt: l(
      "Presentación del sitio Colosson3D para empresas y fabricación corporativa",
      "Presentation of the Colosson3D website for businesses and corporate fabrication",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Soluciones para empresas", "Business solutions") },
      { label: l("Procesos", "Processes"), value: l("Impresión 3D y diseño paramétrico", "3D printing and parametric design") },
      { label: l("Aplicación", "Application"), value: l("Objetos de marca y kits corporativos", "Branded objects and corporate kits") },
    ],
    href: "https://empresa.colosson3d.com/",
    linkLabel: l("Explorar Colosson3D", "Explore Colosson3D"),
    note: publishedSiteNote,
  },
];

export const softwareProjects: PortfolioProject[] = [
  {
    id: "inventario-conversacional",
    category: "software",
    title: l("El inventario empieza en una conversación.", "Inventory starts with a conversation."),
    subtitle: l("Control de inventario · WhatsApp → Excel", "Inventory control · WhatsApp → Excel"),
    tabLabel: l("Inventario por WhatsApp", "Inventory via WhatsApp"),
    tabCaption: l("WhatsApp → Excel", "WhatsApp → Excel"),
    description: l(
      "Un inventario que se consulta desde una conversación. La propuesta conecta WhatsApp con el archivo de Excel para consultar referencias, registrar movimientos y recibir alertas sin cambiar la herramienta del equipo.",
      "Inventory managed through conversation. The solution connects WhatsApp to an Excel file to look up items, record stock movements and receive alerts without changing the team’s tools.",
    ),
    image: "/portfolio/agente-inventario.webp",
    screenshot: "/portfolio/sources/agente-inventario.jpg",
    alt: l(
      "Presentación del sitio Colosson IA con una conversación de WhatsApp y un inventario en Excel",
      "Presentation of the Colosson IA website with a WhatsApp conversation and an Excel inventory",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Automatización operativa", "Operational automation") },
      { label: l("Flujo", "Workflow"), value: l("WhatsApp → Excel", "WhatsApp → Excel") },
      { label: l("Aplicación", "Application"), value: l("Movimientos de inventario", "Inventory movements") },
    ],
    href: "https://agente.colosson.net/",
    linkLabel: l("Conocer Colosson IA", "Explore Colosson IA"),
    note: publishedSiteNote,
  },
  {
    id: "valet-inteligente",
    category: "software",
    title: l("Un toque. Todo conectado.", "One tap. All connected."),
    subtitle: l("Smart Valet · Sistema NFC", "Smart Valet · NFC system"),
    tabLabel: l("Valet inteligente", "Smart valet"),
    tabCaption: l("NFC → Operación", "NFC → Operations"),
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
    tabLabel: l("Agentes de WhatsApp", "WhatsApp agents"),
    tabCaption: l("Conversaciones → Acciones", "Conversations → Actions"),
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
  {
    id: "preparacion-inventarios",
    category: "software",
    title: l("Primero el orden. Luego la automatización.", "First organization. Then automation."),
    subtitle: l("Preparación de inventarios · Datos y procesos", "Inventory preparation · Data and processes"),
    tabLabel: l("Preparación de datos", "Data preparation"),
    tabCaption: l("Datos → Sistema", "Data → System"),
    description: l(
      "Una guía visual para ordenar la operación antes de automatizarla: identificación de productos, ubicaciones, conteo, stock mínimo y una base maestra lista para el sistema.",
      "A visual guide to organizing operations before automation: product identification, locations, counting, minimum stock and a master dataset ready for the system.",
    ),
    image: "/portfolio/preparacion-inventarios.webp",
    screenshot: "/portfolio/sources/preparacion-inventarios.jpg",
    alt: l(
      "Presentación de la guía de Colosson para preparar datos de inventario",
      "Presentation of Colosson’s guide to preparing inventory data",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Guía de preparación operativa", "Operational preparation guide") },
      { label: l("Flujo", "Workflow"), value: l("Organización → Base maestra → Sistema", "Organization → Master data → System") },
      { label: l("Aplicación", "Application"), value: l("Implementación de control de inventarios", "Inventory control implementation") },
    ],
    href: "https://inventario.colosson.net/",
    linkLabel: l("Explorar la guía", "Explore the guide"),
    note: publishedSiteNote,
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
  {
    id: "md-capital",
    category: "interactive",
    title: l("MD Capital", "MD Capital"),
    subtitle: l("Servicios financieros · Sitio bilingüe", "Financial services · Bilingual website"),
    description: l(
      "Un sitio que reúne crédito, vehículos, soluciones inmobiliarias y mercado de capitales en una experiencia bilingüe. Navegación por servicios, simulador de crédito y contacto por WhatsApp.",
      "A bilingual website bringing together lending, vehicles, real estate and capital markets, with service navigation, a loan simulator and WhatsApp contact.",
    ),
    image: "/portfolio/md-capital.webp",
    screenshot: "/portfolio/sources/md-capital.jpg",
    alt: l(
      "Presentación del sitio web de MD Capital y sus servicios financieros",
      "Presentation of the MD Capital website and its financial services",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Sitio web corporativo", "Corporate website") },
      { label: l("Experiencia", "Experience"), value: l("Servicios, simulador y contacto", "Services, simulator and contact") },
      { label: l("Idiomas", "Languages"), value: l("Español e inglés", "Spanish and English") },
    ],
    href: "https://mdcapital.com.co/",
    linkLabel: l("Visitar MD Capital", "Visit MD Capital"),
    note: publishedSiteNote,
  },
  {
    id: "sofia-ecologico",
    category: "interactive",
    title: l("Sofía: Un Verdadero Cuento Ecológico", "Sofía: Un Verdadero Cuento Ecológico"),
    subtitle: l("Educación ambiental · Experiencia interactiva", "Environmental education · Interactive experience"),
    description: l(
      "El universo de Sofía llevado a una experiencia educativa: capítulos sobre biodiversidad colombiana, lectura interactiva, juegos y un pasaporte del explorador con clasificación.",
      "Sofía’s world as an educational experience: chapters about Colombian biodiversity, interactive reading, games and an explorer passport with a leaderboard.",
    ),
    image: "/portfolio/sofia-ecologico.webp",
    screenshot: "/portfolio/sources/sofia-ecologico.jpg",
    alt: l(
      "Presentación del sitio educativo de Sofía con ilustraciones de la biodiversidad colombiana",
      "Presentation of Sofía’s educational website with illustrations of Colombian biodiversity",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Experiencia educativa", "Educational experience") },
      { label: l("Interacción", "Interaction"), value: l("Lectura, juegos y exploración", "Reading, games and exploration") },
      { label: l("Tema", "Theme"), value: l("Biodiversidad colombiana", "Colombian biodiversity") },
    ],
    href: "https://sofiacuentoecologico.com/",
    linkLabel: l("Explorar el universo de Sofía", "Explore Sofía’s world"),
    note: publishedSiteNote,
  },
  {
    id: "pcl-legal",
    category: "interactive",
    title: l("PCL® — Prevención y Control Legal", "PCL® — Prevención y Control Legal"),
    subtitle: l("LegalTech · Presencia digital", "LegalTech · Digital presence"),
    description: l(
      "La presencia digital de un ecosistema LegalTech. Una experiencia bilingüe que conecta empresas y profesionales con soluciones de cumplimiento, matrices legales, planes y asesoría especializada.",
      "The digital presence of a LegalTech ecosystem. A bilingual experience connecting companies and professionals with compliance tools, legal matrices, plans and specialist support.",
    ),
    image: "/portfolio/pcl-legal.webp",
    screenshot: "/portfolio/sources/pcl-legal.jpg",
    alt: l(
      "Presentación del sitio PCL de prevención y control legal para empresas y profesionales",
      "Presentation of the PCL legal prevention and compliance website for companies and professionals",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Sitio web corporativo", "Corporate website") },
      { label: l("Enfoque", "Focus"), value: l("Servicios y soluciones de cumplimiento", "Compliance services and solutions") },
      { label: l("Idiomas", "Languages"), value: l("Español e inglés", "Spanish and English") },
    ],
    href: "https://www.pcl.legal/",
    linkLabel: l("Visitar PCL", "Visit PCL"),
    note: publishedSiteNote,
  },
  {
    id: "rox-bioenergy",
    category: "interactive",
    title: l("ROX BioEnergy", "ROX BioEnergy"),
    subtitle: l("Industria global · Experiencia B2B", "Global industry · B2B experience"),
    description: l(
      "La complejidad industrial convertida en un recorrido claro. Un sitio bilingüe que conecta un catálogo técnico con búsqueda y filtros, fichas de producto, documentación y cotizaciones, acompañado de una narrativa logística que avanza con el scroll.",
      "Industrial complexity made easy to explore. A bilingual website connecting a searchable, filterable technical catalog with product details, documentation and quote requests, alongside a logistics story that unfolds as you scroll.",
    ),
    image: "/portfolio/rox-bioenergy.webp",
    screenshot: "/portfolio/sources/rox-logistica.jpg",
    alt: l(
      "Presentación de ROX BioEnergy con el recorrido logístico, catálogo filtrable y ficha rápida de producto",
      "ROX BioEnergy presentation showing the logistics journey, filterable catalog and product quick view",
    ),
    details: [
      { label: l("Tipo", "Type"), value: l("Sitio B2B con catálogo técnico", "B2B website with a technical catalog") },
      { label: l("Interacción", "Interaction"), value: l("Scroll narrativo, filtros y vistas rápidas", "Scroll storytelling, filters and quick views") },
      { label: l("Recorrido", "Journey"), value: l("Producto → Documentación → Cotización", "Product → Documentation → Quote request") },
      { label: l("Idiomas", "Languages"), value: l("Español e inglés", "Spanish and English") },
    ],
    href: "https://www.roxbioenergy.com/",
    linkLabel: l("Explorar ROX BioEnergy", "Explore ROX BioEnergy"),
    note: publishedSiteNote,
    views: [
      {
        id: "logistica",
        label: l("Logística animada", "Animated logistics"),
        title: l("Una operación que se cuenta en movimiento.", "An operation told through motion."),
        description: l(
          "El scroll activa un diagrama que recorre abastecimiento, transporte, almacenamiento y entrega. Las ilustraciones y la ruta se iluminan al ritmo del relato para explicar una operación compleja paso a paso.",
          "Scrolling activates a diagram through sourcing, transport, storage and delivery. Illustrations and the route light up alongside the story, explaining a complex operation step by step.",
        ),
        image: "/portfolio/rox-logistica.webp",
        screenshot: "/portfolio/sources/rox-logistica.jpg",
        href: "https://www.roxbioenergy.com/logistica/",
      },
      {
        id: "catalogo",
        label: l("Catálogo y filtros", "Catalog and filters"),
        title: l("Encontrar la referencia precisa.", "Find the right reference."),
        description: l(
          "Búsqueda por nombre, grado o número CAS, combinada con filtros por familia e industria. Los resultados y los filtros activos se actualizan dentro del directorio sin interrumpir la exploración.",
          "Search by name, grade or CAS number, combined with family and industry filters. Results and active filters update within the directory without interrupting exploration.",
        ),
        image: "/portfolio/rox-catalogo.webp",
        screenshot: "/portfolio/sources/rox-catalogo.jpg",
        href: "https://www.roxbioenergy.com/productos/",
      },
      {
        id: "ficha",
        label: l("Fichas rápidas", "Quick views"),
        title: l("Todo el contexto, sin perder el lugar.", "Full context, without losing your place."),
        description: l(
          "Un panel lateral reúne especificaciones, aplicaciones y sectores relacionados. Permite avanzar entre productos, abrir la ficha completa o pasar a una consulta con la referencia seleccionada.",
          "A side panel brings together specifications, applications and related industries. Move between products, open the full details or start an inquiry with the selected reference.",
        ),
        image: "/portfolio/rox-ficha.webp",
        screenshot: "/portfolio/sources/rox-ficha.jpg",
        href: "https://www.roxbioenergy.com/productos/bases-lubricantes/pao-4/",
      },
      {
        id: "documentacion",
        label: l("Biblioteca técnica", "Technical library"),
        title: l("La información técnica, a mano.", "Technical information, within reach."),
        description: l(
          "Una biblioteca buscable conecta productos con sus fichas técnicas en PDF, mostrando familia, revisión e idioma. El visitante pasa de explorar una referencia a consultar su documentación.",
          "A searchable library connects products with their PDF technical data sheets, showing family, revision and language. Visitors move from exploring a reference to consulting its documentation.",
        ),
        image: "/portfolio/rox-documentacion.webp",
        screenshot: "/portfolio/sources/rox-documentacion.jpg",
        href: "https://www.roxbioenergy.com/recursos/documentacion/",
      },
      {
        id: "cotizacion",
        label: l("Cotización conectada", "Connected quote request"),
        title: l("De la exploración a una consulta concreta.", "From exploration to a specific inquiry."),
        description: l(
          "La familia y el producto viajan desde la ficha hasta el formulario. El visitante completa volumen, frecuencia y destino, y prepara un correo para revisarlo y enviarlo desde su aplicación de correo.",
          "The family and product carry over from the detail view to the form. Visitors add volume, frequency and destination, then prepare an email to review and send from their email app.",
        ),
        image: "/portfolio/rox-cotizacion.webp",
        screenshot: "/portfolio/sources/rox-cotizacion.jpg",
        href: "https://www.roxbioenergy.com/cotizacion/?familia=bases-lubricantes&producto=PAO+4",
      },
    ],
  },
];
