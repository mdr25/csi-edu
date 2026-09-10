"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Check, FileText } from "lucide-react";

export default function SolutionsSection() {
  const { t, openModal } = useLanguage();

  return (
    <section id="solutions" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <span>{t.solutions.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.solutions.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t.solutions.subtitle}
          </p>
        </div>

        {/* 2x2 Corporate Solutions Grid (Clean, Dignified, No generic icon spam) */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {t.solutions.items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-950/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header item */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="w-8 h-8 rounded-xl bg-teal-50 text-teal-800 font-extrabold text-xs flex items-center justify-center border border-teal-100/80">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80">
                    {item.subtitle}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mb-3">
                    {item.target}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Komponen & Luaran Program:
                  </div>
                  <ul className="space-y-2">
                    {item.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-navy-100 text-navy-900 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-navy-700 transition-colors"
                >
                  <span>Konsultasikan Program Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
