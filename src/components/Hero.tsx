"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, CheckCircle, Shield, Award, BookOpen } from "lucide-react";

export default function Hero() {
  const { t, openModal } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Institution Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-100/80 text-navy-900 border border-navy-200 text-xs font-bold uppercase tracking-wider">
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-navy-950 tracking-tight leading-[1.2]">
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {t.hero.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#planner"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm transition-colors shadow-xs"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-navy-900 font-bold text-sm border border-slate-300 transition-colors"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Institutional Endorsement Bar */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-forest-600" />
                <span>Selaras Rapor Pendidikan & ANBK</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Shield className="w-4 h-4 text-forest-600" />
                <span>Pendampingan Berbasis Praktik di Kelas</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Award className="w-4 h-4 text-forest-600" />
                <span>Bimbingan Sertifikasi Pendidik (PPG)</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Credibility Educational Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-white">
              {/* Primary High-Resolution Photo (Classroom / Educational Context) */}
              <div className="relative h-72 sm:h-80 w-full bg-slate-200">
                <Image
                  src="/img/workshop-hero.jpeg"
                  alt="Dokumentasi Pelatihan & Transformasi Mutu Sekolah CSI EDU"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-csi-orange px-2 py-0.5 rounded text-white shadow-xs">
                    Dokumentasi Lapangan
                  </span>
                  <div className="text-sm font-bold mt-1 leading-snug text-white drop-shadow-sm">
                    Workshop Kepemimpinan & Transformasi Mutu Sekolah Mitra
                  </div>
                </div>
              </div>

              {/* Verified School Impact Card snippet */}
              <div className="p-5 bg-white space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Cakupan Program Sekolah
                    </span>
                    <div className="font-serif font-bold text-navy-950 text-sm">
                      Siklus Peningkatan Mutu Akademik
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-forest-600/10 text-forest-700 border border-forest-600/20">
                    Terstandarisasi
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <div className="font-bold text-navy-950 text-sm">CSI Academy</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">
                      Pelatihan Guru & Kesiapan PPG
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <div className="font-bold text-navy-950 text-sm">SRS & Testing Center</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">
                      Literasi Membaca & Asesmen
                    </div>
                  </div>
                </div>

                <button
                  onClick={openModal}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs transition-colors text-center block"
                >
                  Jadwalkan Paparan Program untuk Yayasan / Sekolah Anda →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Four Enterprise Key Metrics Callout Bar (Edusoft-style) */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Metric 1 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-serif font-black text-navy-900">
                {t.hero.metrics.schools.value}
              </div>
              <div className="text-sm font-bold text-slate-800">
                {t.hero.metrics.schools.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.hero.metrics.schools.desc}
              </p>
            </div>

            {/* Metric 2 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-serif font-black text-navy-900">
                {t.hero.metrics.teachers.value}
              </div>
              <div className="text-sm font-bold text-slate-800">
                {t.hero.metrics.teachers.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.hero.metrics.teachers.desc}
              </p>
            </div>

            {/* Metric 3 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-serif font-black text-navy-900">
                {t.hero.metrics.students.value}
              </div>
              <div className="text-sm font-bold text-slate-800">
                {t.hero.metrics.students.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.hero.metrics.students.desc}
              </p>
            </div>

            {/* Metric 4 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-serif font-black text-navy-900">
                {t.hero.metrics.books.value}
              </div>
              <div className="text-sm font-bold text-slate-800">
                {t.hero.metrics.books.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.hero.metrics.books.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Partners Logo Strip (Immediately visible on Hero) */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <div className="text-center sm:text-left mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              Dipercaya oleh Dinas Pendidikan, Perguruan Tinggi, dan Jaringan Sekolah Nasional:
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-center">
            {[
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
            ].map((p, idx) => (
              <div
                key={idx}
                className="h-24 bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-xs hover:border-teal-400 p-2.5 flex flex-col items-center justify-center transition-all group"
                title={p.name}
              >
                <div className="relative h-11 w-full max-w-[85px] flex items-center justify-center">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 mt-1.5 line-clamp-1 group-hover:text-navy-950 text-center">
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
