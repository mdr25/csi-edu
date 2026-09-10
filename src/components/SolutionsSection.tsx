"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function SolutionsSection() {
  const { t, openModal } = useLanguage();

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-800">
            <span>{t.solutions.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {t.solutions.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.solutions.subtitle}
          </p>
        </div>

        {/* Open, Borderless 2x2 Editorial Layout (No card boxes, no borders) */}
        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-16">
          {t.solutions.items.map((item, idx) => (
            <div
              key={item.id}
              className="pt-6 border-t border-slate-200/80 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-amber-800">
                    {item.subtitle}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs text-teal-800 font-medium mt-1">
                    {item.target}
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

                {/* Minimalist Deliverables List - No checkmark icon spam */}
                <div className="pt-2 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Komponen Program:
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {item.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="text-teal-700 font-bold select-none">—</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Minimal Clean Action Link */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 hover:text-teal-950 transition-colors group"
                >
                  <span>Konsultasikan Program Ini</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
