"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { Magnetic } from "./Navbar";
import { translations } from "../utils/translations";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

function getSmePlans(lang: "id" | "en"): Plan[] {
  const tp = translations.pricing.smePlans;
  return [
    {
      name: "Starter",
      price: "Rp 1.5 jt",
      description: tp.starter.description[lang],
      features: tp.starter.features.map(f => f[lang]),
      isPopular: false,
      ctaText: tp.starter.ctaText[lang],
    },
    {
      name: "Growth",
      price: "Rp 2 jt",
      description: tp.growth.description[lang],
      features: tp.growth.features.map(f => f[lang]),
      isPopular: true,
      ctaText: tp.growth.ctaText[lang],
    },
    {
      name: "Expert",
      price: "Rp 3.5 jt",
      description: tp.expert.description[lang],
      features: tp.expert.features.map(f => f[lang]),
      isPopular: false,
      ctaText: tp.expert.ctaText[lang],
    }
  ];
}

function getEnterprisePlans(lang: "id" | "en"): Plan[] {
  const tp = translations.pricing.enterprisePlans;
  return [
    {
      name: "Starter (MVP)",
      price: "Rp 5 jt",
      description: tp.starter.description[lang],
      features: tp.starter.features.map(f => f[lang]),
      isPopular: false,
      ctaText: tp.starter.ctaText[lang],
    },
    {
      name: "Enterprise Core",
      price: "Rp 8 jt",
      description: tp.core.description[lang],
      features: tp.core.features.map(f => f[lang]),
      isPopular: true,
      ctaText: tp.core.ctaText[lang],
    },
    {
      name: "Bespoke Scale",
      price: "Rp 13 jt",
      description: tp.scale.description[lang],
      features: tp.scale.features.map(f => f[lang]),
      isPopular: false,
      ctaText: tp.scale.ctaText[lang],
    },
  ];
}

interface PricingProps {
  lang: "id" | "en";
}

export default function Pricing({ lang }: PricingProps) {
  const t = translations.pricing;
  const [tier, setTier] = useState<"SME" | "Enterprise">("SME");

  const plans = tier === "SME" ? getSmePlans(lang) : getEnterprisePlans(lang);

  return (
    <section id="pricing" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute bottom-[20%] left-[-10%] w-72 h-72 rounded-full bg-vibrant-orange/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-extrabold tracking-widest text-accent-blue uppercase mb-2">
            {t.label[lang]}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary leading-tight">
            {lang === "id" ? (
              <>
                Paket fleksibel yang dirancang <br className="hidden md:block" /> untuk skala <span className="text-vibrant-orange">{t.titleHighlight[lang]}</span>.
              </>
            ) : (
              <>
                {t.title[lang]}<span className="text-vibrant-orange">{t.titleHighlight[lang]}</span>.
              </>
            )}
          </h3>
          <p className="text-primary/70 mt-4 font-semibold">
            {t.description[lang]}
          </p>

          {/* Pricing Toggle Switch */}
          <div className="inline-flex bg-primary/5 p-1.5 rounded-2xl border border-primary/5 mt-8">
            <button
              onClick={() => setTier("SME")}
              className={`relative px-6 py-3 rounded-xl text-sm font-black transition-colors duration-300 ${tier === "SME" ? "text-cream" : "text-primary/70 hover:text-primary"
                }`}
            >
              {tier === "SME" && (
                <motion.span
                  layoutId="pricing-active-pill"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                />
              )}
              <span className="relative z-10">{t.toggles.sme[lang]}</span>
            </button>
            <button
              onClick={() => setTier("Enterprise")}
              className={`relative px-6 py-3 rounded-xl text-sm font-black transition-colors duration-300 ${tier === "Enterprise" ? "text-cream" : "text-primary/70 hover:text-primary"
                }`}
            >
              {tier === "Enterprise" && (
                <motion.span
                  layoutId="pricing-active-pill"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                />
              )}
              <span className="relative z-10">{t.toggles.enterprise[lang]}</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const isPopular = plan.isPopular;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${isPopular
                    ? "bg-vibrant-orange text-cream shadow-2xl scale-[1.03] border-2 border-vibrant-orange z-10"
                    : "bg-white text-primary border border-primary/10 hover:border-vibrant-orange/30 shadow-md"
                  }`}
              >
                {/* Popular Floating Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-cream px-4 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-md border border-white/10 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-vibrant-orange animate-spin" />
                    {t.popular[lang]}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-extrabold text-xl">{plan.name}</h4>
                  </div>

                  {tier === "Enterprise" && (
                    <div className={`text-[10px] font-extrabold uppercase tracking-widest mb-1 ${isPopular ? "text-cream/75" : "text-primary/40"}`}>
                      {lang === "id" ? "Mulai dari" : "Start from"}
                    </div>
                  )}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
                    {tier !== "Enterprise" && (
                      <span className={`text-xs font-bold ${isPopular ? "text-cream/75" : "text-primary/50"}`}>
                        {t.period[lang]}
                      </span>
                    )}
                  </div>

                  <p className={`text-xs font-semibold leading-relaxed mb-6 ${isPopular ? "text-cream/80" : "text-primary/70"}`}>
                    {plan.description}
                  </p>

                  <div className={`h-px w-full my-6 ${isPopular ? "bg-cream/10" : "bg-primary/5"}`} />

                  {/* Feature Check List */}
                  <ul className="flex flex-col gap-3 text-xs md:text-sm font-semibold">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className={`p-0.5 rounded-full mt-0.5 ${isPopular ? "bg-cream/10 text-cream" : "bg-primary/5 text-accent-blue"}`}>
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-current/10 flex justify-center">
                  <Magnetic>
                    <a
                      href="https://wa.me/6289502377274"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-fit px-8 py-3.5 rounded-full font-black text-sm transition-colors duration-300 shadow-md ${isPopular
                          ? "bg-primary text-cream hover:bg-cream hover:text-primary shadow-primary/20"
                          : "bg-vibrant-orange text-cream hover:bg-primary shadow-vibrant-orange/10"
                        }`}
                    >
                      {plan.ctaText}
                    </a>
                  </Magnetic>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info footer */}
        <div className="flex items-center justify-center gap-2 mt-12 text-xs font-bold text-primary/50">
          <AlertCircle className="w-4 h-4 text-accent-blue" />
          <span>{t.info[lang]}</span>
        </div>
      </div>
    </section>
  );
}
