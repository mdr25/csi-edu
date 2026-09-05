"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";

export default function CtaSection() {
  const { t, openModal } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 rounded-2xl p-8 sm:p-12 lg:p-14 text-white border border-navy-900 shadow-xl">
          <div className="max-w-3xl space-y-5">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Kemitraan Pendidikan
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight leading-tight text-white">
              {t.ctaSection.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.ctaSection.description}
            </p>

            {/* Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={openModal}
                className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>{t.ctaSection.btnPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/6281234567890?text=Halo%20CSI%20EDU,%20kami%20ingin%20berkonsultasi%20mengenai%20kemitraan%20program%20sekolah."
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white border border-navy-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>{t.ctaSection.btnSecondary}</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-navy-900">
              <span>• Pemaparan program tersedia daring & luring</span>
              <span>• Disesuaikan dengan kalender akademik sekolah</span>
              <span>• Tanpa ikatan komitmen awal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
