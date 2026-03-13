import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

const PROJECT_IMAGES = {
  autotech: "/images/projects/previews/autotech.jpg",
  delizia: "/images/projects/previews/delizia.jpg",
  civileng: "/images/projects/previews/civileng.jpg",
  auroraCove: "/images/projects/previews/aurora-cove.jpg",
  visionOptica: "/images/projects/previews/vision-optica.jpg",
  cookieCrush: "/images/projects/previews/cookie-crush.jpg",
  vintage: "/images/projects/previews/vintage.jpg",
  pawsClinic: "/images/projects/previews/paws-clinic.jpg",
  inmobPremium: "/images/projects/previews/inmob-premium.jpg",
  lexcorp: "/images/projects/previews/lexcorp.jpg",
  transglobal: "/images/projects/previews/transglobal.jpg",
};

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "AutoTech",
    href: "https://auto-tech-three.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Automotriz"],
    image: {
      LIGHT: PROJECT_IMAGES.autotech,
      DARK: PROJECT_IMAGES.autotech,
    },
  },
  {
    index: 1,
    title: "Delizia",
    href: "https://delizia-restaurant.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Restaurante"],
    image: {
      LIGHT: PROJECT_IMAGES.delizia,
      DARK: PROJECT_IMAGES.delizia,
    },
  },
  {
    index: 2,
    title: "CivilEng",
    href: "https://civil-engineering-gray.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Ingeniería Civil"],
    image: {
      LIGHT: PROJECT_IMAGES.civileng,
      DARK: PROJECT_IMAGES.civileng,
    },
  },
  {
    index: 3,
    title: "Aurora Cove",
    href: "https://aurora-cove.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Hotel Boutique"],
    image: {
      LIGHT: PROJECT_IMAGES.auroraCove,
      DARK: PROJECT_IMAGES.auroraCove,
    },
  },
  {
    index: 4,
    title: "VisionOptica",
    href: "https://vision-optica-premium.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Óptica"],
    image: {
      LIGHT: PROJECT_IMAGES.visionOptica,
      DARK: PROJECT_IMAGES.visionOptica,
    },
  },
  {
    index: 5,
    title: "Cookie Crush",
    href: "https://cookie-shop-kappa.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Galletas Gourmet"],
    image: {
      LIGHT: PROJECT_IMAGES.cookieCrush,
      DARK: PROJECT_IMAGES.cookieCrush,
    },
  },
  {
    index: 6,
    title: "Vintage",
    href: "https://vintage-collective.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Antigüedades"],
    image: {
      LIGHT: PROJECT_IMAGES.vintage,
      DARK: PROJECT_IMAGES.vintage,
    },
  },
  {
    index: 7,
    title: "Paws Clinic",
    href: "https://paws-clinic-chi.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Veterinaria"],
    image: {
      LIGHT: PROJECT_IMAGES.pawsClinic,
      DARK: PROJECT_IMAGES.pawsClinic,
    },
  },
  {
    index: 8,
    title: "Inmob Premium",
    href: "https://inmob-premium.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Inmobiliaria"],
    image: {
      LIGHT: PROJECT_IMAGES.inmobPremium,
      DARK: PROJECT_IMAGES.inmobPremium,
    },
  },
  {
    index: 9,
    title: "LexCorp",
    href: "https://lexcorp-firma.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Abogados"],
    image: {
      LIGHT: PROJECT_IMAGES.lexcorp,
      DARK: PROJECT_IMAGES.lexcorp,
    },
  },
  {
    index: 10,
    title: "TransGlobal",
    href: "https://transglobal-logistics.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Logística"],
    image: {
      LIGHT: PROJECT_IMAGES.transglobal,
      DARK: PROJECT_IMAGES.transglobal,
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "AutoTech",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.autotech],
    description:
      "Sitio web para talleres automotrices con catálogo de servicios y contacto rápido.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://auto-tech-three.vercel.app",
  },
  {
    name: "Delizia",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.delizia],
    description:
      "Sitio para restaurante con menú y reservas. Diseño limpio e intuitivo para clientes.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://delizia-restaurant.vercel.app",
  },
  {
    name: "CivilEng",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.civileng],
    description:
      "Portfolio de servicios de ingeniería civil con galerías, secciones de proyectos y contacto.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://civil-engineering-gray.vercel.app",
  },
  {
    name: "Aurora Cove",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.auroraCove],
    description:
      "Landing page para hotel boutique con secciones de habitaciones, experiencias y reservas.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://aurora-cove.vercel.app",
  },
  {
    name: "VisionOptica",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.visionOptica],
    description:
      "Sitio web para óptica premium con catálogo de productos y formulario de contacto.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://vision-optica-premium.vercel.app",
  },
  {
    name: "Cookie Crush",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.cookieCrush],
    description:
      "Tienda de galletas gourmet con presentación de productos y carrito de compra.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://cookie-shop-kappa.vercel.app",
  },
  {
    name: "Vintage",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.vintage],
    description:
      "Marketplace de antigüedades con catálogo de objetos, filtros y fichas de producto.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://vintage-collective.vercel.app",
  },
  {
    name: "Paws Clinic",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.pawsClinic],
    description:
      "Sitio para clínica veterinaria con servicios, horarios y contacto directo.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://paws-clinic-chi.vercel.app",
  },
  {
    name: "Inmob Premium",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.inmobPremium],
    description:
      "Portal inmobiliario con listado de propiedades y búsqueda avanzada.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://inmob-premium.vercel.app",
  },
  {
    name: "LexCorp",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.lexcorp],
    description:
      "Sitio para firma de abogados con servicios, equipo y formularios de contacto.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://lexcorp-firma.vercel.app",
  },
  {
    name: "TransGlobal",
    favicon: "/favicon.ico",
    imageUrl: [PROJECT_IMAGES.transglobal],
    description:
      "Portal de logística con seguimiento, servicios y contacto para clientes empresariales.",
    sourceCodeHref: "https://github.com/Sanchezedu",
    liveWebsiteHref: "https://transglobal-logistics.vercel.app",
  },
];
