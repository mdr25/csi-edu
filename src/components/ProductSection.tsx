"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, CheckCircle2, BookOpen, GraduationCap, BarChart2 } from "lucide-react";

export default function ProductSection() {
  const { t, openModal } = useLanguage();
  const [activeTab, setActiveTab] = useState<"academy" | "testing">("academy");

  return (
    <section id="products" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-navy-800">
              {t.products.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-navy-950 tracking-tight">
              {t.products.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {t.products.subtitle}
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-2 border border-slate-300 p-1 rounded-lg bg-slate-50">
            <button
              onClick={() => setActiveTab("academy")}
              className={`px-4 py-2 rounded text-xs font-bold transition-all ${
                activeTab === "academy"
                  ? "bg-navy-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-navy-950"
              }`}
            >
              CSI Academy
            </button>
            <button
              onClick={() => setActiveTab("testing")}
              className={`px-4 py-2 rounded text-xs font-bold transition-all ${
                activeTab === "testing"
                  ? "bg-navy-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-navy-950"
              }`}
            >
              NF Testing & SRS
            </button>
          </div>
        </div>

        {/* Product Details Content */}
        <div className="mt-12">
          {activeTab === "academy" ? (
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Product Info Left (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                    Platform Pengembangan Guru
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mt-3">
                    {t.products.academy.name}
                  </h3>
                  <div className="text-sm font-semibold text-slate-600 mt-1">
                    {t.products.academy.role}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {t.products.academy.desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Fokus Pembelajaran Utama:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {t.products.academy.focusAreas.map((area, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-navy-800 shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600">
                  <strong>Jadwal:</strong> {t.products.academy.cohortInfo}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={openModal}
                    className="px-5 py-3 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm transition-colors"
                  >
                    Daftarkan Guru Sekolah Kami
                  </button>

                  <a
                    href="https://csi-academy.id"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <span>{t.products.academy.cta}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Realistic Mockup Right (6 cols) */}
              <div className="lg:col-span-6 bg-slate-900 rounded-xl p-6 text-white border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="font-mono text-[11px]">csi-academy.id/portal-guru</span>
                  </div>
                  <span className="text-amber-400 font-semibold">Cohort Aktif</span>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg space-y-2">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wide">
                    Modul Berjalan • Pekan ke-4
                  </div>
                  <div className="font-bold text-sm sm:text-base text-white">
                    Perancangan Asesmen Formatif & Portofolio Kurikulum Merdeka
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                    <span>Progres Pengunggahan Perangkat Ajar</span>
                    <span className="font-mono font-bold text-emerald-400">86% Selesai</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[86%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                    <div className="text-slate-400 text-[11px]">Sesi Refleksi Klinis</div>
                    <div className="font-bold text-white mt-1">Jumat, 19.30 WIB</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Daring via Zoom</div>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                    <div className="text-slate-400 text-[11px]">Validasi Portofolio PPG</div>
                    <div className="font-bold text-emerald-400 mt-1">32 Berkas Terverifikasi</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Siap Uji Kompetensi</div>
                  </div>
                </div>

                <div className="p-3 bg-navy-950/60 border border-slate-700 rounded-lg text-xs text-slate-300 flex items-center justify-between">
                  <span>Peserta: <strong>Guru SD & SMP Negeri/Swasta</strong></span>
                  <span className="text-amber-400 text-[11px] font-semibold">Laporan Kemajuan Tersedia</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Product Info Left (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-800 bg-navy-50 px-2.5 py-1 rounded border border-navy-200">
                    Platform Asesmen & Literasi Siswa
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 mt-3">
                    {t.products.testing.name}
                  </h3>
                  <div className="text-sm font-semibold text-slate-600 mt-1">
                    {t.products.testing.role}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {t.products.testing.desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Fitur & Komponen Teknis:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {t.products.testing.focusAreas.map((area, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-navy-800 shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600">
                  <strong>Skala Penggunaan:</strong> {t.products.testing.statsInfo}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={openModal}
                    className="px-5 py-3 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm transition-colors"
                  >
                    Uji Coba Sistem di Sekolah Kami
                  </button>

                  <a
                    href="https://nf-testingcenter.org"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <span>{t.products.testing.cta}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Realistic Mockup Right (6 cols) */}
              <div className="lg:col-span-6 bg-slate-900 rounded-xl p-6 text-white border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="font-mono text-[11px]">nf-testingcenter.org/school/srs</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">Tahun Ajaran 2026/2027</span>
                </div>

                <div className="bg-slate-800 p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wide">
                      Rekapitulasi Literasi Membaca Sekolah
                    </div>
                    <span className="text-xs text-amber-400 font-bold">Tingkat SMP</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="bg-slate-700/60 p-2.5 rounded border border-slate-600/50">
                      <div className="text-xl font-bold font-serif text-white">4.180</div>
                      <div className="text-[10px] text-slate-300 mt-0.5">Buku Terverifikasi</div>
                    </div>
                    <div className="bg-slate-700/60 p-2.5 rounded border border-slate-600/50">
                      <div className="text-xl font-bold font-serif text-emerald-400">89,2%</div>
                      <div className="text-[10px] text-slate-300 mt-0.5">Ketuntasan Kuis</div>
                    </div>
                    <div className="bg-slate-700/60 p-2.5 rounded border border-slate-600/50">
                      <div className="text-xl font-bold font-serif text-amber-400">+28 Poin</div>
                      <div className="text-[10px] text-slate-300 mt-0.5">Kenaikan ANBK</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-slate-400 font-semibold flex items-center justify-between">
                    <span>Contoh Laporan Pemahaman Membaca Siswa</span>
                    <span className="text-[11px] text-slate-400">Kelas 8B</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="bg-slate-800/70 p-2.5 rounded flex items-center justify-between">
                      <span className="text-white font-medium">Pemahaman Informasi Eksplisit</span>
                      <span className="text-emerald-400 font-mono font-bold">92% (Tinggi)</span>
                    </div>
                    <div className="bg-slate-800/70 p-2.5 rounded flex items-center justify-between">
                      <span className="text-white font-medium">Interpretasi & Integrasi Teks</span>
                      <span className="text-amber-400 font-mono font-bold">81% (Cukup)</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-navy-950/60 border border-slate-700 rounded-lg text-xs text-slate-300 flex items-center justify-between">
                  <span>Format: <strong>Sesuai Framework Asesmen Kompetensi Minimum (AKM)</strong></span>
                  <span className="text-amber-400 text-[11px] font-semibold">Ekspor Rapor PDF</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
