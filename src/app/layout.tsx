import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CSI EDU — Inovasi Ekosistem Mutu Sekolah, Guru & Literasi Siswa",
  description:
    "CSI EDU (Catalyst for School Improvement) menghadirkan ekosistem terpadu pengembangan guru (CSI Academy) dan akselerasi literasi siswa (NF Testing Center & SRS) untuk kemajuan pendidikan Indonesia.",
  keywords: [
    "CSI EDU",
    "Catalyst for School Improvement",
    "CSI Academy",
    "NF Testing Center",
    "School Reading System",
    "Pelatihan Guru",
    "Literasi Siswa",
    "Kurikulum Merdeka",
  ],
  authors: [{ name: "CSI EDU Team" }],
  openGraph: {
    title: "CSI EDU — Empowering Educators, Advancing Learning",
    description:
      "Ekosistem teknologi dan pendampingan terpadu untuk transformasi mutu sekolah, guru, dan literasi membaca siswa di Indonesia.",
    url: "https://csi-edu.id",
    siteName: "CSI EDU",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
