"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  GraduationCap,
  BookOpenCheck,
  Check,
  ExternalLink,
  Award,
  BookOpen,
  Sparkles,
  Trophy,
  BarChart3,
  Calendar,
} from "lucide-react";

export default function ProductShowcase() {
  const { t, openModal } = useLanguage();
  const [activeTab, setActiveTab] = useState<"academy" | "testing">("academy");

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/50 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            {t.products.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.products.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.products.subtitle}
          </p>

          {/* Interactive Switcher Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <button
                onClick={() => setActiveTab("academy")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  activeTab === "academy"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>CSI Academy</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-800/40 text-emerald-100 hidden sm:inline-block">
                  Guru
                </span>
              </button>

              <button
                onClick={() => setActiveTab("testing")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  activeTab === "testing"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <BookOpenCheck className="w-4 h-4" />
                <span>NF Testing & SRS</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-blue-800/40 text-blue-100 hidden sm:inline-block">
                  Siswa
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Product Detail Card */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {activeTab === "academy" ? (
            <div className="grid lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
              {/* Product Info Left */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {t.products.academy.tag}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {t.products.academy.name}
                  </h3>
                  <p className="text-emerald-700 font-semibold text-base">
                    {t.products.academy.role}
                  </p>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {t.products.academy.desc}
                </p>

                {/* Key feature list */}
                <ul className="space-y-3 pt-2">
                  {t.products.academy.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={openModal}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all"
                  >
                    Konsultasi Pelatihan Guru
                  </button>

                  <a
                    href="https://csi-academy.id"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                  >
                    <span>{t.products.academy.cta}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Mock Dashboard Preview Right (CSI Academy) */}
              <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-5 sm:p-6 text-white shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs text-slate-400 font-mono ml-2">
                      portal.csi-academy.id/cohort-4
                    </span>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-medium">
                    Batch Aktif
                  </span>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-semibold">Modul Berjalan:</span>
                    <span className="text-xs text-emerald-400 font-bold">Minggu ke-3 dari 6</span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-white">
                    Penerapan Pembelajaran Terdiferensiasi & Asesmen Formatif
                  </h4>
                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-300">
                      <span>Progres Tugas Mandiri & Refleksi</span>
                      <span className="font-bold text-emerald-400">84%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full w-[84%]" />
                    </div>
                  </div>
                </div>

                {/* Teacher roster snapshot */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Sesi Mentoring Live</span>
                    </div>
                    <div className="font-bold text-xs text-white">Jumat, 19.30 WIB</div>
                    <div className="text-[11px] text-emerald-400 mt-1">Bersama Dr. Sari Wulandari</div>
                  </div>

                  <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>Kesiapan Sertifikasi</span>
                    </div>
                    <div className="font-bold text-xs text-white">92% Portofolio Valid</div>
                    <div className="text-[11px] text-slate-300 mt-1">28 Guru Siap PPG</div>
                  </div>
                </div>

                <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-800/50 flex items-center justify-between text-xs">
                  <span className="text-emerald-200">
                    Status: <strong>42 Guru Sekolah Mitra Terdaftar</strong>
                  </span>
                  <span className="text-emerald-400 font-semibold cursor-pointer hover:underline">
                    Unduh Rekap Laporan →
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
              {/* Product Info Left (Testing Center) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  {t.products.testing.tag}
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {t.products.testing.name}
                  </h3>
                  <p className="text-blue-700 font-semibold text-base">
                    {t.products.testing.role}
                  </p>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {t.products.testing.desc}
                </p>

                {/* Key feature list */}
                <ul className="space-y-3 pt-2">
                  {t.products.testing.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={openModal}
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all"
                  >
                    Uji Coba Asesmen Sekolah
                  </button>

                  <a
                    href="https://nf-testingcenter.org"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                  >
                    <span>{t.products.testing.cta}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Mock Dashboard Preview Right (NF Testing & SRS Gamification) */}
              <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-5 sm:p-6 text-white shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs text-slate-400 font-mono ml-2">
                      srs.nf-testingcenter.org/school-rank
                    </span>
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-medium">
                    Gamified SRS
                  </span>
                </div>

                {/* School Reading System Gamification Card */}
                <div className="bg-slate-800/80 p-4 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                        Tantangan Literasi Semester Genap
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">SMP Teladan Nusantara</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-2">
                    <div className="bg-slate-700/50 p-2.5 rounded-lg border border-slate-600/40">
                      <div className="text-xl font-black text-amber-400">3.420</div>
                      <div className="text-[10px] text-slate-300">Buku Selesai Dibaca</div>
                    </div>
                    <div className="bg-slate-700/50 p-2.5 rounded-lg border border-slate-600/40">
                      <div className="text-xl font-black text-blue-400">92,4%</div>
                      <div className="text-[10px] text-slate-300">Tuntas Asesmen Baca</div>
                    </div>
                    <div className="bg-slate-700/50 p-2.5 rounded-lg border border-slate-600/40">
                      <div className="text-xl font-black text-emerald-400">+38 Poin</div>
                      <div className="text-[10px] text-slate-300">Kenaikan Rapor ANBK</div>
                    </div>
                  </div>
                </div>

                {/* Student Leaderboard Snapshot */}
                <div className="space-y-2">
                  <div className="text-xs text-slate-400 font-semibold flex items-center justify-between">
                    <span>Peringkat Pembaca Teraktif Pekan Ini</span>
                    <span className="text-[11px] text-blue-400">Update Tiap Hari</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="bg-slate-800/60 px-3 py-2 rounded-lg flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-[10px]">
                          1
                        </span>
                        <span className="font-semibold text-white">Ananda Rizky (Kelas 8A)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 text-[11px]">19 Buku</span>
                        <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold rounded-md text-[10px]">
                          Master Reader
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-800/60 px-3 py-2 rounded-lg flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-slate-600 text-white font-bold flex items-center justify-center text-[10px]">
                          2
                        </span>
                        <span className="font-semibold text-white">Siti Aisyah (Kelas 7B)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 text-[11px]">16 Buku</span>
                        <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 font-bold rounded-md text-[10px]">
                          Advocate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-800/50 flex items-center justify-between text-xs">
                  <span className="text-blue-200">
                    Integrasi: <strong>Asesmen Diagnostik Kemendikbud Ristek Ready</strong>
                  </span>
                  <span className="text-blue-400 font-semibold cursor-pointer hover:underline">
                    Lihat Contoh Rapor Siswa →
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
