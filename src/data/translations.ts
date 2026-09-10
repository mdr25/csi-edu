export type Language = "id" | "en";

export interface TranslationData {
  topBar: {
    tagline: string;
    contact: string;
    phone: string;
  };
  nav: {
    solutions: string;
    leadership: string;
    learningBrewing: string;
    products: string;
    methodology: string;
    planner: string;
    caseStudies: string;
    articles: string;
    contactBtn: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      schools: { value: string; label: string; desc: string };
      teachers: { value: string; label: string; desc: string };
      students: { value: string; label: string; desc: string };
      books: { value: string; label: string; desc: string };
    };
  };
  solutions: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      subtitle: string;
      target: string;
      description: string;
      deliverables: string[];
      linkText: string;
    }>;
  };
  leadership: {
    eyebrow: string;
    title: string;
    subtitle: string;
    expertBadge: string;
    expertName: string;
    expertRole: string;
    expertBio: string;
    expertPoints: string[];
    expertQuote: string;
    associateTitle: string;
    associateName: string;
    associateRole: string;
    associateBio: string;
    consultationCta: string;
  };
  learningBrewing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    venueTag: string;
    venueLocation: string;
    sessions: Array<{
      category: string;
      title: string;
      speaker: string;
      focus: string;
      badge: string;
      dateOrStatus: string;
    }>;
    registerCta: string;
    whatsappCta: string;
  };
  methodology: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: Array<{
      step: string;
      title: string;
      desc: string;
      detail: string;
    }>;
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    academy: {
      name: string;
      role: string;
      desc: string;
      focusAreas: string[];
      cohortInfo: string;
      cta: string;
      url: string;
    };
    testing: {
      name: string;
      role: string;
      desc: string;
      focusAreas: string[];
      statsInfo: string;
      cta: string;
      url: string;
    };
  };
  planner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    schoolTypeLabel: string;
    teachersLabel: string;
    studentsLabel: string;
    priorityLabel: string;
    priorities: {
      literacy: string;
      teacher: string;
      management: string;
    };
    outputTitle: string;
    outputSubtitle: string;
    blueprintTitle: string;
    ctaButton: string;
  };
  caseStudies: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stories: Array<{
      quote: string;
      author: string;
      role: string;
      institution: string;
      outcome: string;
    }>;
  };
  articles: {
    eyebrow: string;
    title: string;
    subtitle: string;
    readMore: string;
  };
  ctaSection: {
    title: string;
    description: string;
    btnPrimary: string;
    btnSecondary: string;
  };
  modal: {
    title: string;
    subtitle: string;
    schoolLabel: string;
    nameLabel: string;
    roleLabel: string;
    phoneLabel: string;
    emailLabel: string;
    cityLabel: string;
    interestLabel: string;
    notesLabel: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
  };
  footer: {
    description: string;
    address: string;
    colSolutions: string;
    colPrograms: string;
    colCompany: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  id: {
    topBar: {
      tagline: "Catalyst for School Improvement • Ekosistem Mutu Sekolah & Guru",
      contact: "Konsultasi Kemitraan Sekolah",
      phone: "+62 856 9504 2915",
    },
    nav: {
      solutions: "Solusi Kemitraan",
      leadership: "Dewan Pakar",
      learningBrewing: "Learning & Brewing",
      products: "Platform Produk",
      methodology: "Metodologi",
      planner: "Perencanaan Program",
      caseStudies: "Hasil & Dampak",
      articles: "Riset & Artikel",
      contactBtn: "Jadwalkan Konsultasi",
    },
    hero: {
      eyebrow: "Catalyst for School Improvement (CSI EDU)",
      headline: "Pendampingan Terpadu Peningkatan Mutu Guru, Asesmen, dan Budaya Baca Sekolah.",
      subheadline:
        "Kami bekerja sama dengan kepala sekolah, yayasan, dan dinas pendidikan untuk mewujudkan perubahan nyata di kelas: meningkatkan kompetensi mengajar guru, membudayakan kebiasaan membaca lewat School Reading System, serta menyediakan data asesmen diagnostik yang terhubung dengan Rapor Pendidikan.",
      primaryCta: "Rancang Program Sekolah",
      secondaryCta: "Pelajari Solusi Kemitraan",
      metrics: {
        schools: {
          value: "450+",
          label: "Sekolah & Yayasan Mitra",
          desc: "Tingkat SD, SMP, SMA/SMK di berbagai kota di Indonesia",
        },
        teachers: {
          value: "12.000+",
          label: "Guru Mendapat Pelatihan",
          desc: "Penguatan kompetensi pedagogik dan kesiapan sertifikasi PPG",
        },
        students: {
          value: "180.000+",
          label: "Siswa Terasesmen",
          desc: "Pemetaan kemampuan literasi baca dan penalaran berkala",
        },
        books: {
          value: "1,2 Juta+",
          label: "Buku Tuntas Dibaca",
          desc: "Melalui pembiasaan membaca berjenjang School Reading System",
        },
      },
    },
    solutions: {
      eyebrow: "Solusi Utama",
      title: "Empat Bidang Pendampingan Mutu Pendidikan",
      subtitle:
        "Dirancang untuk memenuhi kebutuhan tata kelola kurikulum, pengembangan tenaga pendidik, dan capaian belajar siswa secara berkesinambungan.",
      items: [
        {
          id: "teacher-dev",
          title: "Pengembangan Profesional Guru",
          subtitle: "CSI Academy",
          target: "Untuk Guru Mata Pelajaran & Wali Kelas",
          description:
            "Program pendampingan berbasis cohort dan praktik kelas langsung. Fokus pada perancangan pembelajaran berdiferensiasi, pemanfaatan teknologi kecerdasan buatan untuk asesmen kelas, serta bimbingan kesiapan sertifikasi pendidik (PPG).",
          deliverables: [
            "Pelatihan modul ajar sesuai standar Kurikulum Merdeka",
            "Pendampingan portofolio dan uji kompetensi guru",
            "Supervisi klinis dan sesi refleksi berkala bersama instruktur",
            "Sertifikat resmi kelulusan program dan portofolio karya",
          ],
          linkText: "Detail Program CSI Academy",
        },
        {
          id: "literacy-srs",
          title: "School Reading System (SRS)",
          subtitle: "NF Testing Center",
          target: "Untuk Siswa & Koordinator Literasi Sekolah",
          description:
            "Sistem pembiasaan membaca buku berjenjang yang dilengkapi uji pemahaman (bukan sekadar menghitung lembar halaman). Menggunakan mekanisme apresiasi berbasis poin yang mendorong motivasi membaca mandiri siswa sepanjang semester.",
          deliverables: [
            "Katalog buku bacaan berjenjang sesuai tingkat kelas",
            "Kuis pemahaman isi bacaan terintegrasi digital",
            "Pencatatan rekap bacaan siswa dan rapor literasi kelas",
            "Panduan bagi guru untuk mengintegrasikan bacaan dalam pelajaran",
          ],
          linkText: "Pelajari Mekanisme SRS",
        },
        {
          id: "assessment",
          title: "Asesmen Diagnostik & Analisis Capaian",
          subtitle: "Testing & Diagnostic Services",
          target: "Untuk Tim Kurikulum & Manajemen Sekolah",
          description:
            "Penyelenggaraan tes diagnostik berkala yang memetakan kemampuan literasi baca, numerasi, dan penalaran siswa. Hasil tes disajikan dalam analitik yang memudahkan guru menyusun tindak lanjut remedial maupun pengayaan.",
          deliverables: [
            "Bank soal standar setara Asesmen Nasional (ANBK)",
            "Laporan profil kemampuan siswa per kelas dan per kompetensi",
            "Rekomendasi tindakan pedagogis untuk guru bidang studi",
            "Data pembanding kemajuan antar semester",
          ],
          linkText: "Layanan Asesmen Diagnostik",
        },
        {
          id: "school-governance",
          title: "Konsultasi Manajemen & Rapor Pendidikan",
          subtitle: "School Improvement Partnership",
          target: "Untuk Kepala Sekolah & Pengurus Yayasan",
          description:
            "Fasilitasi bagi pimpinan sekolah dalam menyusun Perencanaan Berbasis Data (PBD) dari hasil Rapor Pendidikan. Membantu yayasan menentukan alokasi program prioritas dan indikator ketercapaian mutu akreditasi.",
          deliverables: [
            "Audit awal mutu akademik dan kesiapan iklim sekolah",
            "Penyusunan peta jalan (roadmap) mutu sekolah 1–3 tahun",
            "Pelatihan supervisi akademik bagi kepala sekolah dan wakil kurikulum",
            "Laporan evaluasi kemitraan berkala kepada yayasan",
          ],
          linkText: "Konsultasi Tata Kelola Mutu",
        },
      ],
    },
    leadership: {
      eyebrow: "Kepemimpinan & Dewan Pakar",
      title: "Dipimpin oleh Praktisi dan Akademisi Transformasi Sekolah",
      subtitle:
        "Kemitraan CSI EDU dirancang dan dipandu langsung oleh pakar berpengalaman yang memahami dinamika nyata di sekolah, manajemen kurikulum, dan tata kelola yayasan.",
      expertBadge: "Lead School Transformation Expert & Founder",
      expertName: "Dr. Rahmat Syehani",
      expertRole: "School Transformation Expert & Inisiator Ekosistem CSI EDU",
      expertBio:
        "Telah lebih dari dua dekade mendedikasikan kepakarannya dalam memfasilitasi transformasi mutu pendidikan dasar dan menengah di Indonesia. Aktif memimpin riset integrasi Kurikulum Merdeka, perancangan model kepemimpinan sekolah, serta pembinaan ribuan kepala sekolah dan pendidik di berbagai kota.",
      expertPoints: [
        "Kolaborasi riset kurikulum dan mutu pendidikan bersama universitas terkemuka (seperti UPI)",
        "Spesialisasi dalam Islamic Educational Leadership, 5 Levels of Leadership, dan The Law of Process",
        "Arsitek ekosistem terpadu CSI Academy, NF Testing Center, dan School Reading System (SRS)",
        "Fasilitator utama forum eksekutif kepemimpinan sekolah 'Learning & Brewing'",
      ],
      expertQuote:
        "Sekolah tidak akan pernah bertumbuh melampaui kapasitas kepemimpinannya. Perubahan mutu yang hakiki berakar saat kepala sekolah dan guru berkomitmen menjadi pembelajar sejati di ruang kelas.",
      associateTitle: "Mitra Ahli Manajemen & Risiko Hukum",
      associateName: "Achmad Fatoni, S.E., SH",
      associateRole: "Associate of CSI — Educational Legal & Risk Management",
      associateBio:
        "Mendampingi yayasan dan manajemen sekolah dalam memetakan titik rawan risiko hukum, kepatuhan ketenagakerjaan pendidik, serta tata kelola kelembagaan pendidikan yang aman dan berkelanjutan.",
      consultationCta: "Undang Paparan Dewan Pakar",
    },
    learningBrewing: {
      eyebrow: "Forum Eksekutif Pimpinan Sekolah",
      title: "Learning & Brewing: Ruang Diskusi Strategis Transformasi Sekolah",
      subtitle:
        "Forum diskusi santai namun mendalam (open for educators & school leaders) untuk membedah tantangan tata kelola, kepemimpinan adaptif, dan mitigasi risiko sekolah bersama para pakar.",
      venueTag: "Lokasi Training & Workshop",
      venueLocation: "Training Center CSI, Grand Depok City, Kota Depok, Jawa Barat",
      sessions: [
        {
          category: "Tata Kelola & Hukum",
          title: "Urgensi Legal Awareness & Pemetaan Titik Rawan Risiko Hukum Sekolah",
          speaker: "Dr. Rahmat Syehani & Achmad Fatoni, S.E., SH",
          focus: "Membangun kesadaran bahwa hukum bukan beban melainkan pelindung institusi sekolah, pencegahan sengketa, dan tata kelola SDM yayasan.",
          badge: "Diskusi Terbuka",
          dateOrStatus: "Grand Depok City • Sesi Berkala",
        },
        {
          category: "Kepemimpinan Transformasional",
          title: "Transforming School: Leadership for a Culture of Thinking & Problem Solving",
          speaker: "Dr. Rahmat Syehani",
          focus: "Membangun budaya berpikir kritis bagi generasi masa depan melalui pergeseran paradigma kepemimpinan kepala sekolah di ruang kelas.",
          badge: "Workshop Eksekutif",
          dateOrStatus: "Grand Depok City • Batch Khusus",
        },
        {
          category: "Pengembangan Kapasitas Pimpinan",
          title: "The Law of Process & 5 Levels of Educational Leadership",
          speaker: "Dr. Rahmat Syehani",
          focus: "Refleksi dan evaluasi posisi level kepemimpinan kepala sekolah untuk mengatasi kejenuhan manajemen dan mengakselerasi produktivitas guru.",
          badge: "Masterclass",
          dateOrStatus: "Grand Depok City • Kuota Terbatas",
        },
      ],
      registerCta: "Daftar Sesi Diskusi Terdekat",
      whatsappCta: "Hubungi Koordinator Acara (Firman: 0856-9504-2915)",
    },
    methodology: {
      eyebrow: "Alur Kerja Sama",
      title: "Metodologi Pendampingan Berkelanjutan",
      subtitle:
        "Kami tidak menjual program sekali selesai. CSI EDU mendampingi sekolah dalam siklus empat tahap yang memastikan perubahan benar-benar terjadi di ruang kelas.",
      pillars: [
        {
          step: "01",
          title: "Diagnosa & Pemetaan Kebutuhan",
          desc: "Audit awal kompetensi guru dan pengukuran dasar (baseline) tingkat literasi membaca siswa menggunakan instrumen diagnostik terstandar.",
          detail: "Waktu: 2–3 pekan pertama kemitraan",
        },
        {
          step: "02",
          title: "Perancangan Program Bersama",
          desc: "Menyepakati target capaian bersama kepala sekolah dan yayasan, menentukan modul pelatihan guru, serta menyusun kalender implementasi.",
          detail: "Penyesuaian target sesuai Rapor Pendidikan sekolah",
        },
        {
          step: "03",
          title: "Penerapan & Pendampingan Kelas",
          desc: "Pelaksanaan pelatihan guru (CSI Academy) bersamaan dengan peluncuran School Reading System (SRS) di kelas, didampingi fasilitator lapangan.",
          detail: "Monitoring mingguan & pendampingan teknis berkala",
        },
        {
          step: "04",
          title: "Evaluasi Hasil & Rencana Lanjutan",
          desc: "Pengukuran akhir semester (post-test) untuk melihat pertumbuhan literasi siswa, rekap sertifikasi guru, dan penyusunan laporan pertanggungjawaban bagi yayasan.",
          detail: "Laporan data analitik komprehensif",
        },
      ],
    },
    products: {
      eyebrow: "Ekosistem Platform",
      title: "Dua Produk Inti yang Saling Melengkapi",
      subtitle:
        "Platform teknologi yang dibangun berdasarkan riset dan pengalaman mendampingi ratusan ruang kelas di Indonesia.",
      academy: {
        name: "CSI Academy",
        role: "Platform Pelatihan & Komunitas Pendidik",
        desc: "LMS dan ruang belajar profesional bagi guru Indonesia untuk meningkatkan kemampuan pedagogi, menyusun perangkat ajar, dan mempersiapkan sertifikasi pendidik (PPG).",
        focusAreas: [
          "Kurikulum pelatihan berjenjang berbasis praktik",
          "Komunitas belajar (Kombel) antar guru se-Indonesia",
          "Bimbingan penyusunan RPP/Modul Ajar berdiferensiasi",
          "Evaluasi berkala bersama praktisi dan pengawas pendidikan",
        ],
        cohortInfo: "Batch pelatihan baru dibuka setiap awal semester",
        cta: "Kunjungi Portal CSI Academy",
        url: "https://csi-academy.id",
      },
      testing: {
        name: "NF Testing Center & SRS",
        role: "Platform Asesmen Siswa & Budaya Baca",
        desc: "Sistem digital yang mengelola pelaksanaan asesmen diagnostik kemampuan siswa serta menjalankan program School Reading System (SRS) dengan mekanisme pencatatan dan evaluasi terpadu.",
        focusAreas: [
          "Pencatatan dan verifikasi buku bacaan siswa",
          "Kuis pemahaman bacaan untuk menguji daya serap teks",
          "Dashboard pemantauan wali kelas dan koordinator literasi",
          "Integrasi format bank soal setara standar Asesmen Nasional",
        ],
        statsInfo: "Telah mengelola lebih dari 180.000 riwayat asesmen siswa",
        cta: "Kunjungi NF Testing Center",
        url: "https://nf-testingcenter.org",
      },
    },
    planner: {
      eyebrow: "Simulasi Program",
      title: "Rancang Kerangka Program untuk Sekolah Anda",
      subtitle:
        "Tentukan profil dan kebutuhan sekolah Anda untuk mendapatkan estimasi rancangan program pendampingan yang sesuai.",
      schoolTypeLabel: "Bentuk Satuan Pendidikan",
      teachersLabel: "Jumlah Guru yang Dilibatkan",
      studentsLabel: "Jumlah Siswa Sasaran Program",
      priorityLabel: "Fokus Prioritas Tahun Ajaran Ini",
      priorities: {
        literacy: "Peningkatan Literasi Membaca & Indeks Rapor Pendidikan (ANBK)",
        teacher: "Peningkatan Kompetensi Guru & Kesiapan Sertifikasi (PPG)",
        management: "Pembenahan Asesmen & Tata Kelola Mutu Akademik Yayasan",
      },
      outputTitle: "Rekomendasi Kerangka Program CSI EDU",
      outputSubtitle: "Berdasarkan parameter satuan pendidikan yang Anda pilih:",
      blueprintTitle: "Rancangan Paket Pendampingan",
      ctaButton: "Ajukan Pembahasan Proposal Program Ini",
    },
    caseStudies: {
      eyebrow: "Kisah Kemitraan",
      title: "Dampak Nyata di Sekolah Mitra",
      subtitle:
        "Pengalaman langsung dari para pimpinan yayasan, kepala sekolah, dan guru yang telah mengimplementasikan program CSI EDU.",
      stories: [
        {
          quote:
            "Pendekatan CSI EDU sangat membantu kami karena tidak berhenti pada pelatihan teori. Instruktur hadir mendampingi guru kami memeriksa modul ajar dan mengamati praktik di kelas secara langsung.",
          author: "Drs. Bambang Sutrisno",
          role: "Direktur Pendidikan",
          institution: "Yayasan Pendidikan Nusantara",
          outcome: "88% guru berhasil menyusun modul ajar berdiferensiasi mandiri",
        },
        {
          quote:
            "School Reading System mengubah sudut pandang anak-anak kami tentang membaca. Dengan adanya kuis pemahaman dan sistem apresiasi poin, mereka termotivasi menuntaskan buku bacaan setiap pekan.",
          author: "Ahmad Fauzi, S.Pd.",
          role: "Koordinator Program Literasi",
          institution: "SD Islam Terpadu Al-Hikmah",
          outcome: "Kenaikan rata-rata 14 buku tuntas dibaca per siswa per tahun",
        },
        {
          quote:
            "Laporan asesmen berkala dari NF Testing Center memberi kami kejelasan data yang selama ini tidak terlihat dari nilai ujian harian biasa. Kami tahu persis di sub-materi mana siswa membutuhkan penguatan.",
          author: "Maria Simatupang, M.Pd.",
          role: "Wakil Kepala Sekolah Bidang Kurikulum",
          institution: "SMA Santo Yosef Medan",
          outcome: "Kenaikan skor literasi membaca pada Rapor Pendidikan ANBK sebesar 32%",
        },
      ],
    },
    articles: {
      eyebrow: "Publikasi & Riset",
      title: "Artikel dan Panduan Pendidikan",
      subtitle:
        "Kajian dan panduan praktis yang ditulis oleh tim peneliti, konsultan, dan praktisi pendidikan CSI EDU.",
      readMore: "Baca Artikel Lengkap",
    },
    ctaSection: {
      title: "Diskusikan Kebutuhan Peningkatan Mutu Sekolah Anda",
      description:
        "Tim konsultan pendidikan kami siap memaparkan kerangka kerja sama, memberikan contoh instrumen asesmen, dan menyusun skema program yang sesuai dengan kondisi sekolah Anda.",
      btnPrimary: "Jadwalkan Pertemuan Konsultasi",
      btnSecondary: "Hubungi Melalui WhatsApp",
    },
    modal: {
      title: "Permohonan Diskusi & Presentasi Program",
      subtitle:
        "Silakan isi formulir singkat berikut. Tim konsultan CSI EDU akan menghubungi Anda untuk mengonfirmasi jadwal pertemuan daring atau kunjungan ke sekolah.",
      schoolLabel: "Nama Sekolah atau Yayasan",
      nameLabel: "Nama Lengkap Narahubung",
      roleLabel: "Jabatan di Sekolah",
      phoneLabel: "Nomor WhatsApp Aktif",
      emailLabel: "Alamat Email Resmi",
      cityLabel: "Kabupaten / Kota",
      interestLabel: "Layanan yang Ingin Didiskusikan",
      notesLabel: "Catatan Kebutuhan atau Kendala Sekolah Saat Ini",
      submitBtn: "Kirim Permohonan Diskusi",
      successTitle: "Permohonan Anda Telah Kami Terima",
      successDesc:
        "Terima kasih atas minat Anda pada program CSI EDU. Tim kami akan segera menghubungi nomor WhatsApp Anda dalam waktu 1x24 jam kerja untuk menentukan jadwal paparan program.",
    },
    footer: {
      description:
        "CSI EDU (Catalyst for School Improvement) adalah lembaga penyedia ekosistem pendampingan dan teknologi pendidikan yang berfokus pada transformasi mutu sekolah, kapasitas guru, dan penguatan literasi membaca siswa di Indonesia.",
      address: "Training Center CSI, Grand Depok City, Sektor Anggrek, Kota Depok, Jawa Barat 16412",
      colSolutions: "Solusi Kemitraan",
      colPrograms: "Platform Produk",
      colCompany: "Lembaga",
      copyright: "Hak cipta dilindungi undang-undang. CSI EDU — Catalyst for School Improvement.",
    },
  },
  en: {
    topBar: {
      tagline: "Catalyst for School Improvement • School Quality & Teacher Ecosystem",
      contact: "School Partnership Consultation",
      phone: "+62 856 9504 2915",
    },
    nav: {
      solutions: "Partnership Solutions",
      leadership: "Expert Council",
      learningBrewing: "Learning & Brewing",
      products: "Platforms",
      methodology: "Methodology",
      planner: "Program Planner",
      caseStudies: "Outcomes & Impact",
      articles: "Research & Insights",
      contactBtn: "Schedule Consultation",
    },
    hero: {
      eyebrow: "Catalyst for School Improvement (CSI EDU)",
      headline: "Integrated School Improvement: Teacher Development, Assessment & Student Literacy.",
      subheadline:
        "We collaborate with school leadership, foundations, and education authorities across Indonesia to drive classroom transformation: developing teacher instructional mastery, establishing reading habits through the School Reading System, and providing diagnostic assessment analytics aligned with national standards.",
      primaryCta: "Design School Program",
      secondaryCta: "Explore Solutions",
      metrics: {
        schools: {
          value: "450+",
          label: "Partner Schools & Foundations",
          desc: "Elementary, junior, and senior secondary schools nationwide",
        },
        teachers: {
          value: "12,000+",
          label: "Educators Trained",
          desc: "Instructional competency and teacher certification preparation",
        },
        students: {
          value: "180,000+",
          label: "Students Assessed",
          desc: "Systematic evaluation of reading literacy and core competencies",
        },
        books: {
          value: "1.2M+",
          label: "Books Read and Verified",
          desc: "Driven by the School Reading System leveled reading framework",
        },
      },
    },
    solutions: {
      eyebrow: "Core Capabilities",
      title: "Four Pillars of School Quality Improvement",
      subtitle:
        "Built to address curriculum governance, continuous educator development, and student learning outcomes.",
      items: [
        {
          id: "teacher-dev",
          title: "Teacher Professional Development",
          subtitle: "CSI Academy",
          target: "For Subject Teachers & Classroom Instructors",
          description:
            "Sustained, cohort-based professional learning embedded in real classroom instruction. Focuses on differentiated instruction, AI classroom applications, and structured preparation for national teacher certification (PPG).",
          deliverables: [
            "Instructional module design aligned with national standards",
            "Teacher portfolio coaching and competency review",
            "Clinical supervision and structured peer reflection cycles",
            "Verified program completion certification and portfolio",
          ],
          linkText: "CSI Academy Details",
        },
        {
          id: "literacy-srs",
          title: "School Reading System (SRS)",
          subtitle: "NF Testing Center",
          target: "For Students & School Literacy Coordinators",
          description:
            "A leveled reading cultivation program featuring digital comprehension checkpoints. Utilizes a point-based recognition framework that motivates self-driven reading habits across the academic semester.",
          deliverables: [
            "Curated grade-appropriate leveled book catalog",
            "Digital reading comprehension quizzes",
            "Classroom reading analytics and student progress tracking",
            "Teacher guides for cross-curricular reading integration",
          ],
          linkText: "Explore SRS Framework",
        },
        {
          id: "assessment",
          title: "Diagnostic Assessment & Analytics",
          subtitle: "Testing & Diagnostic Services",
          target: "For Curriculum Heads & Academic Leadership",
          description:
            "Periodic diagnostic assessments measuring student reading comprehension, numeracy, and reasoning abilities. Actionable analytics enable instructors to implement timely remediation and enrichment.",
          deliverables: [
            "National assessment standard-aligned question bank",
            "Competency breakdown reports by student and classroom",
            "Pedagogical recommendations for subject matter teachers",
            "Comparative semester-over-semester progress data",
          ],
          linkText: "Diagnostic Testing Services",
        },
        {
          id: "school-governance",
          title: "School Governance & Quality Planning",
          subtitle: "School Improvement Partnership",
          target: "For Principals & Foundation Board Directors",
          description:
            "Strategic advisory helping school leaders implement Data-Based Planning (Perencanaan Berbasis Data) from national school report card indicators. Prioritizes investment allocations and accreditation milestones.",
          deliverables: [
            "Baseline institutional climate and academic audit",
            "1-3 year strategic school improvement roadmap",
            "Academic supervisory coaching for administrative teams",
            "Comprehensive periodic reporting for governing boards",
          ],
          linkText: "Quality Governance Advisory",
        },
      ],
    },
    leadership: {
      eyebrow: "Leadership & Expert Council",
      title: "Guided by Seasoned Practitioners & Educational Transformation Scholars",
      subtitle:
        "CSI EDU partnerships are engineered and facilitated by senior experts with decades of classroom-tested experience in instructional leadership, curriculum reform, and institutional governance.",
      expertBadge: "Lead School Transformation Expert & Founder",
      expertName: "Dr. Rahmat Syehani",
      expertRole: "School Transformation Expert & CSI EDU Ecosystem Architect",
      expertBio:
        "For over two decades, Dr. Rahmat has spearheaded school turnaround, Kurikulum Merdeka integration, and instructional leadership programs across hundreds of primary and secondary schools in Indonesia. Regularly collaborates with university researchers (including UPI) and national educator associations.",
      expertPoints: [
        "Collaborative educational quality and curriculum research alongside premier universities (e.g. UPI)",
        "Specialization in Islamic Educational Leadership, 5 Levels of Leadership, and The Law of Process",
        "Chief architect of the CSI Academy, NF Testing Center, and School Reading System (SRS) ecosystem",
        "Lead moderator and keynote speaker for the 'Learning & Brewing' school executive discussion forum",
      ],
      expertQuote:
        "A school cannot grow beyond the capacity of its leadership. Real transformation takes root when principals and teachers commit to being authentic, lifelong learners in the classroom.",
      associateTitle: "Legal & Institutional Risk Management Associate",
      associateName: "Achmad Fatoni, S.E., SH",
      associateRole: "Associate of CSI — Educational Legal & Risk Management",
      associateBio:
        "Advising governing foundation boards and school executives on legal vulnerability mapping, educator labor law compliance, and dispute-free institutional governance.",
      consultationCta: "Invite Expert Council Presentation",
    },
    learningBrewing: {
      eyebrow: "School Executive Discussion Series",
      title: "Learning & Brewing: Strategic Forums for School Leaders & Educators",
      subtitle:
        "An intimate yet high-impact executive gathering to dissect strategic governance challenges, adaptive leadership, and school legal risk mitigation over coffee.",
      venueTag: "Training Center & Workshop Venue",
      venueLocation: "CSI Training Center, Grand Depok City, Depok, West Java, Indonesia",
      sessions: [
        {
          category: "Governance & School Law",
          title: "School Legal Awareness & Institutional Risk Mapping",
          speaker: "Dr. Rahmat Syehani & Achmad Fatoni, S.E., SH",
          focus: "Reframing education law as an institutional safeguard rather than an administrative burden; preventing foundation disputes and employment liabilities.",
          badge: "Open Forum",
          dateOrStatus: "Grand Depok City • Recurring Series",
        },
        {
          category: "Transformational Leadership",
          title: "Transforming School: Leadership for a Culture of Thinking & Problem Solving",
          speaker: "Dr. Rahmat Syehani",
          focus: "Instilling critical thinking across schools by shifting the instructional leadership paradigm of principals and senior educators.",
          badge: "Executive Workshop",
          dateOrStatus: "Grand Depok City • Dedicated Cohort",
        },
        {
          category: "Executive Capacity Building",
          title: "The Law of Process & 5 Levels of Educational Leadership",
          speaker: "Dr. Rahmat Syehani",
          focus: "Evaluating personal and institutional leadership tiers to overcome administrative stagnation and accelerate educator productivity.",
          badge: "Masterclass",
          dateOrStatus: "Grand Depok City • Limited Seats",
        },
      ],
      registerCta: "Register for Upcoming Session",
      whatsappCta: "Contact Event Coordinator (Firman: +62 856-9504-2915)",
    },
    methodology: {
      eyebrow: "Partnership Framework",
      title: "Sustainable School Improvement Methodology",
      subtitle:
        "We do not provide one-off workshops. CSI EDU partners with institutions through a four-phase cycle ensuring tangible instructional change in classrooms.",
      pillars: [
        {
          step: "01",
          title: "Diagnosis & Needs Assessment",
          desc: "Baseline evaluation of teacher pedagogical competencies and standardized student reading literacy diagnostics.",
          detail: "Timeline: Weeks 1–3 of partnership",
        },
        {
          step: "02",
          title: "Co-Designed Program Blueprint",
          desc: "Establishing measurable quality objectives with school leaders, selecting customized teacher modules, and scheduling execution.",
          detail: "Tailored to the school's accreditation and report card data",
        },
        {
          step: "03",
          title: "Implementation & Classroom Support",
          desc: "Delivery of teacher cohort programs (CSI Academy) concurrent with School Reading System rollout, supported by onsite field mentors.",
          detail: "Bi-weekly mentoring and instructional monitoring",
        },
        {
          step: "04",
          title: "Outcomes Evaluation & Roadmap Renewal",
          desc: "Semester-end assessment benchmarking student progress, teacher certification completions, and formal reporting for governing boards.",
          detail: "Comprehensive data-driven report card",
        },
      ],
    },
    products: {
      eyebrow: "Platform Ecosystem",
      title: "Two Complementary Flagship Products",
      subtitle:
        "Proprietary technology platforms refined through fieldwork across hundreds of Indonesian classrooms.",
      academy: {
        name: "CSI Academy",
        role: "Educator Learning & Community Platform",
        desc: "A dedicated professional LMS for educators to upgrade pedagogical skills, craft differentiated lesson plans, and prepare for national certification.",
        focusAreas: [
          "Practice-grounded progressive teacher curriculum",
          "Nationwide professional learning communities",
          "Mentorship on lesson plan and assessment design",
          "Periodic feedback from master trainers and supervisors",
        ],
        cohortInfo: "New training cohorts launch at the start of each semester",
        cta: "Visit CSI Academy Portal",
        url: "https://csi-academy.id",
      },
      testing: {
        name: "NF Testing Center & SRS",
        role: "Student Assessment & Literacy Platform",
        desc: "An integrated assessment engine managing diagnostic exams and powering the School Reading System with automated verification and reporting.",
        focusAreas: [
          "Student book reading tracking and digital logging",
          "Automated comprehension quizzes evaluating text mastery",
          "Monitoring dashboards for teachers and literacy heads",
          "Item bank calibrated to national educational standards",
        ],
        statsInfo: "Over 180,000 student assessment records managed to date",
        cta: "Visit NF Testing Center",
        url: "https://nf-testingcenter.org",
      },
    },
    planner: {
      eyebrow: "Program Simulation",
      title: "Design a Program Blueprint for Your School",
      subtitle:
        "Select your institution's profile to view an indicative improvement roadmap and project scope.",
      schoolTypeLabel: "Institution Level",
      teachersLabel: "Number of Participating Teachers",
      studentsLabel: "Target Number of Students",
      priorityLabel: "Primary Academic Priority",
      priorities: {
        literacy: "Reading Literacy & National Standard Benchmark (ANBK)",
        teacher: "Teacher Instructional Mastery & Certification Readiness (PPG)",
        management: "Assessment Modernization & Multi-Campus Governance",
      },
      outputTitle: "Recommended CSI EDU Program Scope",
      outputSubtitle: "Projected scope based on selected institutional parameters:",
      blueprintTitle: "Proposed Engagement Blueprint",
      ctaButton: "Request Detailed Proposal for This Blueprint",
    },
    caseStudies: {
      eyebrow: "Partnership Outcomes",
      title: "Evidence of Impact Across Partner Schools",
      subtitle:
        "Firsthand accounts from school foundation directors, principals, and teachers who have implemented CSI EDU initiatives.",
      stories: [
        {
          quote:
            "CSI EDU's approach made all the difference because it went far beyond theoretical lectures. Their coaches worked directly with our faculty, examining actual lesson plans and conducting classroom observations.",
          author: "Drs. Bambang Sutrisno",
          role: "Education Director",
          institution: "Yayasan Pendidikan Nusantara",
          outcome: "88% of teachers independently designed differentiated lesson plans",
        },
        {
          quote:
            "The School Reading System transformed our students' relationship with books. With structured comprehension quizzes and recognition milestones, reading became a consistent weekly celebration.",
          author: "Ahmad Fauzi, S.Pd.",
          role: "Literacy Program Coordinator",
          institution: "SD Islam Terpadu Al-Hikmah",
          outcome: "Average of 14 complete books read per student each academic year",
        },
        {
          quote:
            "Diagnostic reports from NF Testing Center provided clarity that daily homework scores could never show. We identified exactly which cognitive standards required immediate instructional reinforcement.",
          author: "Maria Simatupang, M.Pd.",
          role: "Vice Principal for Curriculum",
          institution: "SMA Santo Yosef Medan",
          outcome: "32% increase in school reading literacy index on national assessments",
        },
      ],
    },
    articles: {
      eyebrow: "Publications & Research",
      title: "Educational Insights and Field Guides",
      subtitle:
        "Evidence-grounded guides and analyses authored by CSI EDU researchers, instructional coaches, and educators.",
      readMore: "Read Full Article",
    },
    ctaSection: {
      title: "Consult with Our Educational Advisory Team",
      description:
        "Our team is prepared to present the partnership framework, provide sample assessment instruments, and structure an implementation schedule suited to your institution.",
      btnPrimary: "Schedule a Consultation Session",
      btnSecondary: "Inquire via WhatsApp",
    },
    modal: {
      title: "Request Program Consultation & Presentation",
      subtitle:
        "Complete the brief form below. A CSI EDU education consultant will contact you within 24 business hours to confirm an online presentation or campus visit.",
      schoolLabel: "School or Foundation Name",
      nameLabel: "Contact Person Full Name",
      roleLabel: "Role / Position at Institution",
      phoneLabel: "Active WhatsApp Number",
      emailLabel: "Official Email Address",
      cityLabel: "City / Regency",
      interestLabel: "Areas of Interest",
      notesLabel: "Current Academic Priorities or Challenges",
      submitBtn: "Submit Consultation Request",
      successTitle: "Your Request Has Been Received",
      successDesc:
        "Thank you for contacting CSI EDU. Our advisory team will reach out to your WhatsApp number within 1 business day to coordinate the presentation schedule.",
    },
    footer: {
      description:
        "CSI EDU (Catalyst for School Improvement) is an integrated educational development and technology ecosystem dedicated to school quality improvement, teacher professional mastery, and student reading literacy throughout Indonesia.",
      address: "CSI Training Center, Grand Depok City, Depok, West Java 16412, Indonesia",
      colSolutions: "Partnership Solutions",
      colPrograms: "Platforms",
      colCompany: "Institution",
      copyright: "All rights reserved. CSI EDU — Catalyst for School Improvement.",
    },
  },
};
