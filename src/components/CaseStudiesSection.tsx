"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Building, Quote, CheckCircle2, Camera } from "lucide-react";

export default function CaseStudiesSection() {
  const { t } = useLanguage();

  const institutionalPartners = [
    "Dinas Pendidikan Kota Surabaya",
    "Ikatan Guru Indonesia (IGI)",
    "Universitas Pendidikan Indonesia (UPI)",
    "Yayasan Pendidikan Nusantara",
    "Jaringan Sekolah Islam Terpadu",
    "SMA Santo Yosef Medan",
    "SMP Negeri 2 Bandung",
    "SD Islam Terpadu Al-Hikmah",
  ];

  return (
    <section id="case-studies" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-navy-800">
            {t.caseStudies.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-navy-950 tracking-tight">
            {t.caseStudies.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.caseStudies.subtitle}
          </p>
        </div>

        {/* Institutional Partner Name Bar */}
        <div className="mt-10 py-5 px-6 bg-slate-50 rounded-xl border border-slate-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center sm:text-left">
            Institusi & Jaringan Sekolah yang Telah Berkolaborasi
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {institutionalPartners.map((name, i) => (
              <div
                key={i}
                className="px-3 py-1.5 rounded bg-white border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5"
              >
                <Building className="w-3 h-3 text-navy-800" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Case Study Columns */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {t.caseStudies.stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-navy-800/40" />

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{story.quote}"
                </p>

                {/* Measurable Outcome Box */}
                <div className="p-3 bg-white rounded border border-slate-200 text-xs text-navy-950">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Capaian Terukur:
                  </div>
                  <div className="font-semibold text-emerald-700 mt-0.5">
                    {story.outcome}
                  </div>
                </div>
              </div>

              {/* Author & School info */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="font-serif font-bold text-navy-950 text-sm">
                  {story.author}
                </div>
                <div className="text-xs text-slate-600 font-medium">{story.role}</div>
                <div className="text-xs text-slate-500">{story.institution}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Field Gallery Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-csi-teal-700 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                <Camera className="w-3.5 h-3.5" />
                <span>Dokumentasi Pelatihan Lapangan</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-950 mt-2">
                Aktivitas Nyata Pendampingan di Satuan Pendidikan Mitra
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Fasilitasi langsung oleh instruktur senior CSI EDU bersama para kepala sekolah, guru, dan tim kurikulum di berbagai kota.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow">
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src="/img/workshop-leadership.jpeg"
                  alt="Sesi Kepemimpinan & Produktivitas Organisasi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                  Leadership & Productivity
                </div>
                <div className="font-serif font-bold text-navy-950 text-sm mt-1">
                  Dampak Kepemimpinan terhadap Produktivitas Satuan Pendidikan
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Sesi paparan interaktif bagi pimpinan sekolah dan yayasan
                </div>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow">
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src="/img/workshop-discussion.jpeg"
                  alt="Forum Diskusi Reflektif Pimpinan Sekolah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-csi-teal-700">
                  Reflektif & Evaluatif
                </div>
                <div className="font-serif font-bold text-navy-950 text-sm mt-1">
                  Check Point Kepemimpinan: Mengatasi Hambatan Pertumbuhan Sekolah
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Bedah kasus perilaku manajemen dan iklim kerja guru di sekolah
                </div>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow">
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src="/img/workshop-session.jpeg"
                  alt="Penerapan Islamic Leadership di Sekolah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-csi-orange">
                  Masterclass
                </div>
                <div className="font-serif font-bold text-navy-950 text-sm mt-1">
                  Islamic Educational Leadership & 5 Levels of Leadership
                </div>
                <div className="text-xs text-slate-500 mt-1">
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
