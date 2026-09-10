"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, ArrowRight, MessageCircle, CheckCircle2, Building, Sparkles } from "lucide-react";

export default function PartnershipModal() {
  const { isModalOpen, closeModal, t } = useLanguage();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    picName: "",
    picRole: "Kepala Sekolah",
    email: "",
    phone: "",
    city: "",
    interest: "both",
    notes: "",
  });

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/65 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl shadow-slate-950/20 border border-slate-100 overflow-hidden my-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modern Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all z-10"
          aria-label="Tutup modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          /* High-End Modern Confirmation Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-teal-50 text-teal-800 rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-teal-100/80">
              <CheckCircle2 className="w-8 h-8 text-teal-700" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                {t.modal.successTitle}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t.modal.successDesc}
              </p>
            </div>

            {/* Clean summary block */}
            <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-100 text-left text-xs sm:text-sm space-y-2 text-slate-700 max-w-lg mx-auto">
              <div className="font-bold text-slate-900 pb-1 border-b border-slate-200/60">
                Rincian Formulir Konsultasi:
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Satuan Pendidikan:</span>
                <span className="col-span-2 font-semibold text-slate-900">{formData.schoolName || "Sekolah Mitra"}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Narahubung:</span>
                <span className="col-span-2 font-semibold text-slate-900">{formData.picName || "Bapak/Ibu"} ({formData.picRole})</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">WhatsApp:</span>
                <span className="col-span-2 font-semibold text-teal-800">{formData.phone || "-"}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-slate-500">Kabupaten/Kota:</span>
                <span className="col-span-2 font-semibold text-slate-900">{formData.city || "-"}</span>
              </div>
            </div>

            {/* Direct Outreach Action */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto">
              <a
                href={`https://wa.me/6285695042915?text=Halo%20CSI%20EDU,%20saya%20sudah%20mengisi%20formulir%20konsultasi%20atas%20nama%20${encodeURIComponent(formData.picName || "Mitra")}%20dari%20${encodeURIComponent(formData.schoolName || "Sekolah")}.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 px-6 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-sm transition-all shadow-md shadow-teal-900/20 text-center inline-flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Konfirmasi via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="py-4 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                Selesai
              </button>
            </div>
          </div>
        ) : (
          /* High-End Clean Modal Form */
          <div className="p-8 sm:p-12 space-y-8 max-h-[88vh] overflow-y-auto">
            {/* Header */}
            <div className="space-y-3 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                <span>Konsultasi Kemitraan Sekolah</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {t.modal.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                {t.modal.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* School Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  {t.modal.schoolLabel} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: SMA Negeri 1 / Yayasan Al-Azhar / SMP Taruna"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className="w-full px-4 py-3 text-sm font-medium text-slate-900 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 transition-all outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Name & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    {t.modal.nameLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Lengkap & Gelar"
                    value={formData.picName}
                    onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-medium text-slate-900 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 transition-all outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    {t.modal.roleLabel} <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.picRole}
                    onChange={(e) => setFormData({ ...formData, picRole: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-medium text-slate-900 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 transition-all outline-none cursor-pointer"
                  >
                    <option value="Kepala Sekolah">Kepala Sekolah / Madrasah</option>
                    <option value="Wakil Kurikulum">Wakil Kepala Bidang Kurikulum</option>
                    <option value="Pengurus Yayasan">Pengurus / Direktur Yayasan</option>
                    <option value="Koordinator Literasi">Koordinator Literasi / Guru</option>
                  </select>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    {t.modal.phoneLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 0812-3456-7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-medium text-slate-900 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 transition-all outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    {t.modal.emailLabel} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@sekolah.sch.id"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-medium text-slate-900 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 transition-all outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* City */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  {t.modal.cityLabel} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Surabaya / Bandung / Medan / Depok"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 text-sm font-medium text-slate-900 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 transition-all outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Interest Selector - Modern Segmented Card Pills */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">
                  {t.modal.interestLabel}
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "academy", label: "CSI Academy", desc: "Pelatihan Guru" },
                    { id: "testing", label: "SRS Literasi", desc: "Kuis Baca Siswa" },
                    { id: "both", label: "Kemitraan Terpadu", desc: "Seluruh Program" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, interest: p.id })}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        formData.interest === p.id
                          ? "bg-teal-900 text-white border-teal-900 shadow-sm"
                          : "bg-slate-50/70 text-slate-700 border-slate-200/80 hover:bg-slate-100"
                      }`}
                    >
                      <div className="font-bold text-xs">{p.label}</div>
                      <div className={`text-[10px] mt-0.5 ${formData.interest === p.id ? "text-teal-200" : "text-slate-400"}`}>
                        {p.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  {t.modal.notesLabel}
                </label>
                <textarea
                  rows={2}
                  placeholder="Ceritakan fokus prioritas atau kendala pembelajaran sekolah saat ini..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 text-sm font-medium text-slate-900 rounded-xl bg-slate-50/70 border border-slate-200/80 focus:bg-white focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10 transition-all outline-none placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-sm transition-all shadow-lg shadow-teal-900/20 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                >
                  <span>{t.modal.submitBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Direct WhatsApp fast response note */}
              <div className="text-center pt-1">
                <span className="text-xs text-slate-500">
                  Butuh koordinasi cepat? Hubungi via WhatsApp:{" "}
                  <a
                    href="https://wa.me/6285695042915?text=Halo%20CSI%20EDU,%20kami%20ingin%20berkonsultasi%20mengenai%20kemitraan%20sekolah."
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-teal-800 hover:underline"
                  >
                    +62 856-9504-2915
                  </a>
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
