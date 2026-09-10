"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, CheckCircle2, Send, Building, User, Mail, Phone, MapPin } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs">
      <div
        className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-300 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 w-8 h-8 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-14 h-14 bg-forest-600/10 text-forest-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-navy-950">
                {t.modal.successTitle}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                {t.modal.successDesc}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
              <div className="font-bold text-navy-950 mb-1">Rincian Kontak:</div>
              <div>• <strong>Lembaga:</strong> {formData.schoolName || "Sekolah Mitra"}</div>
              <div>• <strong>Narahubung:</strong> {formData.picName || "Bapak/Ibu"} ({formData.picRole})</div>
              <div>• <strong>WhatsApp:</strong> {formData.phone || "08xxxx"}</div>
              <div>• <strong>Kota:</strong> {formData.city || "-"}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <a
                href={`https://wa.me/6285695042915?text=Halo%20CSI%20EDU,%20saya%20sudah%20mengisi%20formulir%20konsultasi%20atas%20nama%20${encodeURIComponent(formData.picName || "Mitra")}%20dari%20${encodeURIComponent(formData.schoolName || "Sekolah")}.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-colors text-center inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Konfirmasi via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="py-3 px-5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        ) : (
          /* Formal Form */
          <div className="p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="space-y-1.5 pr-8 border-b border-slate-200 pb-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-navy-800">
                Konsultasi Kemitraan Sekolah
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-950">
                {t.modal.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.modal.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* School Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  {t.modal.schoolLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: SMA Negeri 1 / Yayasan Al-Azhar / SMP Taruna"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:border-navy-800"
                />
              </div>

              {/* Name & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    {t.modal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Lengkap & Gelar"
                    value={formData.picName}
                    onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:border-navy-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    {t.modal.roleLabel}
                  </label>
                  <select
                    value={formData.picRole}
                    onChange={(e) => setFormData({ ...formData, picRole: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:border-navy-800 bg-white"
                  >
                    <option value="Kepala Sekolah">Kepala Sekolah / Madrasah</option>
                    <option value="Wakil Kurikulum">Wakil Kepala Bidang Kurikulum</option>
                    <option value="Pengurus Yayasan">Pengurus / Direktur Yayasan</option>
                    <option value="Koordinator Literasi">Koordinator Literasi / Guru</option>
                  </select>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    {t.modal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 0812-3456-7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:border-navy-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    {t.modal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@sekolah.sch.id"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:border-navy-800"
                  />
                </div>
              </div>

              {/* City */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  {t.modal.cityLabel}
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Surabaya / Bandung / Yogyakarta"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:border-navy-800"
                />
              </div>

              {/* Interest */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  {t.modal.interestLabel}
                </label>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    { id: "academy", label: "CSI Academy (Guru)" },
                    { id: "testing", label: "NF Testing & SRS" },
                    { id: "both", label: "Kemitraan Terpadu" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, interest: p.id })}
                      className={`p-2 rounded border font-semibold transition-colors ${
                        formData.interest === p.id
                          ? "bg-navy-900 text-white border-navy-900"
                          : "bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  {t.modal.notesLabel}
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Target persiapan akreditasi tahun 2027 atau penguatan rapor literasi..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded border border-slate-300 focus:outline-none focus:border-navy-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.modal.submitBtn}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
