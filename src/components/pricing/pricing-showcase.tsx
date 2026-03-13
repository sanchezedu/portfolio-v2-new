import { PRICING_PLANS } from "@/data/pricing";
import { CheckIcon } from "../icons";

export default function PricingShowcase() {
  return (
    <section id="pricing" className="bg-[#0a0a0a] px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Planes y{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Precios
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative border bg-[#111] ${
                plan.popular ? "border-cyan-400" : "border-white/10"
              } rounded-2xl p-8 transition-all hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-green-400 px-4 py-1 text-xs font-bold text-black">
                  Recomendado
                </div>
              )}

              <h3 className="mb-2 text-xl font-bold text-white">{plan.name}</h3>
              <p className="mb-6 text-sm text-gray-400">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  ${plan.price}
                </span>
                <span className="text-gray-500"> USD</span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Mantenimiento</span>
                  <span className="font-bold text-green-400">
                    ${plan.maintenance}/mes
                  </span>
                </div>
              </div>

              <button
                className={`w-full rounded-xl px-6 py-3 font-semibold transition-all ${
                  plan.popular
                    ? "bg-green-400 text-black hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
                    : "border border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
                }`}
              >
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
