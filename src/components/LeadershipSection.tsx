"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function LeadershipSection() {
  const { t, openModal } = useLanguage();

  return (
    <section id="expert" className="py-24 sm:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-800">
            <span>{t.leadership.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {t.leadership.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.leadership.subtitle}
          </p>
        </div>

        {/* Lead Expert: Open Editorial Feature (No harsh outer border) */}
        <div className="mt-16 bg-gradient-to-br from-teal-950 via-slate-950 to-teal-900 rounded-3xl overflow-hidden text-white shadow-2xl shadow-teal-950/25">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 lg:p-14">
            {/* Portrait Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
                <Image
                  src="/img/dr-rahmat-jas.png"
                  alt="Dr. Rahmat Syehani — School Transformation Expert"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-center">
                  <div className="text-xl font-bold text-white tracking-wide">
                    {t.leadership.expertName}
                  </div>
                  <div className="text-xs text-amber-400 font-semibold mt-0.5">
                    {t.leadership.expertRole}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span>Doctor of Education</span>
                <span>•</span>
                <span className="text-teal-300">20+ Tahun Pengalaman</span>
              </div>
            </div>

            {/* Profile Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400">
                  {t.leadership.expertBadge}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
                  {t.leadership.expertName}
                </h3>
                <div className="text-sm font-semibold text-teal-300 mt-1">
                  {t.leadership.expertRole}
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                {t.leadership.expertBio}
              </p>

              {/* Key Competencies - Clean typographic dashes, no generic icons */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Fokus Kepakaran & Riset:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  {t.leadership.expertPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-amber-400 font-bold select-none">—</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <p className="text-sm sm:text-base italic text-slate-300 leading-relaxed">
                  "{t.leadership.expertQuote}"
                </p>
                <div className="text-xs font-bold text-amber-400">
                  — {t.leadership.expertName}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-csi-gold hover:bg-amber-500 text-navy-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/10 hover:-translate-y-0.5"
                >
                  <span>{t.leadership.consultationCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Governance Associate (Clean open layout, no card box) */}
        <div className="mt-14 pt-10 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
              {t.leadership.associateTitle}
            </span>
            <h4 className="text-xl font-bold text-slate-950">
              {t.leadership.associateName}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {t.leadership.associateBio}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#learning-brewing"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950 transition-colors group"
            >
              <span>Pelajari Workshop Hukum Sekolah</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
