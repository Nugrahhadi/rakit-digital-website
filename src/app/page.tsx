"use client";

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
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <BentoGrid />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </motion.div>
  );
}
