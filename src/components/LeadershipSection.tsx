"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Award, CheckCircle2, Quote, Shield, ArrowRight, BookOpen, GraduationCap } from "lucide-react";

export default function LeadershipSection() {
  const { t, openModal } = useLanguage();

  return (
    <section id="expert" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-csi-teal-700 bg-teal-50 px-3 py-1 rounded border border-teal-200">
            <Award className="w-3.5 h-3.5" />
            <span>{t.leadership.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-navy-950 tracking-tight leading-tight">
            {t.leadership.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.leadership.subtitle}
          </p>
        </div>

        {/* Lead Expert Card: Dr. Rahmat Syehani */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 via-navy-950 to-teal-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden text-white">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
            {/* Portrait Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-xl overflow-hidden border-2 border-teal-500/30 shadow-2xl bg-slate-900">
                <Image
                  src="/img/dr-rahmat-jas.png"
                  alt="Dr. Rahmat Syehani — School Transformation Expert"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="text-lg font-serif font-bold text-white tracking-wide">
                    {t.leadership.expertName}
                  </div>
                  <div className="text-xs text-amber-400 font-semibold mt-0.5">
                    {t.leadership.expertRole}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-teal-400" />
                  <span>Doctor of Education</span>
                </span>
                <span>•</span>
                <span className="text-teal-300 font-medium">20+ Tahun Pengalaman</span>
              </div>
            </div>

            {/* Profile Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 px-3 py-1 rounded border border-amber-500/30">
                  {t.leadership.expertBadge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mt-3">
                  {t.leadership.expertName}
                </h3>
                <div className="text-sm font-semibold text-teal-300 mt-1">
                  {t.leadership.expertRole}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {t.leadership.expertBio}
              </p>

              {/* Key Competencies & Track Record */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Fokus Kepakaran & Riset:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  {t.leadership.expertPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expert Quote Box */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-teal-500/30 space-y-2">
                <Quote className="w-5 h-5 text-amber-400/60" />
                <p className="text-xs sm:text-sm italic text-slate-300 leading-relaxed">
                  "{t.leadership.expertQuote}"
                </p>
                <div className="text-[11px] font-bold text-amber-400">
                  — {t.leadership.expertName}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-csi-gold hover:bg-amber-500 text-navy-950 font-bold text-xs sm:text-sm transition-colors shadow-lg shadow-amber-500/10"
                >
                  <span>{t.leadership.consultationCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Governance Associate Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-csi-teal-700 bg-teal-100/60 px-2.5 py-0.5 rounded">
              <Shield className="w-3.5 h-3.5" />
              <span>{t.leadership.associateTitle}</span>
            </div>
            <h4 className="text-lg font-serif font-bold text-navy-950">
              {t.leadership.associateName}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.leadership.associateBio}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#learning-brewing"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 transition-colors"
            >
              <span>Pelajari Workshop Hukum Sekolah</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
