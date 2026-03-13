import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

const defaultImages = {
  LIGHT: "/images/projects/portfolioLight.webp",
  DARK: "/images/projects/portfolioDark.webp",
};

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "AutoTech",
    href: "https://auto-tech-three.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Automotriz"],
    image: defaultImages,
  },
  {
    index: 1,
    title: "Delizia",
    href: "https://delizia-restaurant.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Restaurante"],
    image: defaultImages,
  },
  {
    index: 2,
    title: "CivilEng",
    href: "https://civil-engineering-gray.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Ingeniería Civil"],
    image: defaultImages,
  },
  {
    index: 3,
    title: "Aurora Cove",
    href: "https://aurora-cove.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Hotel Boutique"],
    image: defaultImages,
  },
  {
    index: 4,
    title: "VisionOptica",
    href: "https://vision-optica-premium.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Óptica"],
    image: defaultImages,
  },
  {
    index: 5,
    title: "Cookie Crush",
    href: "https://cookie-shop-kappa.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Galletas Gourmet"],
    image: defaultImages,
  },
  {
    index: 6,
    title: "Vintage",
    href: "https://vintage-collective.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Antigüedades"],
    image: defaultImages,
  },
  {
    index: 7,
    title: "Paws Clinic",
    href: "https://paws-clinic-chi.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Veterinaria"],
    image: defaultImages,
  },
  {
    index: 8,
    title: "Inmob Premium",
    href: "https://inmob-premium.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Inmobiliaria"],
    image: defaultImages,
  },
  {
    index: 9,
    title: "LexCorp",
    href: "https://lexcorp-firma.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Abogados"],
    image: defaultImages,
  },
  {
    index: 10,
    title: "TransGlobal",
    href: "https://transglobal-logistics.vercel.app",
    tags: ["Next.js", "Tailwind CSS", "Logística"],
    image: defaultImages,
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "AutoTech",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=AutoTech"],
    description:
      "Sitio web para talleres automotrices con catálogo de servicios y contacto rápido.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://auto-tech-three.vercel.app",
  },
  {
    name: "Delizia",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=Delizia"],
    description:
      "Sitio para restaurante con menú y reservas. Diseño limpio e intuitivo para clientes.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://delizia-restaurant.vercel.app",
  },
  {
    name: "CivilEng",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=CivilEng"],
    description:
      "Portfolio de servicios de ingeniería civil con galerías, secciones de proyectos y contacto.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://civil-engineering-gray.vercel.app",
  },
  {
    name: "Aurora Cove",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=Aurora+Cove"],
    description:
      "Landing page para hotel boutique con secciones de habitaciones, experiencias y reservas.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://aurora-cove.vercel.app",
  },
  {
    name: "VisionOptica",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=VisionOptica"],
    description:
      "Sitio web para óptica premium con catálogo de productos y formulario de contacto.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://vision-optica-premium.vercel.app",
  },
  {
    name: "Cookie Crush",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=Cookie+Crush"],
    description:
      "Tienda de galletas gourmet con presentación de productos y carrito de compra.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://cookie-shop-kappa.vercel.app",
  },
  {
    name: "Vintage",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=Vintage"],
    description:
      "Marketplace de antigüedades con catálogo de objetos, filtros y fichas de producto.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://vintage-collective.vercel.app",
  },
  {
    name: "Paws Clinic",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=Paws+Clinic"],
    description:
      "Sitio para clínica veterinaria con servicios, horarios y contacto directo.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://paws-clinic-chi.vercel.app",
  },
  {
    name: "Inmob Premium",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=Inmob+Premium"],
    description:
      "Portal inmobiliario con listado de propiedades y búsqueda avanzada.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://inmob-premium.vercel.app",
  },
  {
    name: "LexCorp",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=LexCorp"],
    description:
      "Sitio para firma de abogados con servicios, equipo y formularios de contacto.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://lexcorp-firma.vercel.app",
  },
  {
    name: "TransGlobal",
    favicon: "/favicon.ico",
    imageUrl: ["https://via.placeholder.com/600x400?text=TransGlobal"],
    description:
      "Portal de logística con seguimiento, servicios y contacto para clientes empresariales.",
    sourceCodeHref: "https://github.com/DarthGaming",
    liveWebsiteHref: "https://transglobal-logistics.vercel.app",
  },
];
