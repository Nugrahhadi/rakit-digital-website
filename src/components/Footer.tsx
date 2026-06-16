"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-cream pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-[20%] right-[-10%] w-72 h-72 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 rounded-full bg-vibrant-orange/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">

          {/* Column 1: Brand & Slogan */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <a href="#" className="flex items-center">
              <Image
                src="/images/rakit-white-logo.webp"
                alt="Rakit Digital Logo"
                width={140}
                height={35}
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-xs md:text-sm text-cream/70 font-semibold leading-relaxed max-w-sm">
              An attractive, cheerful, and highly capable digital production agency. We assemble premium websites, mobile applications, and custom inventory solutions.
            </p>
            <div className="text-xs text-cream/40 font-bold mt-2">
              <p>Serang, Banten</p>
              <p className="mt-0.5">Indonesia</p>
            </div>
          </div>

          {/* Column 2: Services Sitemap */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-extrabold text-xs text-vibrant-orange uppercase tracking-wider">Services</h4>
            <div className="flex flex-col gap-2.5 text-xs md:text-sm font-semibold text-cream/70">
              <a href="#services" className="hover:text-vibrant-orange transition-colors">Company Profiles</a>
              <a href="#services" className="hover:text-vibrant-orange transition-colors">LMS training</a>
              <a href="#services" className="hover:text-vibrant-orange transition-colors">Web Applications</a>
              <a href="#services" className="hover:text-vibrant-orange transition-colors">Commerce Booking</a>
            </div>
          </div>

          {/* Column 3: Legal & Resource Sitemap */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-extrabold text-xs text-vibrant-orange uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-2.5 text-xs md:text-sm font-semibold text-cream/70">
              <a href="#portfolio" className="hover:text-vibrant-orange transition-colors">Our Works</a>
              <a href="#pricing" className="hover:text-vibrant-orange transition-colors">Pricing Plans</a>
              <a href="#testimonials" className="hover:text-vibrant-orange transition-colors">Client Reviews</a>
              <a href="#" className="hover:text-vibrant-orange transition-colors flex items-center gap-1">
                Careers <span className="bg-vibrant-orange/15 text-vibrant-orange text-[9px] px-1.5 py-0.5 rounded font-black">Hiring</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-white/5 my-8" />

        {/* Bottom copyright footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs font-bold text-cream/40 gap-4">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Rakit Digital.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
