import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="Sobre Darth Gaming | Desarrollador Web"
        description="Conoce más sobre Darth Gaming, desarrollador web especializado en Next.js, React y Tailwind CSS. Descubre mi trayectoria, habilidades y pasión por crear soluciones web innovadoras."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Sobre Darth Gaming - Desarrollador Web",
          description:
            "Descubre la historia de Darth Gaming, desarrollador web. Explora las experiencias, habilidades y pasión que impulsan la creación de soluciones web excepcionales.",
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
              "Portfolio desarrollador web, Next.js, React, Tailwind CSS, JavaScript, HTML, CSS, trayectoria profesional, habilidades, pasión desarrollo web",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
