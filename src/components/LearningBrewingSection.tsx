"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Coffee, MapPin, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export default function LearningBrewingSection() {
  const { t, openModal } = useLanguage();

  return (
    <section id="learning-brewing" className="py-24 sm:py-28 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200/80">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Coffee className="w-3.5 h-3.5" />
              <span>{t.learningBrewing.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.learningBrewing.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {t.learningBrewing.subtitle}
            </p>
          </div>

          {/* Venue Callout */}
          <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-1.5 shrink-0 max-w-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
              <MapPin className="w-3.5 h-3.5 text-teal-700" />
              <span>{t.learningBrewing.venueTag}</span>
            </div>
            <div className="text-xs text-slate-700 font-semibold leading-relaxed">
              {t.learningBrewing.venueLocation}
            </div>
          </div>
        </div>

        {/* 3 Executive Forum Topics */}
        <div className="mt-14 grid md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Legal Awareness */}
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-teal-950/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src="/img/event-legal-awareness.jpeg"
                  alt="Flyer Urgensi Legal Awareness Sekolah"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-800 text-white px-3 py-1 rounded-full shadow-xs">
                    Tata Kelola & Hukum
                  </span>
                </div>
              </div>

              <div className="p-7 space-y-3">
                <div className="text-xs font-semibold text-amber-700">
                  Pemateri: Dr. Rahmat Syehani & Achmad Fatoni, S.E., SH
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  Urgensi Legal Awareness & Pemetaan Titik Rawan Risiko Hukum Sekolah
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Membangun kesadaran bahwa regulasi dan hukum bukan beban administrasi, melainkan instrumen pelindung institusi sekolah serta mitigasi sengketa yayasan.
                </p>
              </div>
            </div>

            <div className="p-7 pt-0">
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Grand Depok City</span>
                <span className="font-bold text-teal-800">Open for Leaders</span>
              </div>
            </div>
          </div>

          {/* Card 2: Transforming School - Culture of Thinking */}
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-amber-950/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src="/img/event-learning-brewing.jpeg"
                  alt="Workshop Transforming School Culture of Thinking"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-600 text-white px-3 py-1 rounded-full shadow-xs">
                    Transformasi Kepemimpinan
                  </span>
                </div>
              </div>

              <div className="p-7 space-y-3">
                <div className="text-xs font-semibold text-amber-700">
                  Pemateri: Dr. Rahmat Syehani
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  Transforming School: Leadership for a Culture of Thinking & Problem Solving
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Strategi menggeser kultur belajar guru dan siswa dari hafalan mekanistik menuju habituasi bernalar kritis dan pemecahan masalah nyata.
                </p>
              </div>
            </div>

            <div className="p-7 pt-0">
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Grand Depok City</span>
                <span className="font-bold text-amber-700">Executive Batch</span>
              </div>
            </div>
          </div>

          {/* Card 3: The Law of Process & 5 Levels of Leadership */}
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-orange-950/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src="/img/workshop-hero.jpeg"
                  alt="Masterclass The Law of Process & 5 Levels of Leadership"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-csi-orange text-white px-3 py-1 rounded-full shadow-xs">
                    Kapasitas Pimpinan
                  </span>
                </div>
              </div>

              <div className="p-7 space-y-3">
                <div className="text-xs font-semibold text-amber-700">
                  Pemateri: Dr. Rahmat Syehani
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  The Law of Process: 5 Levels of Educational Leadership
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Evaluasi dan refleksi mendalam posisi level kepemimpinan kepala sekolah untuk menembus batas stagnasi manajemen dan memacu produktivitas tim.
                </p>
              </div>
            </div>

            <div className="p-7 pt-0">
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Grand Depok City</span>
                <span className="font-bold text-csi-orange">Masterclass</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Booking & Contact Action Bar */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-teal-950 via-slate-950 to-teal-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-teal-950/20">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jadwal & Kuota Terbatas</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ingin Mengikuti Diskusi Eksekutif Learning & Brewing Berikutnya?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-normal">
              Terbuka untuk kepala sekolah, pengurus yayasan, wakil kurikulum, dan pengawas pendidikan. Dapatkan wawasan langsung dari Dr. Rahmat Syehani dan tim pakar CSI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-csi-gold hover:bg-amber-500 text-navy-950 font-bold text-xs sm:text-sm transition-colors shadow-lg shadow-amber-500/10"
            >
              {t.learningBrewing.registerCta}
            </button>

            <a
              href="https://wa.me/6285695042915?text=Halo%20CSI%20EDU,%20saya%20ingin%20mendapatkan%20informasi%20jadwal%20dan%20pendaftaran%20forum%20Learning%20%26%20Brewing."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors"
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
