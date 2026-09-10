"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  const { t, openModal } = useLanguage();

  const partnerLogos = [
    {
      name: "Dinas Pendidikan Kota Surabaya",
      short: "Disdik Surabaya",
      logo: "/img/logo/logo-dinas-pendidikan-surabaya.png",
    },
    {
      name: "Ikatan Guru Indonesia (IGI)",
      short: "Ikatan Guru Indonesia",
      logo: "/img/logo/logo-igi.png",
    },
    {
      name: "Universitas Pendidikan Indonesia (UPI)",
      short: "UPI Bandung",
      logo: "/img/logo/upi.png",
    },
    {
      name: "Jaringan Sekolah Islam Terpadu (JSIT)",
      short: "JSIT Indonesia",
      logo: "/img/logo/jsit.png",
    },
    {
      name: "SMP Negeri 2 Bandung",
      short: "SMPN 2 Bandung",
      logo: "/img/logo/logo-smp-2-bandung.png",
    },
    {
      name: "SMA Santo Yoseph Medan",
      short: "SMA Santo Yoseph",
      logo: "/img/logo/logo-sma-santo-yoseph.png",
    },
    {
      name: "SD Islam Terpadu Al-Hikmah",
      short: "SDIT Al-Hikmah",
      logo: "/img/logo/logo-sdit-al-hikmah.png",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-gradient-to-b from-teal-50/50 via-white to-slate-50/60 overflow-hidden">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Modern Institution Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Pendampingan Terpadu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 via-teal-700 to-amber-600">
                Mutu Sekolah, Guru & Literasi Siswa.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#planner"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-sm transition-all shadow-lg shadow-teal-900/20 hover:shadow-xl hover:shadow-teal-900/30 hover:-translate-y-0.5"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200/90 transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Institutional Endorsement Bar */}
            <div className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Selaras Rapor Pendidikan & ANBK</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Pendampingan Praktik di Kelas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Bimbingan Sertifikasi Pendidik (PPG)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Expansive High-Impact Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-950/15 border border-slate-200/80 bg-white p-2 sm:p-2.5">
              {/* Photo Area */}
              <div className="relative h-[380px] sm:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src="/img/workshop-hero.jpeg"
                  alt="Dokumentasi Pelatihan & Transformasi Mutu Sekolah CSI EDU"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Floating Live Badge Top Right */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-white/60 flex items-center gap-2 text-xs font-bold text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Workshop Aktif 2026</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1.5">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-csi-orange px-2.5 py-1 rounded text-white shadow-xs">
                    Dokumentasi Kemitraan Riil
                  </span>
                  <div className="text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                    Transformasi Kepemimpinan & Budaya Belajar Sekolah
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Fasilitasi langsung oleh Dr. Rahmat Syehani bersama kepala sekolah & guru
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="mt-2.5 p-4 bg-slate-50/80 rounded-2xl border border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center font-black text-sm shadow-sm">
                    CSI
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Ekosistem Mutu Terpadu
                    </div>
                    <div className="text-[11px] text-slate-500">
                      CSI Academy • SRS • NF Testing Center
                    </div>
                  </div>
                </div>

                <button
                  onClick={openModal}
                  className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-teal-900 shadow-2xs transition-colors shrink-0"
                >
                  Konsultasi →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Key Metrics Callout Bar */}
        <div className="mt-20 pt-12 border-t border-slate-200/80">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/70 p-6 sm:p-10 shadow-sm">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              {/* Metric 1 */}
              <div className="space-y-1 sm:border-r sm:border-slate-100 sm:pr-6 last:border-none">
                <div className="text-4xl sm:text-5xl font-extrabold text-teal-900 tracking-tight">
                  {t.hero.metrics.schools.value}
                </div>
                <div className="text-sm font-bold text-slate-800 pt-1">
                  {t.hero.metrics.schools.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t.hero.metrics.schools.desc}
                </p>
              </div>

              {/* Metric 2 */}
              <div className="space-y-1 sm:border-r sm:border-slate-100 sm:pr-6 last:border-none">
                <div className="text-4xl sm:text-5xl font-extrabold text-teal-900 tracking-tight">
                  {t.hero.metrics.teachers.value}
                </div>
                <div className="text-sm font-bold text-slate-800 pt-1">
                  {t.hero.metrics.teachers.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t.hero.metrics.teachers.desc}
                </p>
              </div>

              {/* Metric 3 */}
              <div className="space-y-1 sm:border-r sm:border-slate-100 sm:pr-6 last:border-none">
                <div className="text-4xl sm:text-5xl font-extrabold text-teal-900 tracking-tight">
                  {t.hero.metrics.students.value}
                </div>
                <div className="text-sm font-bold text-slate-800 pt-1">
                  {t.hero.metrics.students.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t.hero.metrics.students.desc}
                </p>
              </div>

              {/* Metric 4 */}
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-extrabold text-teal-900 tracking-tight">
                  {t.hero.metrics.books.value}
                </div>
                <div className="text-sm font-bold text-slate-800 pt-1">
                  {t.hero.metrics.books.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t.hero.metrics.books.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large, Spacious Institutional Partners Logo Showcase */}
        <div className="mt-16 pt-10 border-t border-slate-200/70">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Dipercaya oleh Dinas Pendidikan, Perguruan Tinggi, dan Jaringan Sekolah Nasional
            </span>
          </div>

          {/* Spacious Horizontal Flow - NOT tiny boxed stamps */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {partnerLogos.map((p, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center transition-transform hover:scale-105 duration-200"
                title={p.name}
              >
                <div className="relative h-14 sm:h-16 w-32 sm:w-40 flex items-center justify-center">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain filter opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-900 mt-2 text-center transition-colors">
                  {p.short}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
