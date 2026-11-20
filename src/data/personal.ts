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
  headline: "Machine Learning · Applied AI · Backend Development",

  location: "Yogyakarta, Indonesia",

  /** Status yang sedang dicari (kosongkan "" untuk menyembunyikan). */
  openTo: "Terbuka untuk posisi Machine Learning / AI Engineer",

  summary:
    "Mahasiswa Sistem Informasi di Universitas Ahmad Dahlan yang berfokus pada machine learning dan penerapan AI untuk menyelesaikan masalah nyata. Berpengalaman membangun model prediksi dengan TensorFlow dan XGBoost, sekaligus sistem backend dan aplikasi web yang membawa model tersebut ke pengguna.",

  about: [
    "Saya tertarik pada bagaimana machine learning dan AI bisa diterapkan untuk membantu pengambilan keputusan, mulai dari menilai risiko stunting hingga menentukan kelayakan penerima bantuan sosial. Saya terbiasa menangani seluruh alurnya: menyiapkan data, feature engineering, melatih dan mengevaluasi model, hingga menjelaskan hasilnya dengan SHAP.",
    "Latar belakang saya di pengembangan backend dan web (Laravel, Node.js, Angular, Next.js) membantu saya membawa model ke tahap yang bisa dipakai: API yang jelas, pipeline data yang andal, dan aplikasi yang mudah digunakan. Saya ingin terus berkembang di bidang Machine Learning dan AI Engineering di perusahaan nasional maupun multinasional.",
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
  linkedin: "https://www.linkedin.com/in/gigajdn",
};
