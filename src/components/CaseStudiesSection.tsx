"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function CaseStudiesSection() {
  const { t } = useLanguage();

  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-800">
            <span>{t.caseStudies.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {t.caseStudies.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.caseStudies.subtitle}
          </p>
        </div>

        {/* 3 Open Editorial Testimonials (No card boxes, no borders) */}
        <div className="mt-16 grid md:grid-cols-3 gap-12 lg:gap-16">
          {t.caseStudies.stories.map((story, idx) => (
            <div
              key={idx}
              className="pt-6 border-t border-slate-200/80 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic font-normal">
                  "{story.quote}"
                </p>

                {/* Measurable Outcome Text */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800">
                    Capaian Terukur:
                  </span>
                  <div className="font-bold text-slate-950 text-sm mt-0.5">
                    {story.outcome}
                  </div>
                </div>
              </div>

              {/* Author & School info */}
              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-base">
                  {story.author}
                </div>
                <div className="text-xs text-teal-800 font-semibold mt-0.5">{story.role}</div>
                <div className="text-xs text-slate-500 mt-0.5">{story.institution}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Field Gallery (Clean, unboxed images) */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
                Dokumentasi Lapangan
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Aktivitas Nyata Pendampingan di Satuan Pendidikan Mitra
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed font-normal">
              Fasilitasi langsung oleh instruktur senior CSI EDU bersama para kepala sekolah, guru, dan tim kurikulum di berbagai kota.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group space-y-3">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                <Image
                  src="/img/workshop-leadership.jpeg"
                  alt="Sesi Kepemimpinan & Produktivitas Organisasi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                  Leadership & Productivity
                </div>
                <div className="font-bold text-slate-900 text-base">
                  Dampak Kepemimpinan terhadap Produktivitas Satuan Pendidikan
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  Sesi paparan interaktif bagi pimpinan sekolah dan yayasan
                </div>
              </div>
            </div>

            <div className="group space-y-3">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                <Image
                  src="/img/workshop-discussion.jpeg"
                  alt="Forum Diskusi Reflektif Pimpinan Sekolah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                  Reflektif & Evaluatif
                </div>
                <div className="font-bold text-slate-900 text-base">
                  Check Point Kepemimpinan: Mengatasi Hambatan Pertumbuhan Sekolah
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  Bedah kasus perilaku manajemen dan iklim kerja guru di sekolah
                </div>
              </div>
            </div>

            <div className="group space-y-3">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                <Image
                  src="/img/workshop-session.jpeg"
                  alt="Penerapan Islamic Leadership di Sekolah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-csi-orange">
                  Masterclass
                </div>
                <div className="font-bold text-slate-900 text-base">
                  Islamic Educational Leadership & 5 Levels of Leadership
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  Pemetaan kompetensi dan peran transformatif kepala sekolah
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
