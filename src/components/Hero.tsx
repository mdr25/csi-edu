"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  GraduationCap,
  Building2,
  Users,
  BookOpenCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  const { t, openModal } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white">
      {/* Background Decorative Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-200/30 via-teal-100/20 to-indigo-100/20 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {t.hero.titlePart1}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titlePart2}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-all shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5 text-emerald-200" />
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ecosystem"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Trust Badges Checkmarks */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Berbasis Kurikulum Nasional</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Pendampingan Berkelanjutan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Rapor & Bukti Terukur</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card (Interactive Ecosystem Card) */}
          <div className="lg:col-span-5 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-3xl blur-2xl -z-10" />

            <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/5 space-y-6">
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    Ekosistem Sinergi
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">
                    Siklus Mutu Pendidikan Sekolah
                  </h3>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>

              {/* Product 1: CSI Academy Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50/70 to-teal-50/50 border border-emerald-200/70 hover:border-emerald-300 transition-all">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-emerald-600 text-white rounded-xl shadow-md shadow-emerald-600/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">CSI Academy</h4>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                        Guru & Pendidik
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Pengembangan kompetensi pedagogi, AI mengajar, dan pendampingan sertifikasi guru.
                    </p>
                    <div className="mt-2.5 flex items-center gap-3 text-[11px] font-semibold text-emerald-800">
                      <span>• Cohort Belajar</span>
                      <span>• Mentoring Rutin</span>
                      <span>• Sertifikat Resmi</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cycle connector icon */}
              <div className="flex items-center justify-center -my-2 relative z-10">
                <div className="bg-white border-2 border-emerald-500 rounded-full p-1.5 shadow-sm text-emerald-700">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>

              {/* Product 2: NF Testing Center & SRS */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/50 border border-blue-200/70 hover:border-blue-300 transition-all">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md shadow-blue-600/20">
                    <BookOpenCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">NF Testing Center & SRS</h4>
                      <span className="text-[10px] font-semibold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200">
                        Siswa & Literasi
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Sistem membaca gamifikasi (SRS) dan tes diagnostik berkala yang disukai siswa.
                    </p>
                    <div className="mt-2.5 flex items-center gap-3 text-[11px] font-semibold text-blue-800">
                      <span>• Sistem Poin Gamifikasi</span>
                      <span>• Rapor Literasi</span>
                      <span>• Bank Soal Standar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-2">
                <button
                  onClick={openModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Minta Paparan Kurikulum untuk Sekolah Anda</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Stats Bar */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {/* Stat 1: Teachers */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs hover:border-emerald-200 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {t.hero.stats.teachers.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {t.hero.stats.teachers.label}
                </div>
              </div>
            </div>

            {/* Stat 2: Schools */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs hover:border-emerald-200 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {t.hero.stats.schools.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {t.hero.stats.schools.label}
                </div>
              </div>
            </div>

            {/* Stat 3: Students */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs hover:border-emerald-200 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {t.hero.stats.students.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {t.hero.stats.students.label}
                </div>
              </div>
            </div>

            {/* Stat 4: Books */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs hover:border-emerald-200 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {t.hero.stats.books.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {t.hero.stats.books.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
