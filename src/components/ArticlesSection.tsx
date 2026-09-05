"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Clock, FileText } from "lucide-react";

interface ArticleItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  readTime: string;
  date: string;
}

const articlesData: ArticleItem[] = [
  {
    id: "srs-framework",
    category: "Literasi Sekolah",
    title: "School Reading System (SRS): Membangun Budaya Baca melalui Pendekatan Terukur dan Digital",
    excerpt:
      "Kajian mengenai bagaimana mekanisme kuis pemahaman dan pencatatan berjenjang mengubah kebiasaan membaca siswa dari pasif menjadi rutinitas belajar mandiri.",
    author: "Andi Pratama",
    role: "Learning Design Lead, CSI EDU",
    readTime: "7 menit",
    date: "Agustus 2026",
  },
  {
    id: "reading-literacy-foundation",
    category: "Riset Pembelajaran",
    title: "Mengapa Literasi Membaca Menjadi Penentu Keberhasilan Seluruh Mata Pelajaran",
    excerpt:
      "Analisis korelasi antara pemahaman teks dengan keberhasilan siswa memecahkan soal berbasis penalaran kontekstual pada bidang matematika dan sains.",
    author: "Dr. Sari Wulandari",
    role: "Peneliti Pendidikan",
    readTime: "5 menit",
    date: "Juni 2026",
  },
  {
    id: "teacher-daily-habits",
    category: "Pengembangan Guru",
    title: "Praktik Reflektif Guru: Kebiasaan Kecil yang Mendorong Pertumbuhan Berkelanjutan",
    excerpt:
      "Studi lapangan mengenai peran komunitas belajar guru (Kombel) dan supervisi sejawat dalam meningkatkan mutu pengajaran di sekolah.",
    author: "Budi Hartono, M.Pd.",
    role: "Instruktur Senior CSI Academy",
    readTime: "4 menit",
    date: "Juni 2026",
  },
];

export default function ArticlesSection() {
  const { t } = useLanguage();

  return (
    <section id="articles" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-navy-800">
              {t.articles.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-navy-950 tracking-tight">
              {t.articles.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {t.articles.subtitle}
            </p>
          </div>

          <a
            href="https://csi-edu.id/articles"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-navy-700 transition-colors"
          >
            <span>Buka Arsip Publikasi csi-edu.id</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Publication Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {articlesData.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    {art.category}
                  </span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="font-serif font-bold text-navy-950 text-base leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-800">{art.author}</div>
                  <div className="text-[11px] text-slate-500">{art.role}</div>
                </div>

                <a
                  href="https://csi-edu.id/articles"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-navy-900 hover:text-navy-700 flex items-center gap-1"
                >
                  <span>Baca</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
