"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Search, GraduationCap, BookOpen, LineChart, ArrowRight } from "lucide-react";

export default function EcosystemCycle() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      badge: "Tahap 1",
      badgeEn: "Phase 1",
      color: "from-blue-500 to-indigo-600",
      lightBg: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      data: t.ecosystem.cycle.step1,
    },
    {
      icon: GraduationCap,
      badge: "Tahap 2",
      badgeEn: "Phase 2",
      color: "from-emerald-500 to-teal-600",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      data: t.ecosystem.cycle.step2,
    },
    {
      icon: BookOpen,
      badge: "Tahap 3",
      badgeEn: "Phase 3",
      color: "from-amber-500 to-orange-600",
      lightBg: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
      data: t.ecosystem.cycle.step3,
    },
    {
      icon: LineChart,
      badge: "Tahap 4",
      badgeEn: "Phase 4",
      color: "from-purple-500 to-indigo-600",
      lightBg: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      data: t.ecosystem.cycle.step4,
    },
  ];

  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            {t.ecosystem.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.ecosystem.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.ecosystem.description}
          </p>
        </div>

        {/* 4 Steps Grid with Connectors */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl ${step.lightBg} ${step.textColor} flex items-center justify-center font-bold shadow-xs group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full border ${step.borderColor} ${step.lightBg} ${step.textColor}`}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {step.data.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.data.desc}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Ecosystem */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              Ingin Mengetahui Posisi Kesiapan Sekolah Anda Saat Ini?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              Gunakan kalkulator simulasi dampak kami untuk memproyeksikan target peningkatan literasi dan guru sekolah Anda.
            </p>
          </div>
          <a
            href="#calculator"
            className="shrink-0 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
          >
            Buka Kalkulator Sekolah →
          </a>
        </div>
      </div>
    </section>
  );
}
