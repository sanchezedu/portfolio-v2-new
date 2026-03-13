import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import PricingShowcase from "@/components/pricing/pricing-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Darth Gaming | Desarrollador Web"
        description="Portafolio personal de Darth Gaming. Descubre proyectos web, sitios corporativos y soluciones a medida. Todos los links de los proyectos están aquí."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Darth Gaming - Portfolio Web",
          description:
            "Portafolio con proyectos de sitios web, landing pages y tiendas online creadas con Next.js y Tailwind CSS.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Darth Gaming - Portfolio",
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
              "Portfolio, proyectos web, Next.js, Tailwind CSS, diseño web, desarrollador web, landing pages, tiendas online, experiencia de usuario",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <PricingShowcase />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
      <section className="mx-auto mb-40 w-full px-6 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-foreground md:text-4xl">
            Mis planes
          </h2>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            <span>
              Estoy construyendo más proyectos y mejorando mis habilidades en
              backend y APIs.
            </span>{" "}
            <span>Aquí algunas metas actuales:</span>
          </p>
          <ul className="mt-6 space-y-3 text-base text-muted-foreground md:text-lg">
            <li>➡️ Lanzar una tienda en línea propia con pagos reales.</li>
            <li>➡️ Crear un CRM para mis proyectos y clientes.</li>
            <li>➡️ Optimizar entregas y hosting a velocidad máxima.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
