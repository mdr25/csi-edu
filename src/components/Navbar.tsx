"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Menu, X, Globe, ArrowRight, BookOpen } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage, t, openModal } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/80 backdrop-blur-md py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <span className="font-black text-xl tracking-tighter">C</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  CSI <span className="text-emerald-600">EDU</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                  Ecosystem
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                Catalyst for School Improvement
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#ecosystem" className="hover:text-emerald-600 transition-colors">
              {t.nav.ecosystem}
            </a>
            <a href="#products" className="hover:text-emerald-600 transition-colors">
              {t.nav.products}
            </a>
            <a
              href="#calculator"
              className="flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50/80 px-3 py-1.5 rounded-full border border-emerald-200/60 hover:bg-emerald-100/70 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              {t.nav.calculator}
            </a>
            <a href="#articles" className="hover:text-emerald-600 transition-colors">
              {t.nav.articles}
            </a>
            <a href="#testimonials" className="hover:text-emerald-600 transition-colors">
              {t.nav.testimonials}
            </a>
          </nav>

          {/* Right Action: Language toggle & Request Demo CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === "id"
                    ? "bg-white text-emerald-700 shadow-sm font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                🇮🇩 ID
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === "en"
                    ? "bg-white text-emerald-700 shadow-sm font-bold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Request Demo Button */}
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm hover:shadow-md hover:shadow-emerald-600/20 active:scale-95"
            >
              <span>{t.nav.requestDemo}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLanguage(language === "id" ? "en" : "id")}
              className="p-2 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-700 flex items-center gap-1"
            >
              <Globe className="w-3.5 h-3.5" />
              {language.toUpperCase()}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-700">
            <a
              href="#ecosystem"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              {t.nav.ecosystem}
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              {t.nav.products}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold flex items-center justify-between"
            >
              <span>{t.nav.calculator}</span>
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </a>
            <a
              href="#articles"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              {t.nav.articles}
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              {t.nav.testimonials}
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>{t.nav.requestDemo}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
