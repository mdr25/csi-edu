"use client";

import React, { useState, useId } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Sparkles,
  Users,
  GraduationCap,
  BookOpen,
  TrendingUp,
  Award,
  CheckCircle2,
  Send,
  Sliders,
} from "lucide-react";

type SchoolLevel = "sd" | "smp" | "sma" | "yayasan";
type FocusGoal = "literacy" | "certification" | "curriculum";

export default function ImpactCalculator() {
  const { t, openModal } = useLanguage();

  const [schoolLevel, setSchoolLevel] = useState<SchoolLevel>("smp");
  const [teachersCount, setTeachersCount] = useState<number>(35);
  const [studentsCount, setStudentsCount] = useState<number>(450);
  const [focusGoal, setFocusGoal] = useState<FocusGoal>("literacy");

  const teachersSliderId = useId();
  const studentsSliderId = useId();

  // Dynamic calculations based on real historical data averages
  const projectedBooksPerYear =
    studentsCount * (schoolLevel === "sd" ? 18 : schoolLevel === "smp" ? 14 : 10);
  const projectedTeachersUpskilled = Math.round(teachersCount * 0.88);
  const projectedLiteracyGrowth =
    focusGoal === "literacy" ? "+38%" : focusGoal === "certification" ? "+25%" : "+30%";
  const projectedCertifiedTeachers = Math.round(teachersCount * 0.75);

  const getRecommendedPackage = () => {
    if (focusGoal === "literacy") {
      return {
        title: "Paket Akselerasi Literasi & School Reading System (SRS)",
        duration: "1 Tahun Ajaran Penuh (2 Semester)",
        scope: "Implementasi Gamified SRS untuk seluruh siswa + Pelatihan Guru Penggerak Literasi",
        badge: "Paling Populer untuk Sekolah Menengah",
      };
    }
    if (focusGoal === "certification") {
      return {
        title: "Paket Intensif Sertifikasi Guru & Pedagogi Modern (CSI Academy)",
        duration: "6 Bulan Pendampingan Cohort",
        scope: "Bimbingan portofolio PPG, modul AI untuk pembelajaran, dan supervisi klinis guru",
        badge: "Fokus Akreditasi & Guru",
      };
    }
    return {
      title: "Paket Transformasi Ekosistem Terpadu (All-in-One)",
      duration: "Kemitraan Strategis Tahunan",
      scope: "Integrasi CSI Academy (Guru) + NF Testing Center & SRS (Siswa) + Dashboard Rapor Yayasan",
      badge: "Solusi Lengkap Yayasan",
    };
  };

  const pack = getRecommendedPackage();

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            {t.calculator.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form (Left 6 cols) */}
          <div className="lg:col-span-6 bg-slate-50/90 border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900 text-base">Parameter Sekolah Anda</h3>
              </div>
              <span className="text-xs text-slate-500 font-medium">Interaktif & Real-time</span>
            </div>

            {/* School Level Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                {t.calculator.schoolType}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(
                  [
                    { id: "sd" as const, label: "SD / MI" },
                    { id: "smp" as const, label: "SMP / MTs" },
                    { id: "sma" as const, label: "SMA / MA / SMK" },
                    { id: "yayasan" as const, label: "Yayasan / Kompleks" },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSchoolLevel(item.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      schoolLevel === item.id
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Teachers Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={teachersSliderId}
                  className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5"
                >
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                  <span>{t.calculator.teachersCount}</span>
                </label>
                <span className="text-sm font-black text-emerald-700 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
                  {teachersCount} Guru
                </span>
              </div>
              <input
                id={teachersSliderId}
                type="range"
                min="10"
                max="250"
                step="5"
                value={teachersCount}
                onChange={(e) => setTeachersCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>10 Guru (Sekolah Mandiri)</span>
                <span>250+ Guru (Yayasan Besar)</span>
              </div>
            </div>

            {/* Students Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={studentsSliderId}
                  className="text-xs font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5"
                >
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>{t.calculator.studentsCount}</span>
                </label>
                <span className="text-sm font-black text-blue-700 bg-blue-50 px-3 py-0.5 rounded-full border border-blue-200">
                  {studentsCount} Siswa
                </span>
              </div>
              <input
                id={studentsSliderId}
                type="range"
                min="80"
                max="2500"
                step="20"
                value={studentsCount}
                onChange={(e) => setStudentsCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>80 Siswa</span>
                <span>2.500+ Siswa</span>
              </div>
            </div>

            {/* Primary Goal Radio Cards */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                {t.calculator.mainGoal}
              </label>
              <div className="space-y-2">
                {(
                  [
                    { id: "literacy" as const, label: t.calculator.goals.literacy, tag: "Rekomendasi Utama" },
                    { id: "certification" as const, label: t.calculator.goals.certification, tag: "Prioritas Guru" },
                    { id: "curriculum" as const, label: t.calculator.goals.curriculum, tag: "Prioritas Manajemen" },
                  ] as const
                ).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setFocusGoal(item.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                      focusGoal === item.id
                        ? "bg-white border-emerald-600 shadow-sm ring-1 ring-emerald-600"
                        : "bg-white/60 border-slate-200 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          focusGoal === item.id
                            ? "border-emerald-600 bg-emerald-600"
                            : "border-slate-300"
                        }`}
                      >
                        {focusGoal === item.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium hidden sm:inline-block">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Projection Card (Right 6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6">
            <div className="border-b border-slate-700/80 pb-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-2">
                Hasil Proyeksi Dampak
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {t.calculator.resultTitle}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                {t.calculator.resultSub}
              </p>
            </div>

            {/* Projected Metrics 4-Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Metric 1 */}
              <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span>Target Literasi Siswa</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  {projectedBooksPerYear.toLocaleString("id-ID")}+
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Buku tuntas dibaca & dipahami per tahun
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-medium mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>Kompetensi Guru</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  {projectedTeachersUpskilled} Guru
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Tervalidasi kompetensi & siap portofolio
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-medium mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Kenaikan Indeks Rapor</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400">
                  {projectedLiteracyGrowth}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Skor literasi pada Asesmen Nasional (ANBK)
                </div>
              </div>

              {/* Metric 4 */}
              <div className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-2xl">
                <div className="flex items-center gap-2 text-teal-400 text-xs font-medium mb-1">
                  <Award className="w-4 h-4" />
                  <span>Estimasi Lolos Sertifikasi</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-teal-400">
                  {projectedCertifiedTeachers} Guru
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Kesiapan lulus uji kompetensi / PPG
                </div>
              </div>
            </div>

            {/* Recommended Blueprint Box */}
            <div className="bg-emerald-900/40 border border-emerald-700/50 p-5 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                  {t.calculator.recommendationTitle}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                  {pack.badge}
                </span>
              </div>
              <h4 className="text-base font-bold text-white">{pack.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{pack.scope}</p>
              <div className="flex items-center gap-2 text-xs text-emerald-300 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Durasi: {pack.duration}</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={openModal}
              className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-emerald-500/20 active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>{t.calculator.consultCta}</span>
            </button>
            <p className="text-center text-[11px] text-slate-400">
              *Konsultasi awal & bedah rapor mutu sekolah disediakan tanpa biaya komitmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
