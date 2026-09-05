export type Language = "id" | "en";

export interface TranslationData {
  nav: {
    ecosystem: string;
    products: string;
    calculator: string;
    articles: string;
    testimonials: string;
    requestDemo: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      teachers: { value: string; label: string };
      schools: { value: string; label: string };
      students: { value: string; label: string };
      books: { value: string; label: string };
    };
  };
  ecosystem: {
    badge: string;
    title: string;
    description: string;
    cycle: {
      step1: { title: string; desc: string };
      step2: { title: string; desc: string };
      step3: { title: string; desc: string };
      step4: { title: string; desc: string };
    };
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    academy: {
      tag: string;
      name: string;
      role: string;
      desc: string;
      points: string[];
      cta: string;
      url: string;
    };
    testing: {
      tag: string;
      name: string;
      role: string;
      desc: string;
      points: string[];
      cta: string;
      url: string;
    };
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    schoolType: string;
    teachersCount: string;
    studentsCount: string;
    mainGoal: string;
    goals: {
      literacy: string;
      certification: string;
      curriculum: string;
    };
    resultTitle: string;
    resultSub: string;
    metrics: {
      readingTarget: string;
      teacherGrowth: string;
      timeline: string;
    };
    recommendationTitle: string;
    consultCta: string;
  };
  articles: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    minRead: string;
    viewAll: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
  };
  ctaSection: {
    title: string;
    description: string;
    primaryBtn: string;
    secondaryBtn: string;
  };
  modal: {
    title: string;
    subtitle: string;
    schoolName: string;
    picName: string;
    picRole: string;
    email: string;
    phone: string;
    city: string;
    interest: string;
    notes: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    close: string;
  };
  footer: {
    tagline: string;
    office: string;
    linksProducts: string;
    linksCompany: string;
    linksResources: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  id: {
    nav: {
      ecosystem: "Ekosistem",
      products: "Solusi Produk",
      calculator: "Simulasi Sekolah",
      articles: "Artikel & Riset",
      testimonials: "Cerita Mitra",
      requestDemo: "Ajukan Kemitraan",
    },
    hero: {
      badge: "Inovasi Ekosistem Pendidikan Indonesia",
      titlePart1: "Membangun Guru Berdaya,",
      titleHighlight: "Melesatkan Literasi",
      titlePart2: "dan Capaian Siswa.",
      subtitle:
        "CSI EDU menghadirkan solusi teknologi dan pendampingan terpadu yang membantu sekolah menumbuhkan kompetensi guru, membudayakan literasi membaca, dan mencetak hasil belajar terukur.",
      ctaPrimary: "Coba Simulasi Dampak Sekolah",
      ctaSecondary: "Pelajari Ekosistem Kami",
      stats: {
        teachers: { value: "12.000+", label: "Guru Berkembang" },
        schools: { value: "450+", label: "Sekolah Mitra" },
        students: { value: "180.000+", label: "Siswa Terasesmen" },
        books: { value: "1,2 Juta+", label: "Buku Dibaca Siswa" },
      },
    },
    ecosystem: {
      badge: "Siklus Peningkatan Mutu Berkelanjutan",
      title: "Satu Ekosistem untuk Seluruh Kebutuhan Sekolah",
      description:
        "Bukan sekadar aplikasi lepas. Kami menghubungkan pengembangan pendidik dan capaian siswa dalam satu siklus umpan balik data yang nyata.",
      cycle: {
        step1: {
          title: "1. Diagnosis & Pemetaan Awal",
          desc: "Asesmen diagnostik komprehensif untuk memetakan level literasi siswa dan kebutuhan kompetensi pedagogis guru.",
        },
        step2: {
          title: "2. Peningkatan Mutu Guru (CSI Academy)",
          desc: "Pelatihan cohort intensif, mentoring berkala, dan persiapan sertifikasi guru berbasis praktik nyata di kelas.",
        },
        step3: {
          title: "3. Akselerasi Budaya Baca Siswa (SRS & Testing Center)",
          desc: "Sistem membaca berbasis gamifikasi point-system yang mengubah literasi menjadi kebiasaan menyenangkan siswa.",
        },
        step4: {
          title: "4. Analitik Dampak & Perbaikan Berulang",
          desc: "Dashboard laporan terpadu bagi kepala sekolah dan yayasan untuk evaluasi kebijakan kurikulum sekolah.",
        },
      },
    },
    products: {
      badge: "Dua Pilar Utama",
      title: "Solusi Terpadu yang Dirancang untuk Sekolah Nyata",
      subtitle:
        "Kedua pilar kami dapat diterapkan secara terpadu maupun bertahap sesuai kesiapan sekolah Anda.",
      academy: {
        tag: "Khusus Guru & Tenaga Pendidik",
        name: "CSI Academy",
        role: "Platform Pengembangan Profesional Guru",
        desc: "Program pengembangan kapasitas guru yang berkelanjutan, terstruktur, dan berbasis komunitas — dari penguatan pedagogi, pemanfaatan AI, hingga kesiapan sertifikasi pendidik (PPG).",
        points: [
          "Pelatihan Berbasis Cohort & Praktek Kelas Langsung",
          "Program Persiapan Sertifikasi Guru Terstruktur",
          "Komunitas Pendidik Saling Berbagi Praktik Baik",
          "Sertifikat Resmi & Portofolio Karya Mengajar",
        ],
        cta: "Kunjungi CSI Academy",
        url: "https://csi-academy.id",
      },
      testing: {
        tag: "Khusus Siswa & Pengukuran Sekolah",
        name: "NF Testing Center & SRS",
        role: "Asesmen Siswa & School Reading System",
        desc: "Platform asesmen berbasis gamifikasi dan sistem membaca terpadu yang membuat kemajuan membaca siswa terlihat jelas, diberi apresiasi, dan dapat ditindaklanjuti guru.",
        points: [
          "School Reading System (SRS) dengan Poin & Gamifikasi",
          "Asesmen Diagnostik & Analitik Hasil Belajar Real-time",
          "Bank Soal Standar Asesmen Nasional & Literasi",
          "Laporan Akreditasi & Rapor Literasi Sekolah Lengkap",
        ],
        cta: "Kunjungi Testing Center",
        url: "https://nf-testingcenter.org",
      },
    },
    calculator: {
      badge: "Fitur Interaktif Calon Mitra",
      title: "Kalkulator Simulasi Kebutuhan & Dampak Sekolah",
      subtitle:
        "Masukkan gambaran sekolah Anda dan lihat estimasi dampak terukur yang bisa dicapai bersama CSI EDU.",
      schoolType: "Jenjang Satuan Pendidikan",
      teachersCount: "Estimasi Jumlah Guru",
      studentsCount: "Estimasi Jumlah Siswa",
      mainGoal: "Prioritas Target Peningkatan",
      goals: {
        literacy: "Melesatkan Minat Baca & Rapor Literasi Siswa",
        certification: "Upskilling & Kelulusan Sertifikasi Guru",
        curriculum: "Pembenahan Asesmen & Standar Akreditasi",
      },
      resultTitle: "Estimasi Rencana Dampak 1 Tahun",
      resultSub: "Proyeksi berdasarkan data rata-rata 450+ sekolah mitra CSI EDU:",
      metrics: {
        readingTarget: "Target Volume Membaca",
        teacherGrowth: "Guru Tervalidasi Naik Level",
        timeline: "Fase Pendampingan",
      },
      recommendationTitle: "Rekomendasi Paket Program",
      consultCta: "Dapatkan Proposal & Presentasi Detail",
    },
    articles: {
      badge: "Wawasan & Riset Lapangan",
      title: "Wawasan Pendidikan Terkini",
      subtitle:
        "Ditulis langsung oleh peneliti, instruktur, dan praktisi pendidikan CSI EDU.",
      readMore: "Baca Selengkapnya",
      minRead: "menit baca",
      viewAll: "Lihat Semua Artikel",
    },
    testimonials: {
      badge: "Testimoni & Kepercayaan",
      title: "Dipercaya oleh Lebih dari 450+ Sekolah & Institusi",
      subtitle: "Dengarkan pengalaman langsung dari para kepala sekolah, guru, dan pengurus yayasan.",
    },
    ctaSection: {
      title: "Siap Mewujudkan Lompatan Mutu di Sekolah Anda?",
      description:
        "Diskusikan kebutuhan spesifik guru dan siswa Anda bersama tim konsultan pendidikan CSI EDU. Mulai dari sesi konsultasi gratis atau program pilot skala kecil.",
      primaryBtn: "Jadwalkan Diskusi & Demo",
      secondaryBtn: "Hubungi via WhatsApp",
    },
    modal: {
      title: "Formulir Permohonan Demo & Diskusi Kemitraan",
      subtitle: "Isi data singkat berikut. Tim konsultan CSI EDU akan menghubungi Anda dalam 1x24 jam kerja.",
      schoolName: "Nama Sekolah / Yayasan",
      picName: "Nama Lengkap Anda",
      picRole: "Jabatan (Kepala Sekolah / Kurikulum / Pengurus Yayasan)",
      email: "Alamat Email Resmi",
      phone: "Nomor WhatsApp",
      city: "Kota / Kabupaten",
      interest: "Fokus Program yang Diminati",
      notes: "Kendala atau Kebutuhan Spesifik Sekolah Saat Ini",
      submit: "Kirim Permohonan Kemitraan",
      successTitle: "Permohonan Terkirim!",
      successMessage: "Terima kasih telah menghubungi CSI EDU. Tim konsultan kami akan segera menghubungi nomor WhatsApp Anda untuk menjadwalkan sesi paparan online.",
      close: "Tutup",
    },
    footer: {
      tagline:
        "Ekosistem teknologi dan pendampingan pendidikan untuk memajukan kompetensi guru, budaya baca siswa, dan tata kelola mutu sekolah di seluruh Indonesia.",
      office: "Depok & Jakarta, Indonesia",
      linksProducts: "Solusi Produk",
      linksCompany: "Tentang Kami",
      linksResources: "Sumber Daya",
      rights: "Hak Cipta Dilindungi. CSI EDU — Catalyst for School Improvement.",
    },
  },
  en: {
    nav: {
      ecosystem: "Ecosystem",
      products: "Products",
      calculator: "School Simulator",
      articles: "Articles & Insights",
      testimonials: "Stories",
      requestDemo: "Partner with Us",
    },
    hero: {
      badge: "Empowering Indonesian Education",
      titlePart1: "Empowering Educators,",
      titleHighlight: "Accelerating Literacy",
      titlePart2: "and Student Outcomes.",
      subtitle:
        "CSI EDU builds technology-enabled solutions and sustained school partnerships that develop teacher mastery, instill a joy for reading, and produce measurable student success.",
      ctaPrimary: "Simulate School Impact",
      ctaSecondary: "Explore Our Ecosystem",
      stats: {
        teachers: { value: "12,000+", label: "Teachers Developed" },
        schools: { value: "450+", label: "Partner Schools" },
        students: { value: "180,000+", label: "Assessed Students" },
        books: { value: "1.2M+", label: "Books Read by Students" },
      },
    },
    ecosystem: {
      badge: "Continuous Improvement Loop",
      title: "One Integrated Ecosystem for School Transformation",
      description:
        "Far beyond disconnected software tools. We bridge educator development and student achievement through an actionable, evidence-driven feedback loop.",
      cycle: {
        step1: {
          title: "1. Baseline Diagnostic Assessment",
          desc: "Comprehensive diagnostic testing to benchmark student reading literacy levels and identify teacher pedagogical upskilling needs.",
        },
        step2: {
          title: "2. Teacher Professional Growth (CSI Academy)",
          desc: "Cohort-based learning, practical mentorship, and certification readiness embedded in day-to-day classroom realities.",
        },
        step3: {
          title: "3. Student Reading Acceleration (SRS & Testing)",
          desc: "Gamified reading literacy system with points and milestones that turns reading into an inspiring, self-driven habit.",
        },
        step4: {
          title: "4. School Data Analytics & Continuous Iteration",
          desc: "Actionable dashboards for principals and foundation boards to guide curriculum decisions and track school accreditation metrics.",
        },
      },
    },
    products: {
      badge: "Two Core Pillars",
      title: "Purpose-Built Solutions for Real Classrooms",
      subtitle:
        "Our two core platforms work seamlessly together or can be phased in based on your school's current priorities.",
      academy: {
        tag: "For Teachers & Educators",
        name: "CSI Academy",
        role: "Teacher Professional Development Platform",
        desc: "Sustained, practical professional development for educators — from foundational pedagogy and AI-assisted teaching to teacher certification readiness.",
        points: [
          "Cohort-Based Courses with Practical Feedback",
          "Structured Teacher Certification Preparation",
          "Active Educator Community Sharing Best Practices",
          "Recognized Certification & Teaching Portfolio",
        ],
        cta: "Visit CSI Academy",
        url: "https://csi-academy.id",
      },
      testing: {
        tag: "For Students & School Metrics",
        name: "NF Testing Center & SRS",
        role: "Assessment & School Reading System",
        desc: "A gamified student assessment and reading literacy ecosystem that makes progress visible, celebrated by parents, and actionable for teachers.",
        points: [
          "School Reading System (SRS) with Gamified Points",
          "Diagnostic Testing & Real-time Competency Analytics",
          "Standardized National Literacy & Competency Question Bank",
          "Comprehensive School Accreditation & Literacy Reporting",
        ],
        cta: "Visit Testing Center",
        url: "https://nf-testingcenter.org",
      },
    },
    calculator: {
      badge: "Interactive Partner Tool",
      title: "School Impact & Needs Simulator",
      subtitle:
        "Input your school scale and discover the projected measurable outcomes your school can achieve with CSI EDU.",
      schoolType: "Education Level",
      teachersCount: "Estimated Number of Teachers",
      studentsCount: "Estimated Number of Students",
      mainGoal: "Primary Strategic Priority",
      goals: {
        literacy: "Accelerate Student Reading Culture & Literacy Index",
        certification: "Teacher Upskilling & Certification Readiness",
        curriculum: "Assessment Modernization & Accreditation Prep",
      },
      resultTitle: "Estimated 1-Year Impact Projection",
      resultSub: "Projections based on historical averages across 450+ CSI EDU partner schools:",
      metrics: {
        readingTarget: "Projected Books Read",
        teacherGrowth: "Teachers Advanced in Competency",
        timeline: "Implementation Roadmap",
      },
      recommendationTitle: "Recommended Program Blueprint",
      consultCta: "Request Custom School Proposal",
    },
    articles: {
      badge: "Field Insights & Research",
      title: "Latest Educational Insights",
      subtitle: "Written directly by researchers, instructional coaches, and educators at CSI EDU.",
      readMore: "Read Full Article",
      minRead: "min read",
      viewAll: "View All Articles",
    },
    testimonials: {
      badge: "Trusted Across Indonesia",
      title: "Endorsed by Over 450+ Schools and Institutions",
      subtitle: "Hear directly from principals, classroom teachers, and foundation leaders.",
    },
    ctaSection: {
      title: "Ready to Transform Learning in Your School?",
      description:
        "Speak with CSI EDU education consultants about your school's unique goals. Start with a complimentary assessment review or pilot program.",
      primaryBtn: "Schedule a Consultation & Demo",
      secondaryBtn: "Chat via WhatsApp",
    },
    modal: {
      title: "Request Partnership Demo & Consultation",
      subtitle: "Fill out the quick form below. A CSI EDU education consultant will reach out within 24 business hours.",
      schoolName: "School / Foundation Name",
      picName: "Your Full Name",
      picRole: "Role (Principal / Curriculum Head / Foundation Board)",
      email: "Official Email",
      phone: "WhatsApp Number",
      city: "City / District",
      interest: "Program Area of Interest",
      notes: "Current Challenges or Priorities",
      submit: "Submit Partnership Request",
      successTitle: "Request Received!",
      successMessage: "Thank you for reaching out to CSI EDU. Our team will contact your WhatsApp number shortly to coordinate a presentation session.",
      close: "Close",
    },
    footer: {
      tagline:
        "An integrated educational technology and coaching ecosystem advancing teacher mastery, student literacy, and school quality across Indonesia.",
      office: "Depok & Jakarta, Indonesia",
      linksProducts: "Products",
      linksCompany: "Company",
      linksResources: "Resources",
      rights: "All rights reserved. CSI EDU — Catalyst for School Improvement.",
    },
  },
};
