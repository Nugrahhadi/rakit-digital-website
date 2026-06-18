"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Monitor, Cpu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { translations } from "../utils/translations";

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

export function getProjectsData(lang: "id" | "en"): Project[] {
  const t = translations.portfolio.projects;
  return [
    {
      id: 1,
      title: "Jannor Coffee",
      category: "Website",
      description: t.jannor.description[lang],
      longDescription: t.jannor.longDescription[lang],
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
      description: t.guru.description[lang],
      longDescription: t.guru.longDescription[lang],
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
      description: t.archipelago.description[lang],
      longDescription: t.archipelago.longDescription[lang],
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
      description: t.rico.description[lang],
      longDescription: t.rico.longDescription[lang],
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
      description: t.tokopinjam.description[lang],
      longDescription: t.tokopinjam.longDescription[lang],
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
      description: t.smartparking.description[lang],
      longDescription: t.smartparking.longDescription[lang],
      tags: ["Vue 3", "TailwindCSS", "ChartJS"],
      imagePath: "/images/Portfolio/Smart-Parking/SPS-admin1.webp",
      gallery: [
        "/images/Portfolio/Smart-Parking/SPS-admin1.webp",
        "/images/Portfolio/Smart-Parking/SPS-admin2.webp",
        "/images/Portfolio/Smart-Parking/SPS-admin3.webp"
      ]
    },
    {
      id: 7,
      title: "ASR Creative House",
      category: "Website",
      description: t.asr.description[lang],
      longDescription: t.asr.longDescription[lang],
      tags: ["Next.js", "TailwindCSS", "Framer Motion"],
      imagePath: "/images/Portfolio/ASR/asr1.webp",
      gallery: [
        "/images/Portfolio/ASR/asr1.webp",
        "/images/Portfolio/ASR/asr2.webp",
        "/images/Portfolio/ASR/asr3.webp",
        "/images/Portfolio/ASR/asr4.webp",
        "/images/Portfolio/ASR/asr5.webp",
        "/images/Portfolio/ASR/asr6.webp",
        "/images/Portfolio/ASR/asr7.webp",
        "/images/Portfolio/ASR/asr8.webp",
      ]
    },
  ];
}

type CategoryFilter = "All" | ProjectCategory;

interface PortfolioProps {
  lang: "id" | "en";
}

export default function Portfolio({ lang }: PortfolioProps) {
  const t = translations.portfolio;
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories: CategoryFilter[] = ["All", "Website", "Custom System"];

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const projects = getProjectsData(lang);

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const projectsData = getProjectsData(lang);
  const selectedProject = selectedProjectId !== null ? projectsData.find(p => p.id === selectedProjectId) || null : null;

  const handleOpenModal = (project: Project) => {
    setSelectedProjectId(project.id);
    setActiveImage(project.gallery[0] || project.imagePath);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProjectId(null);
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
              {t.label[lang]}
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-rakit-dark leading-tight">
              {t.headingPre[lang]}<span className="text-rakit-orange">{t.headingHighlight[lang]}</span>{t.headingPost[lang]}
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
                  <span className="relative z-10">{t.filters[category as keyof typeof t.filters][lang]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-rakit-dark/10 flex items-center justify-center text-rakit-dark bg-white hover:bg-rakit-dark hover:text-rakit-cream transition-all duration-300 shadow-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-rakit-dark"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5 bg-rakit-dark/5 p-1 rounded-full border border-rakit-dark/10">
              {Array.from({ length: totalPages }, (_, i) => {
                const pageNum = i + 1;
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`relative w-8 h-8 rounded-full text-xs font-black transition-colors duration-300 cursor-pointer ${
                      isActive ? "text-rakit-cream" : "text-rakit-dark/45 hover:text-rakit-dark"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-page-tab"
                        className="absolute inset-0 bg-rakit-orange rounded-full shadow-sm"
                        transition={{ type: "spring", stiffness: 150, damping: 18 }}
                      />
                    )}
                    <span className="relative z-10">{pageNum}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-rakit-dark/10 flex items-center justify-center text-rakit-dark bg-white hover:bg-rakit-dark hover:text-rakit-cream transition-all duration-300 shadow-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-rakit-dark"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Interactive Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 bg-rakit-dark/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto no-scrollbar"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProjectId(null);
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
                onClick={() => setSelectedProjectId(null)}
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
