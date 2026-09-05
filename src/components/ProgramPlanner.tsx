"use client";

import React, { useState, useId } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Send, Check, Building2, Users, GraduationCap, Clock } from "lucide-react";

type InstitutionType = "sd" | "smp" | "sma" | "yayasan";
type PriorityType = "literacy" | "teacher" | "management";

export default function ProgramPlanner() {
  const { t, openModal } = useLanguage();

  const [institution, setInstitution] = useState<InstitutionType>("smp");
  const [teachersCount, setTeachersCount] = useState<number>(35);
  const [studentsCount, setStudentsCount] = useState<number>(450);
  const [priority, setPriority] = useState<PriorityType>("literacy");

  const teachersInputId = useId();
  const studentsInputId = useId();

  // Calculated estimates based on verified CSI EDU historical partner school benchmarks
  const booksPerStudent = institution === "sd" ? 18 : institution === "smp" ? 14 : 10;
  const projectedTotalBooks = studentsCount * booksPerStudent;
  const projectedCertifiedTeachers = Math.round(teachersCount * 0.75);
  const projectedANBKGain = priority === "literacy" ? "+35%" : "+25%";

  const getProgramBlueprint = () => {
    if (priority === "literacy") {
      return {
        name: "Program Akselerasi Literasi & School Reading System",
        duration: "1 Tahun Ajaran (2 Semester)",
        scope: "Implementasi SRS untuk seluruh rombongan belajar, penyediaan bank kuis digital, dan pelatihan guru pembina literasi.",
        components: [
          "Pengukuran baseline literasi awal semester",
          "Aktivasi akun SRS untuk seluruh siswa dan wali kelas",
          "Pelatihan guru penggerak literasi sekolah (3 sesi workshop)",
          "Evaluasi berkala dan pelaporan rapor literasi ke dinas/yayasan",
        ],
      };
    }
    if (priority === "teacher") {
      return {
        name: "Program Peningkatan Kompetensi Guru & Kesiapan PPG (CSI Academy)",
        duration: "1 Semester Pendampingan Intensif",
        scope: "Pelatihan cohort daring dan pendampingan praktik kelas untuk penguatan perangkat ajar dan kelulusan uji sertifikasi guru.",
        components: [
          "Audit kompetensi pedagogik dan perangkat ajar guru",
          "Pelatihan modul berdiferensiasi dan pemanfaatan AI mengajar",
          "Supervisi klinis dan telaah portofolio pembelajaran",
          "Bimbingan simulasi ujian kompetensi sertifikasi pendidik",
        ],
      };
    }
    return {
      name: "Kemitraan Transformasi Mutu Pendidikan Terpadu",
      duration: "Kemitraan Multitahun (1–3 Tahun)",
      scope: "Pendampingan menyeluruh mencakup CSI Academy untuk seluruh tenaga pendidik, sistem literasi SRS siswa, dan fasilitasi tata kelola yayasan.",
      components: [
        "Penyusunan Perencanaan Berbasis Data (PBD) dari Rapor Pendidikan",
        "Implementasi menyeluruh CSI Academy dan NF Testing Center",
        "Pendampingan manajemen kurikulum bersama pengurus yayasan",
        "Audit mutu berkala untuk akreditasi satuan pendidikan",
      ],
    };
  };

  const blueprint = getProgramBlueprint();

  return (
    <section id="planner" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-navy-800">
            {t.planner.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-navy-950 tracking-tight">
            {t.planner.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.planner.subtitle}
          </p>
        </div>

        {/* Planner Layout */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls (Left 6 cols) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-300 shadow-xs space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-base font-serif font-bold text-navy-950">
                Profil Satuan Pendidikan Anda
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Sesuaikan angka dengan estimasi kondisi sekolah saat ini
              </p>
            </div>

            {/* School Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                {t.planner.schoolTypeLabel}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(
                  [
                    { id: "sd" as const, label: "SD / MI" },
                    { id: "smp" as const, label: "SMP / MTs" },
                    { id: "sma" as const, label: "SMA / SMK" },
                    { id: "yayasan" as const, label: "Yayasan" },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setInstitution(item.id)}
                    className={`py-2 px-3 text-xs font-bold rounded border transition-colors ${
                      institution === item.id
                        ? "bg-navy-900 text-white border-navy-900"
                        : "bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Teachers Count */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={teachersInputId}
                  className="text-xs font-bold text-slate-700 uppercase tracking-wide"
                >
                  {t.planner.teachersLabel}
                </label>
                <span className="text-xs font-bold text-navy-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {teachersCount} Guru
                </span>
              </div>
              <input
                id={teachersInputId}
                type="range"
                min="10"
                max="200"
                step="5"
                value={teachersCount}
                onChange={(e) => setTeachersCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded appearance-none cursor-pointer accent-navy-900"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>10 Guru</span>
                <span>200+ Guru</span>
              </div>
            </div>

            {/* Students Count */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={studentsInputId}
                  className="text-xs font-bold text-slate-700 uppercase tracking-wide"
                >
                  {t.planner.studentsLabel}
                </label>
                <span className="text-xs font-bold text-navy-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {studentsCount} Siswa
                </span>
              </div>
              <input
                id={studentsInputId}
                type="range"
                min="100"
                max="2000"
                step="50"
                value={studentsCount}
                onChange={(e) => setStudentsCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded appearance-none cursor-pointer accent-navy-900"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>100 Siswa</span>
                <span>2.000+ Siswa</span>
              </div>
            </div>

            {/* Strategic Priority */}
            <div className="space-y-2 pt-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                {t.planner.priorityLabel}
              </label>
              <div className="space-y-2">
                {(
                  [
                    { id: "literacy" as const, text: t.planner.priorities.literacy },
                    { id: "teacher" as const, text: t.planner.priorities.teacher },
                    { id: "management" as const, text: t.planner.priorities.management },
                  ] as const
                ).map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setPriority(opt.id)}
                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer text-xs transition-colors ${
                      priority === opt.id
                        ? "bg-navy-50/60 border-navy-800 text-navy-950 font-semibold"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name="priority"
                      checked={priority === opt.id}
                      onChange={() => setPriority(opt.id)}
                      className="mt-0.5 accent-navy-900"
                    />
                    <span>{opt.text}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Blueprint Output (Right 6 cols) */}
          <div className="lg:col-span-6 bg-navy-950 text-white p-6 sm:p-8 rounded-xl border border-navy-900 shadow-xl space-y-6">
            <div className="border-b border-navy-800 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                {t.planner.outputTitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                {blueprint.name}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Estimasi Durasi: <strong>{blueprint.duration}</strong></span>
              </div>
            </div>

            {/* Projected Key Indicators */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-navy-900/80 p-3.5 rounded-lg border border-navy-800">
                <div className="text-slate-400 text-[11px]">Target Buku Tuntas Dibaca</div>
                <div className="text-2xl font-serif font-bold text-white mt-1">
                  {projectedTotalBooks.toLocaleString("id-ID")}+
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Buku teruji pemahamannya</div>
              </div>

              <div className="bg-navy-900/80 p-3.5 rounded-lg border border-navy-800">
                <div className="text-slate-400 text-[11px]">Kesiapan Sertifikasi Guru</div>
                <div className="text-2xl font-serif font-bold text-emerald-400 mt-1">
                  {projectedCertifiedTeachers} Guru
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Portofolio Kurikulum Merdeka</div>
              </div>

              <div className="bg-navy-900/80 p-3.5 rounded-lg border border-navy-800">
                <div className="text-slate-400 text-[11px]">Proyeksi Kenaikan ANBK</div>
                <div className="text-2xl font-serif font-bold text-amber-400 mt-1">
                  {projectedANBKGain}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Indeks Rapor Pendidikan</div>
              </div>

              <div className="bg-navy-900/80 p-3.5 rounded-lg border border-navy-800">
                <div className="text-slate-400 text-[11px]">Fasilitator Pendamping</div>
                <div className="text-2xl font-serif font-bold text-white mt-1">
                  Dedicated
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Monitoring mingguan</div>
              </div>
            </div>

            {/* Deliverable Highlights */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Cakupan Kegiatan Inti:
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {blueprint.components.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-navy-800 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action */}
            <button
              type="button"
              onClick={openModal}
              className="w-full py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{t.planner.ctaButton}</span>
            </button>
            <p className="text-center text-[11px] text-slate-400">
              *Rancangan detail proposal dan penyesuaian kalender akademik dibahas pada sesi konsultasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
