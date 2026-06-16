"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { Magnetic } from "./Navbar";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

const smePlans: Plan[] = [
  {
    name: "Starter",
    price: "Rp 1.5 jt",
    description: "Perfect for single landing pages and establishing your initial online brand presence.",
    features: [
      "1 Professional Landing Page",
      "Responsive Design (Mobile & Desktop)",
      "Call-to-Action Integration (WhatsApp / Email)",
      "Basic SEO Setup & Google Analytics Integration",
      "Speed & Performance Optimization",
      "Free Domain (.com) & Hosting (1 Year)",
      "SSL Website Security (HTTPS)",
      "Deployment",
      "Up to 2 Revisions",
    ],
    isPopular: false,
    ctaText: "Choose Starter",
  },
  {
    name: "Growth",
    price: "Rp 2 jt",
    description: "Ideal for growing businesses requiring complete structures and interactive visual touchpoints.",
    features: [
      "Up to 3 Website Pages",
      "Semi-Custom Modern Design",
      "Complete Structure (Hero, Features, Testimonial, CTA, etc.)",
      "Interactive Contact Form Integration",
      "Basic SEO Optimization & Google Analytics Setup",
      "Basic Performance Optimization",
      "Free Domain (.com) & Hosting (1 Year)",
      "Deployment",
      "Up to 3 Revisions",
    ],
    isPopular: true,
    ctaText: "Assemble Growth",
  },
  {
    name: "Expert",
    price: "Rp 3.5 jt",
    description: "For full-scale company showcases, advanced visual animations, and custom UI/UX design.",
    features: [
      "Up to 5 Website Pages",
      "1 Short Promotional Video (Max 1 Minute)",
      "100% Custom UI Design",
      "Complex Page Structure & Advanced Interactions",
      "Premium Visual Animations",
      "Advanced SEO & Analytics Integration",
      "Scalable & Clean Code Structure",
      "Free Domain (.com) & Hosting (1 Year)",
      "Deployment",
      "Up to 5 Revisions",
    ],
    isPopular: false,
    ctaText: "Scale to Expert",
  }
];

const enterprisePlans: Plan[] = [
  {
    name: "Starter (MVP)",
    price: "Rp 5 jt",
    description: "Launch your core business idea quickly with essential features and functional internal dashboards.",
    features: [
      "1 Role User (Admin)",
      "Simple Dashboard",
      "Basic CRUD Functionality",
      "Database Integration",
      "Basic Functional UI",
      "Deployment",
      "Domain .com & hosting (1 year)",
      "Up to 2 Revision",
    ],
    isPopular: false,
    ctaText: "Choose Enterprise",
  },
  {
    name: "Enterprise Core",
    price: "Rp 8 jt",
    description: "Perfect for scaling businesses needing e-commerce, multi-role LMS, or automated booking systems.",
    features: [
      "Multi-Role User",
      "Interactive Dashboard",
      "API Integration",
      "Advanced CRUD & Database Structure",
      "Improved UI/UX",
      "Basic Security Implementation",
      "Lightning-Fast AI Integration",
      "Domain .com & hosting (1 year)",
      "Up to 4 Revisions",
    ],
    isPopular: true,
    ctaText: "Assemble Bespoke",
  },
  {
    name: "Bespoke Scale",
    price: "Rp 13 jt",
    description: "Custom heavy-duty systems engineered for high traffic, complex logic, and top-tier security.",
    features: [
      "Complex System & Custom Features",
      "Optional Real-Time Feature",
      "Performance Optimization",
      "Scalable Architecture & Modular Structure",
      "Advanced Security",
      "Basic Documentation",
      "Lightning-Fast AI Integration",
      "Domain .com & hosting (1 year)",
      "Up to 7 Revisions",
    ],
    isPopular: false,
    ctaText: "Get Custom Quote",
  },
];

export default function Pricing() {
  const [tier, setTier] = useState<"SME" | "Enterprise">("SME");

  const plans = tier === "SME" ? smePlans : enterprisePlans;

  return (
    <section id="pricing" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute bottom-[20%] left-[-10%] w-72 h-72 rounded-full bg-vibrant-orange/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-extrabold tracking-widest text-accent-blue uppercase mb-2">
            PRICING SCHEME
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary leading-tight">
            Flexible packages built for your <span className="text-vibrant-orange">size</span>.
          </h3>
          <p className="text-primary/70 mt-4 font-semibold">
            Choose starter packs for quick turnarounds or robust custom enterprise engines.
          </p>

          {/* Pricing Toggle Switch */}
          <div className="inline-flex bg-primary/5 p-1.5 rounded-2xl border border-primary/5 mt-8">
            <button
              onClick={() => setTier("SME")}
              className={`relative px-6 py-3 rounded-xl text-sm font-black transition-colors duration-300 ${
                tier === "SME" ? "text-cream" : "text-primary/70 hover:text-primary"
              }`}
            >
              {tier === "SME" && (
                <motion.span
                  layoutId="pricing-active-pill"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                />
              )}
              <span className="relative z-10">SME Starter</span>
            </button>
            <button
              onClick={() => setTier("Enterprise")}
              className={`relative px-6 py-3 rounded-xl text-sm font-black transition-colors duration-300 ${
                tier === "Enterprise" ? "text-cream" : "text-primary/70 hover:text-primary"
              }`}
            >
              {tier === "Enterprise" && (
                <motion.span
                  layoutId="pricing-active-pill"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                />
              )}
              <span className="relative z-10">Enterprise Scaled</span>
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
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isPopular
                    ? "bg-vibrant-orange text-cream shadow-2xl scale-[1.03] border-2 border-vibrant-orange z-10"
                    : "bg-white text-primary border border-primary/10 hover:border-vibrant-orange/30 shadow-md"
                }`}
              >
                {/* Popular Floating Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-cream px-4 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-md border border-white/10 uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5 text-vibrant-orange animate-spin" />
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-extrabold text-xl">{plan.name}</h4>
                  </div>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
                    <span className={`text-xs font-bold ${isPopular ? "text-cream/75" : "text-primary/50"}`}>
                      / fixed cost
                    </span>
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
                      className={`block w-fit px-8 py-3.5 rounded-full font-black text-sm transition-colors duration-300 shadow-md ${
                        isPopular
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
          <span>All packages include fully hand-over source code, design assets, and dynamic Framer Motion animations.</span>
        </div>
      </div>
    </section>
  );
}
