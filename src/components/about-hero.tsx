import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import DuotoneImage from "./duotone-image";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <DuotoneImage
              src="/images/profile.png"
              width={100}
              height={100}
              className="h-auto w-full px-0 xl:px-16"
              alt="Sanchezedu - Foto de perfil"
              lightColor="#F1E6FF"
              darkColor="#3B1B55"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hola, soy Sanchezedu
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Soy Ingeniero Civil graduado de ESPOL y desarrollador web
              especializado en crear productos digitales que venden. He
              trabajado como freelancer y emprendedor, levantando landing pages,
              tiendas en línea y sitios corporativos para negocios locales.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              También he creado dashboards operativos, sistemas con bases de
              datos y automatizaciones que optimizan procesos. He realizado
              cursos de especialización en programación e inteligencia
              artificial. Explora mis últimos{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">proyectos</span>
              </Link>{" "}
              que demuestran mi experiencia en React, Next.js, JavaScript,
              TypeScript y desarrollo web profesional.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <span className="text-lg font-medium text-foreground">
              Desarrollador Web Freelance
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
