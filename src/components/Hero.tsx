"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  const partnerLogos = [
    {
      name: "Dinas Pendidikan Kota Surabaya",
      logo: "/img/logo/logo-dinas-pendidikan-surabaya.png",
    },
    {
      name: "Ikatan Guru Indonesia (IGI)",
      logo: "/img/logo/logo-igi.png",
    },
    {
      name: "Universitas Pendidikan Indonesia (UPI)",
      logo: "/img/logo/upi.png",
    },
    {
      name: "Jaringan Sekolah Islam Terpadu (JSIT)",
      logo: "/img/logo/jsit.png",
    },
    {
      name: "SMP Negeri 2 Bandung",
      logo: "/img/logo/logo-smp-2-bandung.png",
    },
    {
      name: "SMA Santo Yoseph Medan",
      logo: "/img/logo/logo-sma-santo-yoseph.png",
    },
    {
      name: "SD Islam Terpadu Al-Hikmah",
      logo: "/img/logo/logo-sdit-al-hikmah.png",
    },
  ];

  return (
    <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 bg-white overflow-hidden">
      {/* Subtle ambient lighting glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Open Editorial Typography */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Minimal Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/80 text-slate-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Headline: Clean, Big, Unboxed */}
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold text-slate-950 tracking-tight leading-[1.08]">
              Pendampingan Terpadu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-teal-600">
                Mutu Sekolah,
              </span>{" "}
              Guru & Literasi Siswa.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Actions: Clean & Spacious */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#planner"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-semibold text-sm transition-all"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Inline Trust Notes - No generic icon spam */}
            <div className="pt-6 text-xs text-slate-500 flex flex-wrap items-center gap-y-2 gap-x-6">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                Selaras Rapor Pendidikan & ANBK
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                Pendampingan Praktik Kelas Langsung
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                Kesiapan Sertifikasi Guru (PPG)
              </span>
            </div>
          </div>

          {/* Right: Edge-to-edge Clean Visual (No nested cards inside cards) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 bg-slate-900">
              <Image
                src="/img/workshop-hero.jpeg"
                alt="Dokumentasi Pelatihan & Transformasi Mutu Sekolah CSI EDU"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Minimal floating live badge */}
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Dokumentasi Pelatihan Lapangan</span>
              </div>

              {/* Clean caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-base font-bold leading-snug">
                  Workshop Transformasi Kepemimpinan Sekolah
                </div>
                <div className="text-xs text-slate-300 font-normal">
                  Dr. Rahmat Syehani memfasilitasi kepala sekolah dan yayasan mitra
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open, Borderless Metrics Row (No box, no card background) */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                {t.hero.metrics.schools.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800 mt-2">
                {t.hero.metrics.schools.label}
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {t.hero.metrics.schools.desc}
              </p>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                {t.hero.metrics.teachers.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800 mt-2">
                {t.hero.metrics.teachers.label}
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {t.hero.metrics.teachers.desc}
              </p>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                {t.hero.metrics.students.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800 mt-2">
                {t.hero.metrics.students.label}
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {t.hero.metrics.students.desc}
              </p>
            </div>

            <div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                {t.hero.metrics.books.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800 mt-2">
                {t.hero.metrics.books.label}
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {t.hero.metrics.books.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Clean, Floating, Borderless Logo Ribbon (NO CARDS, NO BORDERS, NO CAPTIONS) */}
        <div className="mt-20 pt-14 border-t border-slate-100">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-10">
            Dipercaya oleh dinas pendidikan, perguruan tinggi, dan jaringan sekolah nasional
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-20">
            {partnerLogos.map((p, idx) => (
              <div
                key={idx}
                className="relative h-12 sm:h-14 w-28 sm:w-36 flex items-center justify-center transition-all duration-300 hover:scale-110"
                title={p.name}
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  className="object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
