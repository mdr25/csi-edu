"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 text-xs border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-900">
          {/* Col 1: Institutional Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-3">
              <div className="bg-white p-2.5 rounded-xl inline-flex items-center shadow-xs border border-slate-700/50">
                <div className="relative h-9 w-44">
                  <Image
                    src="/img/logo/logo-csi.png"
                    alt="Catalyst for School Improvement"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="text-[11px] uppercase tracking-wider text-teal-300 font-semibold">
                Catalyst for School Improvement
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              {t.footer.description}
            </p>

            <div className="pt-2 space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href="mailto:kemitraan@csi-edu.id" className="hover:text-white">
                  kemitraan@csi-edu.id / hello@csi-edu.id
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href="https://wa.me/6285695042915" target="_blank" rel="noreferrer" className="hover:text-white">
                  +62 856 9504 2915 (Hotline Kemitraan)
                </a>
              </div>
              <div className="text-slate-400 pt-1">
                Instagram: <a href="https://instagram.com/csi.education" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">@csi.education</a>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold uppercase tracking-wider text-white text-xs">
              {t.footer.colSolutions}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Pengembangan Profesional Guru
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  School Reading System (SRS)
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Asesmen Diagnostik & Analisis Belajar
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Konsultasi Rapor Pendidikan & Yayasan
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold uppercase tracking-wider text-white text-xs">
              {t.footer.colPrograms}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="https://csi-academy.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>CSI Academy</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://nf-testingcenter.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>NF Testing Center</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#planner" className="hover:text-white transition-colors">
                  Simulasi Program
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Studi Kasus Sekolah
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Lembaga (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold uppercase tracking-wider text-white text-xs">
              {t.footer.colCompany}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#expert" className="hover:text-white transition-colors">
                  Dewan Pakar
                </a>
              </li>
              <li>
                <a href="#learning-brewing" className="hover:text-white transition-colors text-amber-300">
                  Learning & Brewing
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">
                  Metodologi Kemitraan
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-white transition-colors">
                  Publikasi & Riset
                </a>
              </li>
              <li>
                <a
                  href="https://csi-edu.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Website Resmi</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
