"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { translations } from "../utils/translations";

interface MagneticProps {
  children: React.ReactNode;
}

export function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Pull factor
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

const IndonesiaFlag = () => (
  <svg className="w-5 h-5 rounded-full overflow-hidden shadow-sm border border-black/10" viewBox="0 0 3 2">
    <rect width="3" height="1" fill="#E21C21" />
    <rect y="1" width="3" height="1" fill="#FFFFFF" />
  </svg>
);

const UKFlag = () => (
  <svg className="w-5 h-5 rounded-full overflow-hidden shadow-sm border border-black/10" viewBox="0 0 50 30">
    <clipPath id="uk-clip">
      <path d="M0,0 v30 h50 v-30 z"/>
    </clipPath>
    <g clipPath="url(#uk-clip)">
      <path d="M0,0 L50,30 M0,30 L50,0" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L50,30 M0,30 L50,0" stroke="#c8102e" strokeWidth="4"/>
      <path d="M25,0 v30 M0,15 h50" stroke="#fff" strokeWidth="10"/>
      <path d="M25,0 v30 M0,15 h50" stroke="#c8102e" strokeWidth="6"/>
    </g>
  </svg>
);

interface NavbarProps {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations.navbar;

  const navLinks = [
    { name: t.services[lang], href: "#services" },
    { name: t.portfolio[lang], href: "#portfolio" },
    { name: t.pricing[lang], href: "#pricing" },
    { name: t.testimonials[lang], href: "#testimonials" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
          scrolled ? "top-2" : "top-4"
        }`}
      >
        <nav className="w-full max-w-6xl glassmorphism rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-primary/5">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/rakit-logo.webp"
              alt="Rakit Digital Logo"
              width={140}
              height={35}
              priority
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-sm text-primary/80 hover:text-vibrant-orange transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-vibrant-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Actions (Toggle & CTA) */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language Toggle (Premium Flag Switch) */}
            <div className="relative flex items-center bg-primary/5 p-1 rounded-full border border-primary/10 w-[72px] h-9">
              {/* Sliding Background */}
              <motion.div
                className="absolute top-[3px] bottom-[3px] left-[3px] bg-primary rounded-full w-[30px]"
                animate={{
                  x: lang === "id" ? 0 : 34,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
              />

              {/* ID Flag Button */}
              <button
                onClick={() => setLang("id")}
                className="relative z-10 w-[30px] h-[30px] flex items-center justify-center cursor-pointer focus:outline-none"
                aria-label="Bahasa Indonesia"
              >
                <div className={`transition-all duration-300 ${lang === "id" ? "scale-100 opacity-100" : "scale-90 opacity-40 hover:opacity-75"}`}>
                  <IndonesiaFlag />
                </div>
              </button>

              {/* EN Flag Button */}
              <button
                onClick={() => setLang("en")}
                className="relative z-10 w-[30px] h-[30px] flex items-center justify-center cursor-pointer focus:outline-none ml-auto"
                aria-label="English"
              >
                <div className={`transition-all duration-300 ${lang === "en" ? "scale-100 opacity-100" : "scale-90 opacity-40 hover:opacity-75"}`}>
                  <UKFlag />
                </div>
              </button>
            </div>

            {/* CTA Button (Magnetic) */}
            <Magnetic>
              <a
                href="#contact"
                className="group relative flex items-center gap-1.5 bg-primary text-cream hover:bg-accent-blue px-5 py-2.5 rounded-full font-bold text-sm overflow-hidden shadow-md transition-colors duration-300"
              >
                <span className="relative z-10">{t.cta[lang]}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-accent-blue to-vibrant-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:text-vibrant-orange transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden glassmorphism-dark rounded-3xl p-6 shadow-2xl flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-bold text-lg text-cream hover:text-vibrant-orange transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Mobile Language Toggle */}
            <div className="relative flex items-center bg-white/10 p-1 rounded-full border border-white/20 w-[72px] h-9 self-center">
              {/* Sliding Background */}
              <motion.div
                className="absolute top-[3px] bottom-[3px] left-[3px] bg-cream rounded-full w-[30px]"
                animate={{
                  x: lang === "id" ? 0 : 34,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 22 }}
              />

              {/* ID Flag Button */}
              <button
                onClick={() => setLang("id")}
                className="relative z-10 w-[30px] h-[30px] flex items-center justify-center cursor-pointer focus:outline-none"
                aria-label="Bahasa Indonesia"
              >
                <div className={`transition-all duration-300 ${lang === "id" ? "scale-100 opacity-100" : "scale-90 opacity-40 hover:opacity-75"}`}>
                  <IndonesiaFlag />
                </div>
              </button>

              {/* EN Flag Button */}
              <button
                onClick={() => setLang("en")}
                className="relative z-10 w-[30px] h-[30px] flex items-center justify-center cursor-pointer focus:outline-none ml-auto"
                aria-label="English"
              >
                <div className={`transition-all duration-300 ${lang === "en" ? "scale-100 opacity-100" : "scale-90 opacity-40 hover:opacity-75"}`}>
                  <UKFlag />
                </div>
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-vibrant-orange text-cream hover:bg-cream hover:text-primary px-6 py-3 rounded-full font-bold text-base shadow-md transition-colors duration-300"
            >
              <span>{t.cta[lang]}</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
