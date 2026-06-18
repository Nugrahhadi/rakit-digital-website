"use client";

import { useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const { scrollYProgress } = useScroll();

  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.7, 0.9, 1],
    [
      "#F6F6E9", 
      "#E1ECF4", 
      "#F5EBE6",
      "#E8F1E9", 
      "#FFFDF0", 
      "#F6F6E9", 
    ]
  );

  return (
    <motion.div
      style={{ backgroundColor: bgGradient }}
      className="min-h-full flex flex-col w-full transition-colors duration-300"
    >
      <Navbar lang={lang} setLang={setLang} />
      <main className="flex-1 flex flex-col w-full">
        <Hero lang={lang} />
        <BentoGrid lang={lang} />
        <Portfolio lang={lang} />
        <Pricing lang={lang} />
        <Testimonials lang={lang} />
        <ContactForm lang={lang} />
      </main>
      <Footer lang={lang} />
    </motion.div>
  );
}
