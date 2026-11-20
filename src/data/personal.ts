/**
 * Data pribadi yang tampil di seluruh website.
 * Kolom yang masih kosong ("") otomatis disembunyikan sampai Anda mengisinya.
 */
export const personal = {
  name: "Giga Jundan Al Huda",
  shortName: "Giga",
  initials: "GJ",

  /** Peran/posisi utama yang ingin dilihat HR. */
  role: "Mahasiswa Sistem Informasi",
  headline: "Web Developer · Backend · Data & Machine Learning",

  location: "Yogyakarta, Indonesia",

  /**
   * TODO: isi status yang sedang Anda cari, mis.
   * "Terbuka untuk magang" atau "Terbuka untuk posisi Junior Backend Developer".
   */
  openTo: "",

  summary:
    "Mahasiswa Sistem Informasi di Universitas Ahmad Dahlan yang senang mengubah masalah nyata menjadi produk digital. Saya membangun aplikasi web, aplikasi Augmented Reality, game, hingga model machine learning, dengan minat utama pada pengembangan backend dan pengolahan data.",

  about: [
    "Saya merancang dan mengembangkan perangkat lunak yang mudah digunakan dan andal di balik layar. Pekerjaan saya mencakup antarmuka produk sekaligus sistem inti di bawahnya: API, database, dan alur data yang menjaga informasi tetap akurat.",
    "Fokus saya adalah endpoint yang jelas, pipeline data yang dapat diandalkan, dan perbaikan kecil yang konsisten agar produk lebih nyaman digunakan serta mudah dirawat.",
  ],

  values: [
    "Empati kepada pengguna di setiap keputusan",
    "Kode yang rapi, konsisten, dan mudah dibaca",
    "Iterasi cepat dan terbuka terhadap masukan",
    "Desain yang tenang dan mudah diakses",
    "Keputusan berbasis data",
  ],

  education: [
    {
      institution: "Universitas Ahmad Dahlan",
      program: "Program Studi Sistem Informasi",
      /** TODO: isi tahun, mis. "2022 – Sekarang" */
      period: "",
      /** TODO (opsional): IPK, mata kuliah relevan, atau prestasi. */
      notes: [] as string[],
    },
  ],

  /**
   * TODO (opsional): pengalaman kerja, magang, organisasi, atau kepanitiaan.
   * Bagian "Pengalaman" baru akan tampil setelah ada isinya. Contoh:
   * { title: "Backend Developer (Magang)", org: "Nama Perusahaan", period: "Jan – Jun 2025",
   *   points: ["Membangun REST API untuk ...", "Meningkatkan ..."] },
   */
  experience: [] as {
    title: string;
    org: string;
    period: string;
    points: string[];
  }[],

  /** TODO: simpan CV di public/cv/ lalu isi, mis. "/cv/CV-Giga-Jundan-Al-Huda.pdf" */
  cvUrl: "",
  /** TODO: simpan foto profil di public/assets/ lalu isi, mis. "/assets/foto-profil.jpg" */
  photo: "",
  /** TODO (opsional): nomor WhatsApp format internasional tanpa "+", mis. "6281234567890" */
  whatsapp: "",

  email: "gigahuda12@gmail.com",
  github: "https://github.com/gigajn",
  linkedin: "https://linkedin.com/in/gigajdn",
};
