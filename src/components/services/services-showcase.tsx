import { Database, LayoutTemplate, Rocket, Workflow } from "lucide-react";

const SERVICES = [
  {
    title: "Landing Pages que convierten",
    description:
      "Mensajes claros, estructura persuasiva y velocidad real para convertir visitas en clientes.",
    icon: LayoutTemplate,
  },
  {
    title: "Dashboards y bases de datos",
    description:
      "Paneles para controlar tu negocio con roles, métricas y reportes en tiempo real.",
    icon: Database,
  },
  {
    title: "Tiendas y pagos online",
    description:
      "Catálogo, carrito y pasarelas de pago listas para vender desde el día uno.",
    icon: Rocket,
  },
  {
    title: "Automatizaciones y CRM",
    description:
      "Flujos de leads, formularios inteligentes y procesos que ahorran horas cada semana.",
    icon: Workflow,
  },
];

export default function ServicesShowcase() {
  return (
    <section className="px-6 py-24 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-accent sm:text-4xl">
            Servicios
          </h2>
          <p className="max-w-3xl text-base text-muted-foreground md:text-lg">
            Soluciones web pensadas para emprendedores y negocios que quieren
            crecer con tecnología sólida y diseño profesional.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-background/70 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(176,96,255,0.25)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
