import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Proyectos | Sanchezedu"
        description="Descubre los proyectos web construidos por Sanchezedu. Landing pages, tiendas en línea y sitios corporativos con Next.js y Tailwind CSS."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Proyectos | Sanchezedu",
          description:
            "Portafolio de proyectos web creados con Next.js, Tailwind CSS y diseño responsivo.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Sanchezedu - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Portafolio, proyectos web, Next.js, Tailwind CSS, landing pages, tiendas online, diseño web, desarrollador web",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Proyectos
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Estos son algunos trabajos que he creado y desplegado en la web.
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              Estoy construyendo nuevos proyectos y ampliando mis conocimientos
              en backend y APIs.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Revisa mi Github para ver proyectos recientes y demos en progreso{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
