"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Quote, Star, Building, CheckCircle2 } from "lucide-react";

export default function PartnersSection() {
  const { language, t } = useLanguage();

  const testimonials = [
    {
      quoteId:
        "Komunitas guru di CSI Academy membuat para pendidik kami terus belajar aktif bahkan setelah pelatihan berakhir. Ini adalah rumah belajar profesional yang sangat dibutuhkan guru kami.",
      quoteEn:
        "The teacher community in CSI Academy keeps our teachers actively learning long after each course ends. It is the professional home we truly needed.",
      name: "Lina Marlina",
      roleId: "Guru Bahasa Inggris, MTs Al-Furqan Yogyakarta",
      roleEn: "English Teacher, MTs Al-Furqan Yogyakarta",
      initial: "L",
      color: "from-emerald-500 to-teal-700",
    },
    {
      quoteId:
        "Yang membedakan CSI EDU adalah mereka mendengarkan dulu kebutuhan spesifik yayasan kami. Kemitraannya terasa seperti merancang solusi bersama, bukan sekadar membeli software di rak.",
      quoteEn:
        "What sets CSI EDU apart is that they listen first. The partnership felt like co-designing a custom solution for our foundation, not buying an off-the-shelf product.",
      name: "Drs. Bambang Sutrisno",
      roleId: "Direktur Yayasan, Yayasan Pendidikan Nusantara",
      roleEn: "School Foundation Director, Yayasan Pendidikan Nusantara",
      initial: "B",
      color: "from-blue-600 to-indigo-800",
    },
    {
      quoteId:
        "Volume dan minat baca siswa kami melonjak 3 kali lipat dalam satu semester berkat School Reading System (SRS). Sistem gamifikasi dan poin membuat kemajuan anak terlihat dan dihargai.",
      quoteEn:
        "Our students' reading volume tripled in just one semester with the School Reading System. The point system made progress visible and celebrated.",
      name: "Ahmad Fauzi, S.Pd.",
      roleId: "Koordinator Literasi, SD Islam Al-Hikmah",
      roleEn: "Literacy Coordinator, SD Islam Al-Hikmah",
      initial: "A",
      color: "from-amber-500 to-orange-700",
    },
    {
      quoteId:
        "Untuk pertama kalinya, data asesmen memberi kami petunjuk apa yang harus dilakukan guru berikutnya, bukan cuma angka nilai mati. Siklus evaluasi data CSI EDU kini jadi budaya kerja sekolah kami.",
      quoteEn:
        "For the first time, our assessment data tells us what teachers should do next, not just raw exam scores. The CSI EDU data cycle is now part of how our school works.",
      name: "Maria Simatupang",
      roleId: "Wakil Kepala Sekolah Bidang Kurikulum, SMA Santo Yosef",
      roleEn: "Vice Principal for Curriculum, SMA Santo Yosef Medan",
      initial: "M",
      color: "from-purple-600 to-slate-900",
    },
  ];

  const institutions = [
    "Dinas Pendidikan Kota Surabaya",
    "Ikatan Guru Indonesia (IGI)",
    "Universitas Pendidikan Indonesia (UPI)",
    "Yayasan Pendidikan Nusantara",
    "Jaringan Sekolah Islam Terpadu",
    "SMA Santo Yosef",
    "SMP Negeri 2 Bandung",
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            {t.testimonials.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Institutional Partner Badges Bar */}
        <div className="mt-12 py-6 px-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
            Dipercaya & Berkolaborasi Bersama Lembaga Pendidikan
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {institutions.map((inst, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors"
              >
                <Building className="w-3.5 h-3.5 text-emerald-600" />
                <span>{inst}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg shadow-slate-200/50 flex flex-col justify-between relative hover:border-emerald-300 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200" />
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{language === "id" ? item.quoteId : item.quoteEn}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${item.color} text-white font-bold flex items-center justify-center text-base shadow-sm shrink-0`}
                >
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                  </h4>
                  <p className="text-xs text-slate-500">
                    {language === "id" ? item.roleId : item.roleEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
