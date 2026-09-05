"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Clock, User, ArrowRight, Sparkles } from "lucide-react";

interface ArticleItem {
  id: string;
  category: "literacy" | "teachers" | "assessment" | "leadership";
  categoryLabelId: string;
  categoryLabelEn: string;
  titleId: string;
  titleEn: string;
  excerptId: string;
  excerptEn: string;
  author: string;
  role: string;
  readTime: string;
  date: string;
  badgeColor: string;
}

const articlesData: ArticleItem[] = [
  {
    id: "srs-reading-system",
    category: "literacy",
    categoryLabelId: "Literasi & Budaya Baca",
    categoryLabelEn: "Literacy & Reading",
    titleId: "School Reading System (SRS): Membangun Budaya Baca melalui Pendekatan Terukur & Gamifikasi",
    titleEn: "School Reading System (SRS): Building Reading Culture Through Measurable Gamification",
    excerptId:
      "Buku bukan sekadar hiasan perpustakaan. Bagaimana SRS mengubah rutinitas membaca siswa menjadi kompetisi sehat yang memicu lonjakan pemahaman membaca hingga 3 kali lipat.",
    excerptEn:
      "How SRS transforms passive school reading routines into healthy student motivation, driving a 3x surge in comprehension and reading volume.",
    author: "Andi Pratama",
    role: "Head of Learning Design, CSI EDU",
    readTime: "7",
    date: "12 Ags 2026",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "literacy-foundation-stem",
    category: "literacy",
    categoryLabelId: "Literasi",
    categoryLabelEn: "Literacy",
    titleId: "Mengapa Literasi Membaca adalah Fondasi Segala Mata Pelajaran Termasuk Matematika & Sains",
    titleEn: "Why Reading Literacy Is the True Foundation of Every Subject Including STEM",
    excerptId:
      "Kegagalan siswa dalam soal cerita matematika dan sains seringkali bukan masalah hitungan, melainkan defisit pemahaman teks bacaan instruksi soal.",
    excerptEn:
      "Student struggle in mathematics and science problem solving often roots not in calculation failure, but in reading comprehension deficits.",
    author: "Dr. Sari Wulandari",
    role: "Education Researcher, CSI EDU",
    readTime: "5",
    date: "14 Jun 2026",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    id: "teacher-five-habits",
    category: "teachers",
    categoryLabelId: "Pengembangan Guru",
    categoryLabelEn: "Teacher Development",
    titleId: "Lima Kebiasaan Guru yang Terus Bertumbuh di Tengah Dinamika Kurikulum",
    titleEn: "Five Daily Habits of Educators Who Consistently Grow Beyond Workshop Trends",
    excerptId:
      "Pertumbuhan guru bukan ditentukan oleh workshop sesekali, melainkan siklus refleksi kelas harian, keterbukaan pada umpan balik rekan, dan adopsi alat bantu mengajar modern.",
    excerptEn:
      "Educator mastery relies not on sporadic seminars, but on micro-habits of classroom reflection and systematic peer feedback.",
    author: "Budi Hartono, M.Pd.",
    role: "Master Teacher Trainer, CSI Academy",
    readTime: "4",
    date: "11 Jun 2026",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "assessment-for-learning",
    category: "assessment",
    categoryLabelId: "Asesmen Belajar",
    categoryLabelEn: "Assessment",
    titleId: "Asesmen untuk Pembelajaran: Bergerak Melampaui Ujian Akhir Semester",
    titleEn: "Assessment for Learning: Moving Beyond the Delayed Final Examination",
    excerptId:
      "Jika data asesmen hanya diperoleh saat ujian akhir semester, tindakan perbaikan sudah terlambat bagi siswa. Pentingnya siklus diagnostik formatif mingguan.",
    excerptEn:
      "When assessment arrives only at semester's end, it is too late to rescue student gaps. Formative diagnostics turn tests into steering wheels.",
    author: "Rina Kusuma, M.Ed.",
    role: "Assessment Specialist, NF Testing Center",
    readTime: "6",
    date: "08 Jun 2026",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

export default function ArticlesSection() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredArticles =
    activeCategory === "all"
      ? articlesData
      : articlesData.filter((art) => art.category === activeCategory);

  return (
    <section id="articles" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.articles.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.articles.title}
            </h2>
            <p className="text-slate-600 text-base">{t.articles.subtitle}</p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: language === "id" ? "Semua Artikel" : "All Articles" },
              { id: "literacy", label: language === "id" ? "Literasi" : "Literacy" },
              { id: "teachers", label: language === "id" ? "Guru" : "Teachers" },
              { id: "assessment", label: language === "id" ? "Asesmen" : "Assessment" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${article.badgeColor}`}
                  >
                    {language === "id" ? article.categoryLabelId : article.categoryLabelEn}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {article.readTime} {t.articles.minRead}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  {language === "id" ? article.titleId : article.titleEn}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {language === "id" ? article.excerptId : article.excerptEn}
                </p>
              </div>

              {/* Author & Read Action Footer */}
              <div className="mt-6 pt-5 border-t border-slate-200/70 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{article.author}</div>
                    <div className="text-[11px] text-slate-500">{article.role}</div>
                  </div>
                </div>

                <a
                  href={`https://csi-edu.id/articles`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/link"
                >
                  <span>{t.articles.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
