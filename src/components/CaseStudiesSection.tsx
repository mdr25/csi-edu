"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Quote, Camera, CheckCircle2 } from "lucide-react";

export default function CaseStudiesSection() {
  const { t } = useLanguage();

  return (
    <section id="case-studies" className="py-24 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <span>{t.caseStudies.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.caseStudies.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.caseStudies.subtitle}
          </p>
        </div>

        {/* 3 Case Study Columns */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {t.caseStudies.stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-teal-950/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-teal-700/30" />

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                  "{story.quote}"
                </p>

                {/* Measurable Outcome Box */}
                <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-100 text-xs text-navy-950">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-teal-800">
                    Capaian Terukur:
                  </div>
                  <div className="font-bold text-teal-900 text-sm mt-0.5">
                    {story.outcome}
                  </div>
                </div>
              </div>

              {/* Author & School info */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-base">
                  {story.author}
                </div>
                <div className="text-xs text-teal-800 font-semibold mt-0.5">{story.role}</div>
                <div className="text-xs text-slate-500 mt-0.5">{story.institution}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Field Gallery Grid */}
        <div className="mt-20 pt-16 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                <Camera className="w-3.5 h-3.5" />
                <span>Dokumentasi Pelatihan Lapangan</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Aktivitas Nyata Pendampingan di Satuan Pendidikan Mitra
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed font-normal">
              Fasilitasi langsung oleh instruktur senior CSI EDU bersama para kepala sekolah, guru, dan tim kurikulum di berbagai kota.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-teal-950/10 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/img/workshop-leadership.jpeg"
                  alt="Sesi Kepemimpinan & Produktivitas Organisasi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                  Leadership & Productivity
                </div>
                <div className="font-bold text-slate-900 text-base mt-1">
                  Dampak Kepemimpinan terhadap Produktivitas Satuan Pendidikan
                </div>
                <div className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Sesi paparan interaktif bagi pimpinan sekolah dan yayasan
                </div>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-teal-950/10 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/img/workshop-discussion.jpeg"
                  alt="Forum Diskusi Reflektif Pimpinan Sekolah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] font-bold uppercase tracking-wider text-teal-700">
                  Reflektif & Evaluatif
                </div>
                <div className="font-bold text-slate-900 text-base mt-1">
                  Check Point Kepemimpinan: Mengatasi Hambatan Pertumbuhan Sekolah
                </div>
                <div className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Bedah kasus perilaku manajemen dan iklim kerja guru di sekolah
                </div>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-teal-950/10 hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src="/img/workshop-session.jpeg"
                  alt="Penerapan Islamic Leadership di Sekolah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] font-bold uppercase tracking-wider text-csi-orange">
                  Masterclass
                </div>
                <div className="font-bold text-slate-900 text-base mt-1">
                  Islamic Educational Leadership & 5 Levels of Leadership
                </div>
                <div className="text-xs text-slate-500 mt-1.5 leading-relaxed">
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
