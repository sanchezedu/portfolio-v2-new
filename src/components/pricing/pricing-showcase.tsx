import { PRICING_PLANS } from "@/data/pricing";
import { CheckIcon } from "../icons";

const TRUST_PILLS = [
  {
    title: "Entrega rápida",
    description: "Cronogramas claros desde el día 1.",
  },
  {
    title: "Soporte directo",
    description: "Comunicación sin intermediarios.",
  },
  {
    title: "Garantía real",
    description: "Ajustes incluidos en la etapa final.",
  },
];

const PRICING_BONUSES = [
  "Auditoría inicial gratuita",
  "Checklist de lanzamiento",
  "Guía de contenido para tu marca",
];

export default function PricingShowcase() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-28 overflow-hidden px-4 py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-accent/10"></div>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">
            Planes y{" "}
            <span className="bg-gradient-to-r from-accent to-fuchsia-400 bg-clip-text text-transparent">
              Precios
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="mx-auto mb-10 grid max-w-4xl gap-4 text-left md:grid-cols-3">
          {TRUST_PILLS.map((pill) => (
            <div
              key={pill.title}
              className="rounded-2xl border border-border bg-background/70 p-4"
            >
              <p className="text-sm font-semibold text-foreground">
                {pill.title}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {pill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative border bg-background/70 ${
                plan.popular ? "border-accent" : "border-border"
              } rounded-2xl p-8 transition-all hover:border-accent/60 hover:shadow-[0_0_30px_rgba(176,96,255,0.25)]`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-fuchsia-400 px-4 py-1 text-xs font-bold text-white">
                  Recomendado
                </div>
              )}

              <h3 className="mb-2 text-xl font-bold text-foreground">
                {plan.name}
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap items-end gap-3">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  {"originalPrice" in plan && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${plan.originalPrice} USD
                    </span>
                  )}
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Promo activa
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Precio final por lanzamiento
                </span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Mantenimiento
                  </span>
                  <span className="font-bold text-accent">
                    ${plan.maintenance}/mes
                  </span>
                </div>
                {"maintenanceNote" in plan && plan.maintenanceNote && (
                  <p className="mt-2 text-xs font-semibold text-accent">
                    {plan.maintenanceNote}
                  </p>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  Incluye soporte y ajustes menores
                </p>
              </div>

              <button
                className={`w-full rounded-xl px-6 py-3 font-semibold transition-all ${
                  plan.popular
                    ? "bg-accent text-white hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(176,96,255,0.45)]"
                    : "border border-accent text-accent hover:bg-accent hover:text-white"
                }`}
              >
                Cotizar ahora
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-background/80 p-6 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Bonus de lanzamiento para nuevos proyectos
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Cada plan incluye recursos adicionales para acelerar resultados.
            </p>
          </div>
          <ul className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-accent md:mt-0">
            {PRICING_BONUSES.map((bonus) => (
              <li key={bonus} className="rounded-full bg-accent/10 px-3 py-1">
                {bonus}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
