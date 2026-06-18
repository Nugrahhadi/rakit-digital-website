"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Sparkles,
  ArrowUpRight,
  Package
} from "lucide-react";
import { translations } from "../utils/translations";

interface BentoGridProps {
  lang: "id" | "en";
}

export default function BentoGrid({ lang }: BentoGridProps) {
  const t = translations.bento;
  return (
    <section id="services" className="py-24 px-6 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[40%] right-[-10%] w-72 h-72 rounded-full bg-rakit-blue/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-extrabold tracking-widest text-rakit-blue uppercase mb-2">
            {t.label[lang]}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-rakit-dark leading-tight">
            {t.titlePre[lang]}<span className="text-rakit-orange">{t.titlePost[lang]}</span>
          </h3>
          <p className="text-rakit-dark/70 mt-4 font-semibold">
            {t.description[lang]}
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 perspective-1000">

          {/* Card 1: Company Profile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-7 bg-white border border-rakit-dark/5 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[420px] lg:h-[380px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full items-center">
              <div className="md:col-span-5 flex flex-col justify-between h-full py-2 z-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-rakit-dark flex items-center justify-center text-rakit-cream shadow-md">
                    <Sparkles className="w-6 h-6 text-rakit-orange" />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl text-rakit-dark tracking-tight">{t.cards.compro.title[lang]}</h4>
                    <p className="text-xs font-bold text-rakit-blue mt-1 uppercase tracking-wider">{t.cards.compro.subtitle[lang]}</p>
                  </div>
                  <p className="text-sm text-rakit-dark/70 font-medium leading-relaxed">
                    {t.cards.compro.description[lang]}
                  </p>
                </div>
              </div>

              {/* Angled Floating Device Mockup Showcase */}
              <div className="md:col-span-7 relative w-full h-full min-h-[200px] flex items-center justify-center">
                <div className="absolute w-[130%] h-[120%] -right-12 md:-right-24 top-6 md:top-12 rounded-2xl border-4 border-rakit-dark bg-rakit-cream shadow-2xl overflow-hidden transform rotate-[-6deg] group-hover:rotate-[-2deg] group-hover:-translate-y-3 transition-all duration-500 ease-out">
                  <div className="w-full h-4 bg-rakit-dark border-b border-rakit-dark/10 flex items-center px-2 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                  <div className="relative w-full h-[calc(100%-1rem)]">
                    <Image
                      src="/images/Portfolio/Archipelago/archipelago.webp"
                      alt="Company Profile Showcase"
                      fill
                      className="object-cover object-top"
                      sizes="(max-w-1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Learning Management System (True Seamless Bottom Anchor) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1 }}
            className="lg:col-span-5 bg-white border border-rakit-dark/5 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[450px] lg:h-[400px]"
          >
            {/* Bagian Atas: Header & Deskripsi */}
            <div className="z-10 w-full">
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-rakit-blue/10 flex items-center justify-center text-rakit-blue shadow-inner">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl text-rakit-dark tracking-tight">{t.cards.lms.title[lang]}</h4>
                    <p className="text-xs font-bold text-rakit-blue mt-0.5 uppercase tracking-wider">{t.cards.lms.subtitle[lang]}</p>
                    <p className="text-xs text-rakit-dark/75 font-semibold leading-relaxed mt-2.5">
                      {t.cards.lms.description[lang]}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-rakit-dark/10 flex items-center justify-center text-rakit-dark group-hover:bg-rakit-dark group-hover:text-rakit-cream transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Bagian Bawah: Mengunci Penuh Sisi Bawah, Kiri, dan Kanan */}
            <div className="absolute inset-x-0 bottom-0 h-48 md:h-52 overflow-visible flex items-end">

              {/* Base Canvas Preview - Menggunakan w-full dan rounded-t-xl untuk nempel mulus tanpa gap */}
              <div className="absolute w-full h-full bottom-0 bg-rakit-cream rounded-t-[1.8rem] border-t-2 border-x-2 border-rakit-dark/10 shadow-2xl overflow-hidden transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">

                {/* Container Image dipaksa mengisi ruang sisa top bar secara penuh */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/Portfolio/Ricocapital/Ricocapital.webp"
                    alt="LMS Main Interface Preview"
                    fill
                    className="object-cover object-top"
                    sizes="(max-w-1024px) 100vw, 30vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Web Application System */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
            className="lg:col-span-5 bg-white border border-rakit-dark/5 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[420px] lg:h-[380px]"
          >
            <div className="flex flex-col justify-between h-full z-10">
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-rakit-orange/10 flex items-center justify-center text-rakit-orange shadow-inner">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl text-rakit-dark tracking-tight">{t.cards.webapp.title[lang]}</h4>
                    <p className="text-xs font-bold text-rakit-orange mt-0.5 uppercase tracking-wider">{t.cards.webapp.subtitle[lang]}</p>
                    <p className="text-xs text-rakit-dark/75 font-semibold leading-relaxed mt-2.5">
                      {t.cards.webapp.description[lang]}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-rakit-dark/10 flex items-center justify-center text-rakit-dark group-hover:bg-rakit-dark group-hover:text-rakit-cream transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Isometric Sliding Dashboard Screen */}
              <div className="relative w-full h-44 mt-6 overflow-visible">
                <div className="absolute -right-4 left-4 top-4 bottom-[-40px] bg-rakit-dark rounded-t-2xl shadow-2xl transform skew-x-6 group-hover:skew-x-0 group-hover:translate-y-[-10px] transition-all duration-500 overflow-hidden border-t-4 border-x-4 border-rakit-dark">
                  <Image
                    src="/images/Portfolio/Smart-Parking/SPS-admin1.webp"
                    alt="Web App System Panel"
                    fill
                    className="object-cover object-left-top"
                    sizes="(max-w-1024px) 100vw, 30vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Commerce & Rent (True Full Left-Bottom Anchor) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
            className="lg:col-span-7 bg-white border border-rakit-dark/5 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[460px] lg:h-[380px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full items-center">

              {/* Sisi Kiri: Tempat Gambar Preview Web (Dibuat Full Amblas ke Kiri & Bawah) */}
              <div className="order-2 md:order-1 md:col-span-7 relative w-full h-full min-h-[240px] md:min-h-full overflow-visible">

                {/* Base Canvas Preview Toko-Pinjam */}
                <div className="absolute w-[108%] h-[105%] -left-8 md:-left-12 -bottom-10 bg-white rounded-tr-3xl border-t-2 border-r-2 border-rakit-dark/10 shadow-2xl overflow-hidden transform translate-y-6 group-hover:translate-y-2 group-hover:scale-[1.02] transition-all duration-500 ease-out z-10">

                  {/* Gambar Web Full Layout */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/Portfolio/Toko-Pinjam/tokopinjam.webp"
                      alt="Commerce Platform Showcase"
                      fill
                      className="object-cover object-top"
                      sizes="(max-w-1024px) 100vw, 40vw"
                      priority
                    />
                  </div>
                </div>

              </div>

              {/* Sisi Kanan: Text Content & Headline */}
              <div className="order-1 md:order-2 md:col-span-5 flex flex-col justify-between h-full py-2 z-10 md:text-right md:items-end">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-rakit-dark flex items-center justify-center text-rakit-cream shadow-md md:ml-auto">
                    <Package className="w-6 h-6 text-rakit-orange" />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl text-rakit-dark tracking-tight">{t.cards.commerce.title[lang]}</h4>
                    <p className="text-xs font-bold text-rakit-blue mt-1 uppercase tracking-wider">{t.cards.commerce.subtitle[lang]}</p>
                  </div>
                  <p className="text-sm text-rakit-dark/70 font-medium leading-relaxed">
                    {t.cards.commerce.description[lang]}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}