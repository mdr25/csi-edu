"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Calendar, CheckSquare } from "lucide-react";

export default function MethodologySection() {
  const { t, openModal } = useLanguage();

  return (
    <section id="methodology" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <span>{t.methodology.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.methodology.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.methodology.subtitle}
          </p>
        </div>

        {/* 4 Pillars Timeline Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.methodology.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-teal-950/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="text-3xl font-extrabold text-teal-800 border-b border-slate-100 pb-3">
                  {pillar.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{pillar.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-14 bg-gradient-to-r from-teal-950 via-slate-950 to-teal-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-teal-950/20">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ingin Mengetahui Kesiapan Mutu Satuan Pendidikan Anda?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              Tim kami dapat membantu melakukan pemetaan awal capaian literasi dan kompetensi guru di sekolah Anda.
            </p>
          </div>
          <button
            onClick={openModal}
            className="shrink-0 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs sm:text-sm transition-colors"
          >
            Ajukan Jadwal Pemetaan Awal
          </button>
        </div>
      </div>
    </section>
  );
}
