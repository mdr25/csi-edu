"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";

export default function CtaSection() {
  const { t, openModal } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-950 via-slate-950 to-teal-900 rounded-3xl p-10 sm:p-14 lg:p-16 text-white shadow-2xl shadow-teal-950/20 border border-teal-900/50">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <span>Kemitraan Pendidikan</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
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
                className="px-8 py-4 rounded-xl bg-csi-gold hover:bg-amber-500 text-navy-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2"
              >
                <span>{t.ctaSection.btnPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/6285695042915?text=Halo%20CSI%20EDU,%20kami%20ingin%20berkonsultasi%20mengenai%20kemitraan%20program%20sekolah."
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
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
