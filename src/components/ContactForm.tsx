"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, ChevronDown, MessageSquare } from "lucide-react";
import { Magnetic } from "./Navbar";
import { translations } from "../utils/translations";

interface FAQItem {
  question: string;
  answer: string;
}

function getFaqData(lang: "id" | "en"): FAQItem[] {
  return translations.contact.faqs.map(faq => ({
    question: faq.question[lang],
    answer: faq.answer[lang]
  }));
}

// Custom WhatsApp SVG Icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.99 11.443.99c-5.442 0-9.866 4.372-9.87 9.802 0 1.764.5 3.483 1.447 5.014L2.022 21.98l6.215-1.627zM18.17 14.86c-.338-.168-1.998-.974-2.308-1.086-.31-.112-.536-.168-.762.168-.226.337-.875 1.086-1.072 1.312-.197.225-.394.253-.732.084-.338-.168-1.428-.52-2.721-1.661-1.006-.887-1.685-1.983-1.882-2.32-.197-.337-.021-.52.148-.687.153-.15.338-.393.507-.59.169-.196.226-.337.338-.561.113-.225.056-.421-.028-.59-.085-.168-.762-1.815-1.044-2.489-.276-.658-.554-.57-.762-.58-.197-.01-.423-.012-.648-.012-.226 0-.592.084-.903.421-.31.337-1.184 1.151-1.184 2.807 0 1.656 1.212 3.256 1.381 3.481.169.225 2.385 3.6 5.776 5.034 2.825 1.194 3.4 1.137 4.077.94.75-.219 2.038-.829 2.32-1.63.282-.801.282-1.488.197-1.63-.085-.14-.31-.225-.648-.393z" />
  </svg>
);

interface ContactFormProps {
  lang: "id" | "en";
}

export default function ContactForm({ lang }: ContactFormProps) {
  const t = translations.contact;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = getFaqData(lang);

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-[10%] left-[-5%] w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Coordinates & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-5 flex flex-col justify-between gap-10 bg-primary text-cream rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-vibrant-orange/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h2 className="text-sm font-extrabold tracking-widest text-vibrant-orange uppercase mb-2">
                {t.label[lang]}
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-cream leading-tight">
                {t.titlePre[lang]} <br />
                <span className="underline decoration-vibrant-orange decoration-wavy decoration-3 underline-offset-8">{t.titleHighlight[lang]}</span>?
              </h3>
              <p className="text-cream/70 mt-6 text-sm font-semibold leading-relaxed">
                {t.description[lang]}
              </p>
            </div>

            {/* Address cards: WhatsApp, Email, Location */}
            <div className="flex flex-col gap-6 text-sm font-semibold">
              <a
                href="https://wa.me/6289502377274"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-vibrant-orange group-hover:bg-vibrant-orange group-hover:text-cream transition-colors duration-300">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-cream/40">WhatsApp</p>
                  <p className="text-sm mt-0.5">089502377274</p>
                </div>
              </a>

              <a href="mailto:rakitindigitalu@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-vibrant-orange group-hover:bg-vibrant-orange group-hover:text-cream transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-cream/40">Email</p>
                  <p className="text-sm mt-0.5">rakitindigitalu@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-vibrant-orange">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-cream/40">Location</p>
                  <p className="text-sm mt-0.5">Jalan Rakit Digital No. 10</p>
                  <p className="text-cream/50 text-[10px] mt-0.5">Serang, Banten, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-xs font-bold text-cream/40 uppercase tracking-wider mb-2">Rakit Digital Agency</p>
            </div>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-7 bg-white border border-primary/10 rounded-[2.5rem] p-8 md:p-10 shadow-md flex flex-col gap-6"
          >
            <div>
              <h4 className="font-extrabold text-lg text-accent-blue uppercase tracking-widest mb-1">{t.faqLabel[lang]}</h4>
              <p className="text-primary/60 text-xs font-semibold">{t.faqDescription[lang]}</p>
            </div>

            <div className="flex flex-col gap-4">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border-b border-primary/5 pb-4 last:border-b-0 last:pb-0"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center text-left py-2 font-bold text-sm md:text-base text-primary hover:text-vibrant-orange transition-colors"
                    >
                      <span>{faq.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        className="text-primary/40"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs md:text-sm font-semibold text-primary/70 leading-relaxed pt-2 pb-1 pr-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
