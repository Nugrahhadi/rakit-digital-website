"use client";

import { Star } from "lucide-react";
import { translations } from "../utils/translations";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  initials: string;
  colorClass: string;
}

function getRow1Testimonials(lang: "id" | "en"): Testimonial[] {
  const tt = translations.testimonials.reviews;
  return [
    {
      id: 1,
      name: "Rian Andrian",
      role: "Founder",
      company: "Soka Cafe",
      content: tt.rian[lang],
      rating: 5,
      initials: "RA",
      colorClass: "bg-vibrant-orange/10 text-vibrant-orange",
    },
    {
      id: 2,
      name: "Rafiif Nur Tahta Bagaskara",
      role: "Founder & CEO",
      company: "Toko Pinjam",
      content: "Tim berhasil membuat platform yang benar-benar membantu misi dan komunitas kami. Saat ini Tokopinjam telah digunakan oleh lebih dari 70 mahasiswa di Purwokerto dan membantu lebih dari 200 mahasiswa mendapatkan akses perlengkapan acara dengan lebih mudah. Platform ini juga mendapat liputan dari Kompas",
      rating: 5,
      initials: "RB",
      colorClass: "bg-accent-blue/10 text-accent-blue",
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "CEO",
      company: "RentAll",
      content: tt.budi[lang],
      rating: 5,
      initials: "BS",
      colorClass: "bg-primary/10 text-primary",
    },
    {
      id: 4,
      name: "Riko Yoananda R.",
      role: "Founder & CEO",
      company: "Ricocapital",
      content: "Website yang dibuat sangat membantu kami dalam menyampaikan materi edukasi kripto dan video pembelajaran kepada anggota. Saat ini platform telah digunakan oleh lebih dari 80 anggota, dan performa SEO yang baik membantu kami menjangkau audiens hingga ke Eropa dan Amerika Serikat.",
      rating: 5,
      initials: "RY",
      colorClass: "bg-emerald-500/10 text-emerald-600",
    },
  ];
}

function getRow2Testimonials(lang: "id" | "en"): Testimonial[] {
  const tt = translations.testimonials.reviews;
  return [
    {
      id: 5,
      name: "Eka Pratama",
      role: "Founder",
      company: "ASR Creative House",
      content: "Kami sangat puas dengan hasil website yang dibuat oleh Rakit Digital. Selain desain yang modern dan responsif, website ini membantu meningkatkan kredibilitas bisnis kami di mata calon klien. Tim Rakit Digital juga sangat responsif dalam memberikan solusi dan masukan selama proses pengembangan.",
      rating: 5,
      initials: "EP",
      colorClass: "bg-indigo-500/10 text-indigo-600",
    },
    {
      id: 6,
      name: "Sarah Croft",
      role: "COO",
      company: "GreenFood ID",
      content: tt.sarah[lang],
      rating: 5,
      initials: "SC",
      colorClass: "bg-rose-500/10 text-rose-600",
    },
    {
      id: 7,
      name: "Fadli Karim",
      role: "Tech Lead",
      company: "TokoBuku",
      content: tt.fadli[lang],
      rating: 5,
      initials: "FK",
      colorClass: "bg-amber-500/10 text-amber-600",
    },
    {
      id: 8,
      name: "Vina Aurelia",
      role: "Founder",
      company: "Lovelle Atelier",
      content: "Website yang dibuat oleh Rakit Digital sangat membantu operasional bisnis kami sehari-hari. Mulai dari pengelolaan produk, pemesanan, hingga informasi pelanggan menjadi lebih terorganisir. Selain tampil lebih profesional, website ini juga memberikan pengalaman berbelanja yang lebih nyaman bagi pelanggan kami.",
      rating: 5,
      initials: "VA",
      colorClass: "bg-purple-500/10 text-purple-600",
    },
  ];
}

function TestimonialCard({ review }: { review: Testimonial }) {
  return (
    <div className="w-[350px] bg-white border border-primary/10 rounded-3xl p-6 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md hover:border-vibrant-orange/10 transition-all duration-300 mx-3 select-none">
      <div className="flex flex-col gap-2">
        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-vibrant-orange text-vibrant-orange" />
          ))}
        </div>

        {/* Text */}
        <p className="text-xs md:text-sm font-semibold text-primary/80 leading-relaxed italic">
          "{review.content}"
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-3 border-t border-primary/5">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm ${review.colorClass}`}>
          {review.initials}
        </div>
        <div>
          <h5 className="font-extrabold text-xs text-primary">{review.name}</h5>
          <p className="text-[10px] font-semibold text-primary/50">
            {review.role}, {review.company}
          </p>
        </div>
      </div>
    </div>
  );
}

interface TestimonialsProps {
  lang: "id" | "en";
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = translations.testimonials;
  const row1Testimonials = getRow1Testimonials(lang);
  const row2Testimonials = getRow2Testimonials(lang);

  return (
    <section id="testimonials" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-96 h-96 rounded-full bg-accent-blue/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto mb-16 px-6 text-center">
        <h2 className="text-sm font-extrabold tracking-widest text-accent-blue uppercase mb-2">
          {t.label[lang]}
        </h2>
        <h3 className="text-3xl md:text-5xl font-black text-primary leading-tight">
          {lang === "id" ? (
            <>
              Disukai para pembangun sistem,<br />
              dipercaya para <span className="text-vibrant-orange">kreator</span>.
            </>
          ) : (
            <>
              {t.titlePre[lang]}<span className="text-vibrant-orange">{t.titleHighlight[lang]}</span>.
            </>
          )}
        </h3>
        <p className="text-primary/70 mt-4 font-semibold max-w-xl mx-auto">
          {t.description[lang]}
        </p>
      </div>

      {/* Scrolling Marquees */}
      <div className="flex flex-col gap-6 relative max-w-full overflow-hidden">
        {/* Leftward scrolling marquee (Row 1) */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="animate-marquee flex py-2">
            {row1Testimonials.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
            {/* Duplicate for seamless looping */}
            {row1Testimonials.map((review) => (
              <TestimonialCard key={`dup-${review.id}`} review={review} />
            ))}
          </div>
        </div>

        {/* Rightward scrolling marquee (Row 2) */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="animate-marquee-reverse flex py-2">
            {row2Testimonials.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
            {/* Duplicate for seamless looping */}
            {row2Testimonials.map((review) => (
              <TestimonialCard key={`dup-${review.id}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
