"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Coffee, MapPin, Calendar, Users, ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export default function LearningBrewingSection() {
  const { t, openModal } = useLanguage();

  return (
    <section id="learning-brewing" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200">
              <Coffee className="w-3.5 h-3.5" />
              <span>{t.learningBrewing.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-navy-950 tracking-tight">
              {t.learningBrewing.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {t.learningBrewing.subtitle}
            </p>
          </div>

          {/* Venue Callout */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1.5 shrink-0 max-w-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-csi-teal-700">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.learningBrewing.venueTag}</span>
            </div>
            <div className="text-xs text-slate-700 font-semibold leading-snug">
              {t.learningBrewing.venueLocation}
            </div>
          </div>
        </div>

        {/* 3 Executive Forum Topics */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Legal Awareness */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/img/event-legal-awareness.jpeg"
                  alt="Flyer Urgensi Legal Awareness Sekolah"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-csi-teal-700 text-white px-2.5 py-1 rounded shadow-xs">
                    Tata Kelola & Hukum
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs font-semibold text-amber-600">
                  Pemateri: Dr. Rahmat Syehani & Achmad Fatoni, S.E., SH
                </div>
                <h3 className="text-lg font-serif font-bold text-navy-950 leading-snug">
                  Urgensi Legal Awareness & Pemetaan Titik Rawan Risiko Hukum Sekolah
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Membangun kesadaran bahwa regulasi dan hukum bukan beban administrasi, melainkan instrumen pelindung institusi sekolah serta mitigasi sengketa yayasan.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Grand Depok City</span>
                <span className="font-bold text-csi-teal-700">Open for Leaders</span>
              </div>
            </div>
          </div>

          {/* Card 2: Transforming School - Culture of Thinking */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/img/event-learning-brewing.jpeg"
                  alt="Workshop Transforming School Culture of Thinking"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-white px-2.5 py-1 rounded shadow-xs">
                    Transformasi Kepemimpinan
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs font-semibold text-amber-600">
                  Pemateri: Dr. Rahmat Syehani
                </div>
                <h3 className="text-lg font-serif font-bold text-navy-950 leading-snug">
                  Transforming School: Leadership for a Culture of Thinking & Problem Solving
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strategi menggeser kultur belajar guru dan siswa dari hafalan mekanistik menuju habituasi bernalar kritis dan pemecahan masalah nyata.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Grand Depok City</span>
                <span className="font-bold text-amber-600">Executive Batch</span>
              </div>
            </div>
          </div>

          {/* Card 3: The Law of Process & 5 Levels of Leadership */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src="/img/workshop-hero.jpeg"
                  alt="Masterclass The Law of Process & 5 Levels of Leadership"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-csi-orange text-white px-2.5 py-1 rounded shadow-xs">
                    Kapasitas Pimpinan
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="text-xs font-semibold text-amber-600">
                  Pemateri: Dr. Rahmat Syehani
                </div>
                <h3 className="text-lg font-serif font-bold text-navy-950 leading-snug">
                  The Law of Process: 5 Levels of Educational Leadership
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evaluasi dan refleksi mendalam posisi level kepemimpinan kepala sekolah untuk menembus batas stagnasi manajemen dan memacu produktivitas tim.
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Grand Depok City</span>
                <span className="font-bold text-csi-orange">Masterclass</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Booking & Contact Action Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-900 to-navy-950 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jadwal & Kuota Terbatas</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Ingin Mengikuti Diskusi Eksekutif Learning & Brewing Berikutnya?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Terbuka untuk kepala sekolah, pengurus yayasan, wakil kurikulum, dan pengawas pendidikan. Dapatkan wawasan langsung dari Dr. Rahmat Syehani dan tim pakar CSI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-csi-gold hover:bg-amber-500 text-navy-950 font-bold text-xs sm:text-sm transition-colors shadow-xs"
            >
              {t.learningBrewing.registerCta}
            </button>

            <a
              href="https://wa.me/6285695042915?text=Halo%20CSI%20EDU,%20saya%20ingin%20mendapatkan%20informasi%20jadwal%20dan%20pendaftaran%20forum%20Learning%20%26%20Brewing."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: 0856-9504-2915</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
