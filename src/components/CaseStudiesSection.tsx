"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Building, Quote, CheckCircle2 } from "lucide-react";

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
      </div>
    </section>
  );
}
