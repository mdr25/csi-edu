<div align="center">

# 🏛️ CSI EDU — Catalyst for School Improvement
**Inovasi Ekosistem Mutu Sekolah, Pengembangan Guru & Akselerasi Literasi Siswa**

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

[**Jelajahi Demo**](https://csi-edu.id) • [**Fitur Platform**](#-fitur-utama) • [**Panduan Instalasi**](#-instalasi--menjalankan-lokal) • [**Deploy ke Vercel**](#-panduan-deployment-ke-vercel)

---

</div>

## 📌 Sekilas Tentang CSI EDU

**CSI EDU (*Catalyst for School Improvement*)** adalah platform dan lembaga konsultan akselerasi mutu pendidikan di Indonesia. Berfokus mendampingi pimpinan yayasan, kepala sekolah, dan dinas pendidikan untuk menciptakan transformasi berkelanjutan di ruang kelas melalui:

1. **CSI Academy:** Pengembangan profesionalisme tenaga pendidik, perancangan modul ajar Kurikulum Merdeka, dan kesiapan sertifikasi pendidik (PPG).
2. **School Reading System (SRS):** Pembiasaan membaca berjenjang berbasis kuis pemahaman digital dan sistem poin motivasi membaca.
3. **NF Testing Center & Diagnostik:** Asesmen literasi, numerasi, dan penalaran terstandar yang sinkron dengan data **Asesmen Nasional (ANBK) & Rapor Pendidikan**.
4. **Tata Kelola & PBD:** Fasilitasi Perencanaan Berbasis Data untuk yayasan dan akreditasi sekolah.

Platform web ini dirancang dengan standar editorial dan kredibilitas institusional tinggi (mengadopsi estetika edtech global berwibawa) serta didukung penuh oleh arsitektur modern **Next.js 15 App Router** dan **React 19**.

---

## ✨ Fitur Utama

- **🌐 Arsitektur Bilingual Terintegrasi (i18n):**
  Dukungan pergantian bahasa instan (Bahasa Indonesia & English) menggunakan React Context (`LanguageContext`) dengan persistensi `localStorage`.
- **🧮 Interactive Program Planner (Kalkulator Estimasi):**
  Mesin simulasi kebutuhan program yang menghitung proyeksi kebutuhan buku, estimasi kelulusan PPG guru, serta menghasilkan rekomendasi *Program Blueprint* berdasarkan jenjang (SD, SMP, SMA, Yayasan) dan fokus prioritas sekolah.
- **📱 Showcase Produk Interaktif:**
  Komparasi dua produk inti (*CSI Academy* dan *NF Testing & SRS*) dengan interface tab interaktif dan mockup portal guru/siswa.
- **📊 Studi Kasus Berbasis Data & Dampak Terukur:**
  Dokumentasi kemitraan bersama jaringan sekolah nasional dan institusi pendidikan (UPI, IGI, Dinas Pendidikan).
- **📋 Modal Konsultasi Kemitraan Terstruktur:**
  Formulir inquiry komprehensif bagi narahubung sekolah dan yayasan untuk menjadwalkan konsultasi program.
- **⚡ Performa Maksimal & SEO Friendly:**
  Prerendered static content via Next.js App Router untuk skor Lighthouse tinggi, Core Web Vitals optimal, dan metadata OpenGraph lengkap.

---

## 🛠️ Tech Stack

| Komponen | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Framework** | Next.js 15.1.7 (App Router) | Server-side rendering, static generation & client caching |
| **Library UI** | React 19.0.0 | Arsitektur komponen modular & hook modern |
| **Bahasa** | TypeScript 5.7.3 | Keamanan tipe statis (Strict Mode) |
| **Styling** | Tailwind CSS 3.4.17 | Utility-first CSS dengan custom corporate palette (Navy, Forest, Amber) |
| **Ikon** | Lucide React | Ikonografi SVG minimalis dan teroptimasi |
| **Utility** | `clsx`, `tailwind-merge` | Conditional styling resolver yang fleksibel |

---

## 📂 Struktur Direktori

```text
csi-edu/
├── src/
│   ├── app/
│   │   ├── globals.css          # Style global & konfigurasi Tailwind
│   │   ├── layout.tsx           # Root layout dengan Inter font & SEO metadata
│   │   └── page.tsx             # Halaman utama (komposisi modul platform)
│   ├── components/
│   │   ├── Navbar.tsx           # Top bar institusional, switch bahasa, & navigasi
│   │   ├── Hero.tsx             # Editorial hero, kredibilitas, & statistik pencapaian
│   │   ├── SolutionsSection.tsx # 4 pilar bidang pendampingan mutu
│   │   ├── MethodologySection.tsx# Metodologi 4 tahap (Diagnosa s/d Evaluasi)
│   │   ├── ProductSection.tsx   # Tab showcase CSI Academy & SRS
│   │   ├── ProgramPlanner.tsx   # Simulasi kalkulator cetak biru program sekolah
│   │   ├── CaseStudiesSection.tsx# Portofolio mitra & dampak terukur
│   │   ├── ArticlesSection.tsx  # Feed publikasi artikel & riset pembelajaran
│   │   ├── CtaSection.tsx       # Banner ajakan aksi kemitraan
│   │   ├── Footer.tsx           # Navigasi footer, legalitas, kontak institusi
│   │   └── PartnershipModal.tsx # Modal form inquiry kemitraan sekolah
│   ├── context/
│   │   └── LanguageContext.tsx  # State management bilingual (ID/EN)
│   └── data/
│       └── translations.ts      # Kamus terjemahan konten lengkap ID & EN
├── public/                      # Aset statis & logo
├── tailwind.config.ts           # Konfigurasi color theme & font family
├── tsconfig.json                # Konfigurasi TypeScript
├── next.config.ts               # Pengaturan Next.js runtime & image optimization
└── package.json                 # Dependensi & script proyek
```

---

## 🚀 Instalasi & Menjalankan Lokal

### Prasyarat
- **Node.js**: Versi 18.18+ atau 20+ (Direkomendasikan Node.js LTS)
- **Package Manager**: `npm`, `pnpm`, `yarn`, atau `bun`

### Langkah-langkah

1. **Clone repositori:**
   ```bash
   git clone https://github.com/mdr25/csi-edu.git
   cd csi-edu
   ```

2. **Pasang dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```

4. **Buka aplikasi:**
   Akses `http://localhost:3000` melalui browser Anda.

5. **Build untuk produksi:**
   ```bash
   npm run build
   npm run start
   ```

---

## ☁️ Panduan Deployment ke Vercel

Proyek ini telah dikonfigurasi secara optimal untuk dideploy ke [Vercel](https://vercel.com):

### Cara 1: Deploy Melalui Vercel Dashboard (Rekomendasi)
1. Buka [vercel.com](https://vercel.com) dan login menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Pilih repositori **`mdr25/csi-edu`** dari daftar repositori GitHub Anda.
4. Pada halaman konfigurasi project:
   - **Framework Preset:** `Next.js` (terdeteksi otomatis).
   - **Root Directory:** `./`
   - **Build Command:** `next build` (default).
   - **Output Directory:** `.next` (default).
5. Klik **"Deploy"**.
6. Dalam ~1 menit, aplikasi akan live dengan URL publik (contoh: `csi-edu.vercel.app`).

### Cara 2: Menghubungkan Custom Domain (`csi-edu.id`)
1. Di dashboard Vercel pada project Anda, buka tab **Settings** > **Domains**.
2. Masukkan nama domain Anda: `csi-edu.id` (dan `www.csi-edu.id`).
3. Vercel akan menampilkan DNS Record yang harus dimasukkan ke registrar domain Anda:
   - **Type A Record:** `@` mengarah ke `76.76.21.21`
   - **Type CNAME:** `www` mengarah ke `cname.vercel-dns.com`
4. Sertifikat SSL gratis dari Let's Encrypt akan diaktifkan secara otomatis.

---

## 🗺️ Roadmap Pengembangan Lanjutan

- [ ] **Backend API Form Submission:** Integrasi endpoint `/api/inquiry` dengan Resend / Nodemailer dan Google Sheets Webhook.
- [ ] **Headless CMS / MDX Articles:** Integrasi konten artikel dinamis untuk rute `/articles/[slug]`.
- [ ] **Partner School Dashboard / Portal Login:** Halaman autentikasi untuk akses guru dan kuis siswa.
- [ ] **Automated SEO Engine:** Penambahan `sitemap.xml`, `robots.txt`, dan dynamic OpenGraph image.

---

## 📄 Lisensi & Hak Cipta

© 2026 **CSI EDU (Catalyst for School Improvement)**. All Rights Reserved.  
Dikembangkan untuk ekosistem peningkatan mutu sekolah dan guru di Indonesia.
