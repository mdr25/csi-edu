"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, MapPin, ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md">
                <span className="font-black text-xl tracking-tighter">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  CSI <span className="text-emerald-400">EDU</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                  Catalyst for School Improvement
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Jakarta & Depok, Jawa Barat, Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:hello@csi-edu.id" className="hover:text-emerald-300">
                  hello@csi-edu.id
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+62 21 5050 1234 / +62 812 3456 7890</span>
              </div>
            </div>
          </div>

          {/* Col 2: Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.linksProducts}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://csi-academy.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
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
                  className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
                >
                  <span>NF Testing Center</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  School Reading System (SRS)
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-emerald-400 transition-colors">
                  Siklus Mutu Sekolah
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.linksResources}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                  Kalkulator Dampak Sekolah
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-emerald-400 transition-colors">
                  Artikel & Riset Pembelajaran
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-emerald-400 transition-colors">
                  Studi Kasus & Kisah Mitra
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-emerald-400 transition-colors">
                  Standar Mutu Kurikulum
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: School Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Satuan Pendidikan
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-400">
                • Sekolah Dasar & Madrasah Ibtidaiyah (SD/MI)
              </li>
              <li className="text-slate-400">
                • Sekolah Menengah Pertama (SMP/MTs)
              </li>
              <li className="text-slate-400">
                • SMA, SMK, & Madrasah Aliyah (MA)
              </li>
              <li className="text-slate-400">
                • Jaringan Yayasan Pendidikan Nusantara
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>

          <button
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
