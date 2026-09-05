"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail, Globe, Menu, X, ArrowRight, ChevronDown } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Institutional Top Bar (like Edusoft & ETS) */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-navy-900 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-200 tracking-wide">
              {t.topBar.tagline}
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">
              CSI EDU — Catalyst for School Improvement
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.topBar.phone}</span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border-l border-slate-700 pl-4 font-semibold">
              <button
                type="button"
                onClick={() => setLanguage("id")}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  language === "id"
                    ? "text-white font-bold underline underline-offset-4 decoration-amber-500"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ID
              </button>
              <span className="text-slate-600">/</span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  language === "en"
                    ? "text-white font-bold underline underline-offset-4 decoration-amber-500"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation */}
      <div
        className={`bg-white transition-all duration-200 ${
          isScrolled
            ? "shadow-md border-b border-slate-200 py-3"
            : "border-b border-slate-200/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Corporate Brand Identity */}
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center text-white border border-navy-800 shadow-xs group-hover:bg-navy-800 transition-colors">
                <span className="font-serif font-black text-xl text-amber-400">C</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif font-black text-xl text-navy-900 tracking-tight">
                    CSI EDU
                  </span>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-slate-500">
                    Indonesia
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                  Catalyst for School Improvement
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-slate-700">
              <a
                href="#solutions"
                className="hover:text-navy-900 hover:font-semibold transition-colors"
              >
                {t.nav.solutions}
              </a>
              <a
                href="#products"
                className="hover:text-navy-900 hover:font-semibold transition-colors"
              >
                {t.nav.products}
              </a>
              <a
                href="#methodology"
                className="hover:text-navy-900 hover:font-semibold transition-colors"
              >
                {t.nav.methodology}
              </a>
              <a
                href="#planner"
                className="text-navy-900 font-bold hover:text-navy-700 transition-colors"
              >
                {t.nav.planner}
              </a>
              <a
                href="#case-studies"
                className="hover:text-navy-900 hover:font-semibold transition-colors"
              >
                {t.nav.caseStudies}
              </a>
              <a
                href="#articles"
                className="hover:text-navy-900 hover:font-semibold transition-colors"
              >
                {t.nav.articles}
              </a>
            </nav>

            {/* Right Action */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={openModal}
                className="px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-bold tracking-wide transition-colors shadow-xs flex items-center gap-2"
              >
                <span>{t.nav.contactBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => setLanguage(language === "id" ? "en" : "id")}
                className="px-2.5 py-1 text-xs font-bold rounded border border-slate-300 text-slate-700"
              >
                {language.toUpperCase()}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-slate-700 hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-300 shadow-xl px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-800">
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              {t.nav.solutions}
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              {t.nav.products}
            </a>
            <a
              href="#methodology"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              {t.nav.methodology}
            </a>
            <a
              href="#planner"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded bg-slate-50 font-bold text-navy-900"
            >
              {t.nav.planner}
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              {t.nav.caseStudies}
            </a>
            <a
              href="#articles"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-slate-50"
            >
              {t.nav.articles}
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm rounded-lg text-center flex items-center justify-center gap-2"
            >
              <span>{t.nav.contactBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
