import { CheckCircle2Icon, SparklesIcon, StarIcon } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Emprendedora local",
    role: "Marca de productos artesanales",
    quote:
      "La landing quedó impecable y empezó a generar pedidos desde la primera semana. La asesoría fue clara y rápida.",
    highlight: "+40% consultas",
  },
  {
    name: "Dueño de negocio",
    role: "Servicios automotrices",
    quote:
      "Necesitaba un sitio profesional con WhatsApp y formularios. Entregó rápido y con un diseño que transmite confianza.",
    highlight: "Entrega en 10 días",
  },
  {
    name: "Gerente de operaciones",
    role: "Empresa de logística",
    quote:
      "El dashboard nos ordenó todo. Ahora tenemos métricas claras y reportes que antes tomaban horas.",
    highlight: "Ahorro 6h/semana",
  },
];

export default function TestimonialsShowcase() {
  return (
    <section className="px-6 py-24 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            <SparklesIcon className="h-4 w-4" />
            Testimonios
          </div>
          <h2 className="text-2xl font-semibold text-foreground sm:text-4xl">
            Resultados reales con clientes reales
          </h2>
          <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
            Opiniones anónimas de emprendedores y empresas que confiaron en mis
            soluciones web.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.quote}
              className="rounded-2xl border border-border bg-background/70 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(176,96,255,0.2)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
                <div className="inline-flex items-center gap-1 text-accent">
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                  <StarIcon className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{item.quote}</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                <CheckCircle2Icon className="h-4 w-4" />
                {item.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
