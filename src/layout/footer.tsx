import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="px-6 py-14 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-border bg-background/80 p-8 shadow-sm md:p-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <span className="inline-flex w-fit items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                Hablemos
              </span>
              <h2 className="max-w-xl text-2xl font-semibold text-foreground md:text-4xl">
                ¿Listo para elevar tu presencia digital?
              </h2>
              <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                Respondo en menos de 24 horas con una propuesta clara y
                personalizada.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${siteMetadata.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-foreground underline underline-offset-4"
              >
                {siteMetadata.email}
              </a>
              <div className="flex flex-wrap items-center gap-4">
                <ContactButton />
                <span className="text-sm text-muted-foreground">
                  Agenda una llamada o envíame un mensaje directo.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-6 text-center text-sm text-muted-foreground md:flex-row">
          <span>©2026 Sanchezedu. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-6 w-6"
              aria-label="link to Github"
            >
              <GithubIcon className="text-accent transition-colors duration-150 hover:text-foreground" />
            </a>
            <a
              href={siteMetadata.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="h-6 w-6"
              aria-label="link to Twitter"
            >
              <TwitterIcon className="text-accent transition-colors duration-150 hover:text-foreground" />
            </a>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-6 w-6"
              aria-label="link to Linkedin"
            >
              <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
