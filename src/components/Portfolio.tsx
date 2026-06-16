"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Monitor, Cpu, X } from "lucide-react";

export type ProjectCategory = "Website" | "Custom System";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  tags: string[];
  imagePath: string;
  gallery: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Jannor Coffee",
    category: "Website",
    description: "High-conversion premium corporate web application built for Jannor.",
    longDescription: "Jannor is a premium single-page web app and conversion-optimized landing page designed with fluid responsiveness, modern storytelling structure, and micro-interactions that showcase corporate brand presence elegantly.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    imagePath: "/images/Portfolio/Jannor/jannor1.webp",
    gallery: [
      "/images/Portfolio/Jannor/jannor1.webp",
      "/images/Portfolio/Jannor/jannor2.webp",
      "/images/Portfolio/Jannor/jannor3.webp",
      "/images/Portfolio/Jannor/jannor4.webp",
      "/images/Portfolio/Jannor/jannor5.webp",
      "/images/Portfolio/Jannor/admin-jannor1.webp",
      "/images/Portfolio/Jannor/admin-jannor2.webp",
      "/images/Portfolio/Jannor/admin-jannor3.webp",
    ]
  },
  {
    id: 2,
    title: "Guru-Guru Coffee",
    category: "Website",
    description: "Interactive educational website providing digital class administration and management.",
    longDescription: "Guru-Guru is a complete administrative and educational portal designed to streamline digital class management, assignment workflows, and grades tracking. It features an interactive student dashboard and an automated payroll module for staff.",
    tags: ["React", "PostgreSQL", "TailwindCSS"],
    imagePath: "/images/Portfolio/Guru-Guru/guru1.webp",
    gallery: [
      "/images/Portfolio/Guru-Guru/guru1.webp",
      "/images/Portfolio/Guru-Guru/guru2.webp",
      "/images/Portfolio/Guru-Guru/guru3.webp",
      "/images/Portfolio/Guru-Guru/guru4.webp",
      "/images/Portfolio/Guru-Guru/guru5.webp",
      "/images/Portfolio/Guru-Guru/guru6.webp",
      "/images/Portfolio/Guru-Guru/admin-guru1.webp",
      "/images/Portfolio/Guru-Guru/admin-guru2.webp",
      "/images/Portfolio/Guru-Guru/admin-guru3.webp",
    ]
  },
  {
    id: 3,
    title: "Archipelago Corporate Site",
    category: "Website",
    description: "Minimalist brand representation site presenting travel and heritage locations.",
    longDescription: "Archipelago is a highly interactive, minimalist brand website showcasing travel destinations, local cultural heritages, and customizable booking systems. Implemented with smooth parallax scrolling and deep animation structures.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    imagePath: "/images/Portfolio/Archipelago/archipelago.webp",
    gallery: [
      "/images/Portfolio/Archipelago/archipelago.webp"
    ]
  },
  {
    id: 4,
    title: "Ricocapital: Crypto Education",
    category: "Custom System",
    description: "Interactive custom dashboard and database suite built for capital analytics.",
    longDescription: "Ricocapital is an advanced asset management dashboard and analytics platform. It provides clients with real-time portfolio visualization, historical growth projections, and transaction history.",
    tags: ["Next.js", "Redis", "TypeScript"],
    imagePath: "/images/Portfolio/Ricocapital/Ricocapital.webp",
    gallery: [
      "/images/Portfolio/Ricocapital/Ricocapital.webp",
      "/images/Portfolio/Ricocapital/ricocapital(2).webp",
      "/images/Portfolio/Ricocapital/ricocapital(3).webp",
      "/images/Portfolio/Ricocapital/ricocapital(4).webp",
      "/images/Portfolio/Ricocapital/ricocapital(5).webp",
      "/images/Portfolio/Ricocapital/ricocapital-admin.webp",
      "/images/Portfolio/Ricocapital/ricocapital-admin(1).webp",
      "/images/Portfolio/Ricocapital/ricocapital-admin(2).webp",
      "/images/Portfolio/Ricocapital/ricocapital-member.webp",
      "/images/Portfolio/Ricocapital/ricocapital-member(1).webp",
    ]
  },
  {
    id: 5,
    title: "Toko-Pinjam Platform",
    category: "Custom System",
    description: "Enterprise inventory asset booking scheduler with integrated calendar widget.",
    longDescription: "Toko-Pinjam is an enterprise-grade equipment booking and reservation scheduler. It integrates automated stock availability checks, reservation logs, and a dynamic calendar interface.",
    tags: ["React", "Node.js", "GraphQL"],
    imagePath: "/images/Portfolio/Toko-Pinjam/tokopinjam.webp",
    gallery: [
      "/images/Portfolio/Toko-Pinjam/tokopinjam.webp",
      "/images/Portfolio/Toko-Pinjam/tokopinjam(1).webp",
      "/images/Portfolio/Toko-Pinjam/tokopinjam(2).webp"
    ]
  },
  {
    id: 6,
    title: "Smart Parking Control System",
    category: "Custom System",
    description: "Real-time IoT parking monitoring and ticketing custom system.",
    longDescription: "Smart Parking is a comprehensive dashboard control system that connects directly with IoT devices. It renders real-time parking spot occupancy, sensor diagnostic charts, and gate access logs.",
    tags: ["Vue 3", "TailwindCSS", "ChartJS"],
    imagePath: "/images/Portfolio/Smart-Parking/SPS-admin1.webp",
    gallery: [
      "/images/Portfolio/Smart-Parking/SPS-admin1.webp",
      "/images/Portfolio/Smart-Parking/SPS-admin2.webp",
      "/images/Portfolio/Smart-Parking/SPS-admin3.webp"
    ]
  },
];

type CategoryFilter = "All" | ProjectCategory;

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  const categories: CategoryFilter[] = ["All", "Website", "Custom System"];

  const filteredProjects = projectsData.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImage(project.gallery[0] || project.imagePath);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-extrabold tracking-widest text-rakit-blue uppercase mb-2">
              PORTFOLIO SHOWCASE
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-rakit-dark leading-tight">
              Selected projects built with <span className="text-rakit-orange">precision</span>.
            </h3>
          </div>

          {/* Filtering Toggles with Sliding Pill */}
          <div className="flex flex-wrap bg-rakit-dark/5 p-1.5 rounded-2xl border border-rakit-dark/10 self-start md:self-auto">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-black transition-colors duration-300 ${isActive ? "text-rakit-cream" : "text-rakit-dark/45 hover:text-rakit-dark"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-portfolio-tab"
                      className="absolute inset-0 bg-rakit-orange rounded-xl shadow-md"
                      transition={{ type: "spring", stiffness: 150, damping: 18 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                key={project.id}
                onClick={() => handleOpenModal(project)}
                className="group bg-white border border-rakit-dark/10 rounded-3xl p-6 flex flex-col justify-between h-[420px] shadow-sm hover:shadow-xl hover:border-rakit-orange/20 transition-all duration-300 cursor-pointer"
              >
                {/* Project Image Preview */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-rakit-cream to-rakit-dark/5 border border-rakit-dark/5">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-black text-rakit-dark shadow-sm border border-rakit-dark/5 flex items-center gap-1 z-10">
                    {project.category === "Website" ? (
                      <Monitor className="w-3 h-3 text-rakit-blue" />
                    ) : (
                      <Cpu className="w-3 h-3 text-emerald-500" />
                    )}
                    {project.category}
                  </span>
                </div>

                {/* Content details */}
                <div className="flex flex-col gap-2 mt-4">
                  <h4 className="font-extrabold text-lg text-rakit-dark flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-rakit-dark/30 group-hover:text-rakit-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h4>
                  <p className="text-xs text-rakit-dark/70 font-semibold leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tag badges */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-rakit-dark/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-rakit-dark/5 px-2.5 py-1 rounded-lg text-[10px] font-bold text-rakit-dark/80 border border-rakit-dark/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 bg-rakit-dark/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto no-scrollbar"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="bg-white rounded-[2.5rem] border border-rakit-dark/10 max-w-5xl w-full max-h-[90vh] md:max-h-[85vh] overflow-y-auto no-scrollbar p-6 md:p-10 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full border border-rakit-dark/10 flex items-center justify-center text-rakit-dark bg-white hover:bg-rakit-dark hover:text-rakit-cream transition-all duration-300 z-50 shadow-sm"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col gap-6">
                {/* Big Image Section */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-rakit-cream border border-rakit-dark/5 shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeImage}
                        alt="Project detail image"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 85vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Thumbnails Showcase */}
                {selectedProject.gallery.length > 0 && (
                  <div className="flex justify-start md:justify-center gap-3 overflow-x-auto py-2 px-4 no-scrollbar">
                    {selectedProject.gallery.map((imgUrl) => {
                      const isSelected = activeImage === imgUrl;
                      return (
                        <button
                          key={imgUrl}
                          onClick={() => setActiveImage(imgUrl)}
                          className={`relative w-20 h-14 md:w-24 md:h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${isSelected ? "border-rakit-orange scale-95 shadow-md" : "border-transparent hover:border-rakit-blue/50"
                            }`}
                        >
                          <Image
                            src={imgUrl}
                            alt="Project thumbnail"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 80px, 96px"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Project Details Section */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mt-4 pt-6 border-t border-rakit-dark/5">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black text-rakit-blue bg-rakit-blue/10 uppercase tracking-wider">
                        {selectedProject.category === "Website" ? (
                          <Monitor className="w-3.5 h-3.5" />
                        ) : (
                          <Cpu className="w-3.5 h-3.5" />
                        )}
                        {selectedProject.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-rakit-dark leading-tight tracking-tight mb-4">
                      {selectedProject.title}
                    </h3>

                    <p className="text-sm md:text-base text-rakit-dark/75 font-semibold mb-2">
                      System Overview
                    </p>
                    <p className="text-sm text-rakit-dark/70 leading-relaxed font-medium">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="md:w-1/3 flex flex-col justify-start">
                    <div>
                      <p className="text-[11px] font-extrabold text-rakit-dark/40 uppercase tracking-widest mb-3">
                        Technologies Assembled
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-rakit-dark/5 px-3 py-1.5 rounded-xl text-xs font-bold text-rakit-dark/80 border border-rakit-dark/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
