import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import ServicesShowcase from "@/components/services/services-showcase";
import ProcessShowcase from "@/components/process/process-showcase";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import PricingShowcase from "@/components/pricing/pricing-showcase";
import TestimonialsShowcase from "@/components/testimonials/testimonials-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (!hash) return;
    const target = document.getElementById(hash);
    if (!target) return;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [router.asPath]);

  return (
    <>
      <NextSeo
        title="Sanchezedu | Desarrollador Web"
        description="Portafolio personal de Sanchezedu. Descubre proyectos web, sitios corporativos y soluciones a medida. Todos los links de los proyectos están aquí."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Sanchezedu - Portfolio Web",
          description:
            "Portafolio con proyectos de sitios web, landing pages y tiendas online creadas con Next.js y Tailwind CSS.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Sanchezedu - Portfolio",
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
      <ServicesShowcase />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
      <TestimonialsShowcase />
      <PricingShowcase />
      <ProcessShowcase />
      <SkillsShowcase skills={SKILLS_DATA} />
      <section className="mx-auto mb-40 w-full px-6 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-border bg-background/70 p-8 shadow-sm md:p-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-foreground md:text-4xl">
                  Mis planes
                </h2>
                <p className="mt-2 max-w-3xl text-base text-muted-foreground md:text-lg">
                  Estoy construyendo más proyectos y mejorando mis habilidades
                  en backend y APIs. Estas son mis metas actuales.
                </p>
              </div>
              <div className="w-fit rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent">
                2026
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background/80 p-5">
                <h3 className="text-base font-semibold text-foreground">
                  Tienda online propia
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lanzar una tienda con pagos reales, logística y automatización
                  de ventas.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/80 p-5">
                <h3 className="text-base font-semibold text-foreground">
                  CRM para clientes
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Crear un CRM interno para control de leads, seguimiento y
                  reportes.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/80 p-5">
                <h3 className="text-base font-semibold text-foreground">
                  Hosting al máximo
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Optimizar entregas, rendimiento y tiempos de carga en todos
                  mis proyectos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
