import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import DuotoneImage from "@/components/duotone-image";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="flex-shrink-0">
              <DuotoneImage
                src="/images/profile.png"
                alt="Sanchezedu - Foto de perfil"
                width={140}
                height={140}
                className="h-[140px] w-[140px] rounded-full border-4 border-accent shadow-lg"
                lightColor="#F1E6FF"
                darkColor="#3B1B55"
                contrastFactor={1.1}
                sharpnessFactor={0.4}
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <AnimatePresence>
                <FadeUp key="title-main" duration={0.6}>
                  <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                    Sanchezedu
                  </h1>
                  <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                    Ingeniero Civil & Desarrollador Web
                  </span>
                </FadeUp>
                <FadeUp key="description" duration={0.6} delay={0.2}>
                  <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                    <span>
                      Construyo experiencias web con personalidad, enfoque en
                      negocio y resultados reales. Trabajo con{" "}
                    </span>
                    <span className="font-semibold text-accent">Next.js</span>,{" "}
                    <span className="font-semibold text-accent">React</span> y{" "}
                    <span className="font-semibold text-accent">
                      Tailwind CSS
                    </span>
                    . Especializado en landing pages, dashboards, e-commerce y
                    soluciones con bases de datos para emprendimientos.
                  </div>
                </FadeUp>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
