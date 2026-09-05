"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, CheckCircle2, Send, Building, User, Mail, Phone, MapPin, Sparkles } from "lucide-react";

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
    // Simulate successful submission for the demo
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-slate-900">
                {t.modal.successTitle}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                {t.modal.successMessage}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <div className="font-bold text-slate-700">Ringkasan Pengajuan:</div>
              <div className="text-slate-600">
                • <strong>Sekolah:</strong> {formData.schoolName || "SD/SMP/SMA Mitra"}
              </div>
              <div className="text-slate-600">
                • <strong>Penanggung Jawab:</strong> {formData.picName || "Bapak/Ibu"} ({formData.picRole})
              </div>
              <div className="text-slate-600">
                • <strong>WhatsApp:</strong> {formData.phone || "08xxxx"}
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
            >
              {t.modal.close}
            </button>
          </div>
        ) : (
          /* Input Form */
          <div className="p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>Konsultasi & Paparan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {t.modal.title}
              </h3>
              <p className="text-xs text-slate-500">{t.modal.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* School Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.modal.schoolName}</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: SMA Negeri 1 / Yayasan Al-Hikmah"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              {/* PIC Name & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.modal.picName}</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Lengkap"
                    value={formData.picName}
                    onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    {t.modal.picRole}
                  </label>
                  <select
                    value={formData.picRole}
                    onChange={(e) => setFormData({ ...formData, picRole: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
                  >
                    <option value="Kepala Sekolah">Kepala Sekolah / Madrasah</option>
                    <option value="Wakil Kurikulum">Wakil Kepala Kurikulum</option>
                    <option value="Pengurus Yayasan">Pengurus / Direktur Yayasan</option>
                    <option value="Guru Penggerak">Guru / Koordinator Literasi</option>
                  </select>
                </div>
              </div>

              {/* Phone (WhatsApp) & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.modal.phone}</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.modal.email}</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@sekolah.sch.id"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>

              {/* City */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.modal.city}</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Surabaya / Jakarta Selatan / Yogyakarta"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              {/* Program Interest */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  {t.modal.interest}
                </label>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { id: "academy", label: "CSI Academy (Guru)" },
                    { id: "testing", label: "NF Testing & SRS (Siswa)" },
                    { id: "both", label: "Keduanya (Ekosistem Penuh)" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, interest: p.id })}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                        formData.interest === p.id
                          ? "bg-emerald-50 text-emerald-800 border-emerald-500 ring-1 ring-emerald-500"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  {t.modal.notes}
                </label>
                <textarea
                  rows={2}
                  placeholder="Ceritakan singkat target capaian atau tantangan sekolah Anda..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>{t.modal.submit}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
