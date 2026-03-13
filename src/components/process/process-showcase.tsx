import { CheckCircle2Icon, MessageSquareIcon, PenToolIcon } from "lucide-react";

const STEPS = [
  {
    title: "Brief y estrategia",
    description:
      "Definimos objetivos, público, estructura y el mensaje clave para convertir.",
    icon: MessageSquareIcon,
  },
  {
    title: "Diseño y prototipo",
    description:
      "Creamos un diseño limpio y profesional alineado a tu marca y servicios.",
    icon: PenToolIcon,
  },
  {
    title: "Desarrollo y lanzamiento",
    description:
      "Construyo el sitio, optimizo velocidad y lo dejo listo para publicar.",
    icon: CheckCircle2Icon,
  },
];

export default function ProcessShowcase() {
  return (
    <section className="px-6 py-24 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-accent sm:text-4xl">
            Proceso de trabajo
          </h2>
          <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
            Un flujo claro para que sepas qué esperar en cada etapa.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-background/70 p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Paso {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
