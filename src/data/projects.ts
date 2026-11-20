export type ProjectCategory = "Web" | "Machine Learning" | "Game & AR";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Ringkasan satu kalimat untuk kartu proyek. */
  summary: string;
  /** Penjelasan lengkap untuk halaman detail. */
  description: string;
  /** TODO (opsional): peran Anda, mis. "Backend Developer" atau "Solo project". */
  role?: string;
  /** TODO (opsional): periode pengerjaan, mis. "Mar – Jun 2024". */
  period?: string;
  tech: string[];
  /** Path gambar di folder public/assets. */
  image: string;
  highlights?: string[];
  /** TODO (opsional): tautan demo / repository. HR sangat terbantu dengan tautan ini. */
  links?: { demo?: string; github?: string };
};

export const projects: Project[] = [
  {
    slug: "bge-supply",
    title: "BGE Supply",
    category: "Web",
    summary:
      "Sistem back-office untuk operasional supply dengan sinkronisasi katalog e-commerce.",
    description:
      "Aplikasi admin back-office untuk mendukung operasional supply, mencakup pengelolaan data produk (CRUD) dan sinkronisasi dengan katalog e-commerce. Dibangun dengan Laravel dan Filament di atas database PostgreSQL.",
    tech: ["Laravel", "Filament", "PHP", "PostgreSQL"],
    image: "/assets/bge-supply.png",
    highlights: [
      "Pengelolaan data produk (CRUD) melalui panel admin",
      "Sinkronisasi data dengan katalog e-commerce",
    ],
  },
  {
    slug: "imm-formatur-vote",
    title: "Website Pemilihan Formatur IMM",
    category: "Web",
    summary:
      "Aplikasi e-voting dengan rekap suara real-time dan kontrol akses berbasis peran.",
    description:
      "Aplikasi web pemilihan formatur untuk Ikatan Mahasiswa Muhammadiyah (IMM) dengan rekapitulasi suara secara real-time dan kontrol akses yang aman. Frontend dibangun dengan Angular, sedangkan backend menggunakan Express di Node.js.",
    tech: ["Angular", "TypeScript", "Express", "Node.js"],
    image: "/assets/imm-formatur-vote.png",
    highlights: [
      "Hak akses berbasis peran (role-based access control)",
      "Rekap hasil pemilihan secara real-time",
    ],
  },
  {
    slug: "habibie-club-genius",
    title: "Habibie Club Genius",
    category: "Web",
    summary:
      "Platform belajar yang menghubungkan tutor dan siswa, lengkap dengan dashboard progres.",
    description:
      "Platform pembelajaran dengan manajemen modul, fitur yang menghubungkan tutor dengan siswa, serta dashboard untuk memantau perkembangan belajar.",
    tech: ["Web Platform"],
    image: "/assets/habibie-club.png",
    highlights: [
      "Manajemen modul pembelajaran",
      "Dashboard pemantauan progres siswa",
    ],
  },
  {
    slug: "ml-bansos-karangrau-xgb",
    title: "Prediksi Kelayakan Bansos Desa Karangrau",
    category: "Machine Learning",
    summary:
      "Model XGBoost untuk membantu menentukan kelayakan penerima bantuan sosial secara transparan.",
    description:
      "Model machine learning berbasis XGBoost untuk membantu menentukan kelayakan penerima bantuan sosial di Desa Karangrau. Hasil prediksi dilengkapi penjelasan yang transparan menggunakan SHAP agar keputusan dapat dipertanggungjawabkan.",
    tech: ["Python", "XGBoost", "Optuna", "SHAP"],
    image: "/assets/machine-learning.png",
    highlights: [
      "Feature engineering dari data penerima bantuan",
      "Tuning hyperparameter dengan Optuna",
      "Interpretasi model dengan SHAP / feature importance",
    ],
  },
  {
    slug: "ml-stunting-tf",
    title: "Model Prediksi Risiko Stunting",
    category: "Machine Learning",
    summary:
      "Model TensorFlow untuk menilai risiko stunting dengan pipeline preprocessing yang dapat direproduksi.",
    description:
      "Model TensorFlow untuk menilai risiko stunting, mencakup eksperimen fitur, evaluasi model, dan pipeline preprocessing yang dapat direproduksi.",
    tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    image: "/assets/machine-learning.png",
    highlights: [
      "Notebook dan pipeline preprocessing yang terdokumentasi",
      "Evaluasi model dengan accuracy, precision, dan recall",
    ],
  },
  {
    slug: "wisata-konservasi-ar",
    title: "Wisata Konservasi Augmented Reality",
    category: "Game & AR",
    summary:
      "Aplikasi edukasi AR bertema konservasi dengan model 3D dan scene interaktif.",
    description:
      "Aplikasi edukasi berbasis Augmented Reality bertema konservasi yang menampilkan model 3D dan scene interaktif agar proses belajar terasa lebih menyenangkan. Dikembangkan dengan Unity (C#) dan Vuforia.",
    tech: ["Unity", "C#", "Vuforia"],
    image: "/assets/wisata-konservasi-ar.png",
    highlights: ["Tracking berbasis marker dan markerless", "Optimasi model 3D"],
  },
  {
    slug: "oodin-games",
    title: "Oodin Games",
    category: "Game & AR",
    summary:
      "Prototipe game indie dengan fokus pada gameplay loop dan tempo level.",
    description:
      "Prototipe game indie yang mengeksplorasi gameplay loop yang solid dan tempo level yang pas. Saya mengerjakan sistem gameplay, integrasi aset, dan nuansa permainan secara keseluruhan.",
    tech: ["Construct 3", "Game Design"],
    image: "/assets/oodin-games.png",
    highlights: [
      "Prototipe yang sudah dapat dimainkan",
      "Dokumentasi game loop dan level design",
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Web",
  "Machine Learning",
  "Game & AR",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
