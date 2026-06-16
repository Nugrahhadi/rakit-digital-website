"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, Code, Layout, Rocket } from "lucide-react";
import { Magnetic } from "./Navbar";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const floatAnimation = (delay: number) => ({
    animate: {
      y: [0, -15, 0],
      rotate: [0, 360],
    },
    transition: {
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
        delay,
      },
      rotate: {
        duration: 25,
        repeat: Infinity,
        ease: "linear" as const,
        delay,
      },
    },
  });

  // Reusable Collage Component (Static, Pure Tailwind-driven interactions)
  const Collage = ({ isMobile = false }: { isMobile?: boolean }) => (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
          }
        }
      }}
      className={`relative flex items-center justify-center ${isMobile
        ? "w-full min-h-[380px] my-6"
        : "lg:col-span-5 min-h-[500px] md:min-h-[600px] lg:-ml-12 lg:-translate-x-6"
        }`}
    >
      {/* Card 1: Main Large Image Card */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8, rotate: -8 },
          visible: { opacity: 1, scale: 1, rotate: -4 }
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="relative z-25 hover:z-50 w-56 h-72 md:w-80 md:h-100 rounded-[2.5rem] bg-gradient-to-tr from-primary to-accent-blue p-1.5 shadow-2xl overflow-hidden cursor-default hover:rotate-[2deg] transition-all duration-300 md:-translate-x-24 -translate-x-12"
      >
        <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-cream">
          <Image
            src="/images/hero-agency.png"
            alt="Rakit Digital Studio Workspace"
            fill
            priority
            className="object-cover"
            sizes="(max-w-768px) 250px, 400px"
          />
        </div>
        <span className="absolute top-4 left-4 z-30 bg-primary text-cream font-black text-[9px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
          Creative Hub
        </span>
      </motion.div>

      {/* Card 2: Top-Right Secondary Image Card */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.7, x: 40, y: -40, rotate: 15 },
          visible: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 6 }
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="absolute -top-4 right-2 md:-right-8 z-10 hover:z-50 w-36 h-48 md:w-52 md:h-64 rounded-[2rem] bg-gradient-to-tr from-accent-blue to-primary p-1.5 shadow-xl overflow-hidden cursor-default hover:rotate-[-9deg] transition-all duration-300 md:-translate-x-24"
      >
        <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-cream">
          <Image
            src="/images/hero-agency-2.png"
            alt="System Details UI"
            fill
            className="object-cover"
            sizes="(max-w-768px) 150px, 250px"
          />
        </div>
      </motion.div>

      {/* Card 3: Bottom-Right Tertiary Image Card */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.6, x: 40, y: 40, rotate: -15 },
          visible: { opacity: 1, scale: 1, x: 0, y: 0, rotate: -8 }
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="absolute -bottom-6 right-2 md:-right-4 z-20 hover:z-50 w-36 h-36 md:w-52 md:h-52 rounded-[1.8rem] bg-gradient-to-tr from-vibrant-orange to-amber-500 p-1.5 shadow-2xl overflow-hidden cursor-default hover:rotate-[12deg] transition-all duration-300 md:-translate-x-18 -translate-x-8"
      >
        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-cream">
          <Image
            src="/images/hero-agency-3.png"
            alt="Application Code Blueprint"
            fill
            className="object-cover"
            sizes="(max-w-768px) 150px, 250px"
          />
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen pt-28 pb-20 px-6 flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-accent-blue/10 blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-vibrant-orange/10 blur-3xl" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        {/* Shape 1: Orange Cube */}
        <motion.div
          {...floatAnimation(0)}
          className="absolute top-40 left-[80%] md:left-[80%] w-10 h-10 bg-vibrant-orange rounded-xl shadow-lg border border-vibrant-orange/20 flex items-center justify-center text-cream"
        >
          <Rocket className="w-5 h-5" />
        </motion.div>

        {/* Shape 2: Accent Blue Torus */}
        <motion.div
          {...floatAnimation(1.5)}
          className="hidden lg:flex absolute bottom-50 left-[60%] w-10 h-10 border-4 border-accent-blue rounded-full shadow-lg items-center justify-center"
        >
          <Code className="w-5 h-5 text-accent-blue" />
        </motion.div>

        {/* Shape 3: Tiny orange dot */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden lg:block absolute bottom-32 right-[20%] w-3.5 h-3.5 bg-vibrant-orange rounded-full"
        />
      </div>

      <div className="w-full max-w-6xl z-20">

        {/* 1. DESKTOP VIEW LAYOUT */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-full w-fit font-semibold text-xs md:text-sm"
            >
              <Sparkles className="w-4 h-4 text-vibrant-orange animate-pulse" />
              <span>Digital Production Agency</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-primary"
            >
              We <span className="bg-gradient-to-r from-vibrant-orange to-accent-blue bg-clip-text text-transparent">Rakit</span> Your <br />
              Digital Dreams Into <br />
              <span className="underline decoration-vibrant-orange decoration-wavy decoration-3 underline-offset-8">Premium Systems</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-primary/80 max-w-lg leading-relaxed font-medium"
            >
              Rakit Digital is an attractive, cheerful, and highly capable digital production studio. We assemble code, design, and user experience to build premium digital assets.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-2">
              <Magnetic>
                <a
                  href="#portfolio"
                  className="group flex items-center gap-2 bg-vibrant-orange hover:bg-primary text-cream px-7 py-3.5 rounded-full font-extrabold text-base transition-colors duration-300 shadow-md shadow-vibrant-orange/20"
                >
                  <span>View Showcase</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>

              <a
                href="#services"
                className="group flex items-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary border border-primary/10 px-6 py-3.5 rounded-full font-bold text-base transition-colors duration-300"
              >
                <span>Our Services</span>
              </a>
            </motion.div>

            {/* Social Proof / Metrics */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 mt-6 pt-6 border-t border-primary/10"
            >
              <div>
                <p className="text-3xl font-black text-primary">50+</p>
                <p className="text-xs md:text-sm font-semibold text-primary/60">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl font-black text-primary">99%</p>
                <p className="text-xs md:text-sm font-semibold text-primary/60">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-black text-primary">24/7</p>
                <p className="text-xs md:text-sm font-semibold text-primary/60">Support & Care</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Collage Column */}
          <Collage />
        </div>

        {/* 2. MOBILE VIEW LAYOUT (Strict Element Order) */}
        <div className="flex flex-col lg:hidden gap-6 text-left">

          {/* Headline (Order 1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 text-primary border border-primary/10 rounded-full w-fit font-semibold text-xs">
              <Sparkles className="w-3.5 h-3.5 text-vibrant-orange animate-pulse" />
              <span>Digital Production Agency</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-primary">
              We <span className="bg-gradient-to-r from-vibrant-orange to-accent-blue bg-clip-text text-transparent">Rakit</span> Your <br />
              Digital Dreams Into <br />
              <span className="underline decoration-vibrant-orange decoration-wavy decoration-3 underline-offset-6">Premium Systems</span>
            </h1>
          </motion.div>

          {/* Collage (Order 2) */}
          <Collage isMobile />

          {/* Paragraph (Order 3) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-base text-primary/80 font-medium leading-relaxed mt-2"
          >
            Rakit Digital is an attractive, cheerful, and highly capable digital production studio. We assemble code, design, and user experience to build premium digital assets.
          </motion.p>

          {/* Buttons (Order 4) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 mt-1"
          >
            <a
              href="#portfolio"
              className="group flex items-center gap-2 bg-vibrant-orange hover:bg-primary text-cream px-5 py-3 rounded-full font-extrabold text-sm transition-colors duration-300 shadow-md shadow-vibrant-orange/10"
            >
              <span>View Showcase</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#services"
              className="group flex items-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary border border-primary/10 px-5 py-3 rounded-full font-bold text-sm transition-colors duration-300"
            >
              <span>Our Services</span>
            </a>
          </motion.div>

          {/* Metrics (Order 5) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-primary/10"
          >
            <div>
              <p className="text-2xl font-black text-primary">50+</p>
              <p className="text-[10px] font-semibold text-primary/60 mt-0.5">Projects Built</p>
            </div>
            <div>
              <p className="text-2xl font-black text-primary">99%</p>
              <p className="text-[10px] font-semibold text-primary/60 mt-0.5">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl font-black text-primary">24/7</p>
              <p className="text-[10px] font-semibold text-primary/60 mt-0.5">Support & Care</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
