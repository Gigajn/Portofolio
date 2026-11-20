export type ProjectCategory = "AI & Machine Learning" | "Web" | "Augmented Reality";

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
  /** Path gambar di folder public/assets. Kosongkan untuk sampul otomatis. */
  image?: string;
  /** Status singkat, mis. "Dalam pengembangan". */
  status?: string;
  highlights?: string[];
  /** TODO (opsional): tautan demo / repository. HR sangat terbantu dengan tautan ini. */
  links?: { demo?: string; github?: string; drive?: string };
};

export const projects: Project[] = [
  {
    slug: "archodin",
    title: "Archodin – Framework Multi-Agent AI",
    category: "AI & Machine Learning",
    status: "Dalam pengembangan",
    summary:
      "Library Rust untuk membangun sistem multi-agent berbasis LLM, dikembangkan di atas langchain-rust.",
    description:
      "Archodin adalah library Rust untuk membangun sistem multi-agent berbasis Large Language Model (LLM), dikembangkan di atas fork langchain-rust (lisensi MIT). Konsepnya adalah fondasi sebuah \"perusahaan\" yang stafnya terdiri dari AI agent: setiap agent memiliki peran, instruksi, tools, dan memori, lalu bekerja sama dalam departemen untuk menyelesaikan pekerjaan yang diberikan, dengan persetujuan akhir tetap di tangan manusia. Proyek ini masih dalam tahap pengembangan aktif.",
    tech: ["Rust", "LLM", "LangChain", "Multi-Agent"],
    highlights: [
      "Agent berbasis LLM dengan peran, tools, dan memori masing-masing",
      "Agent dikelompokkan ke dalam departemen dengan tujuan dan anggaran sendiri",
      "Keputusan penting tetap memerlukan persetujuan manusia (human-in-the-loop)",
      "Dibangun di atas langchain-rust dan tetap dapat disinkronkan dengan upstream",
    ],
    links: { github: "https://github.com/Gigajn/Archodin_Inc" },
  },
  {
    slug: "ml-bansos-karangrau-xgb",
    title: "Prediksi Kelayakan Bansos Desa Karangrau",
    category: "AI & Machine Learning",
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

    links: { github: "https://github.com/Gigajn/Model-Bansos-Karangrau" },
  },
  {
    slug: "ml-stunting-tf",
    title: "Model Prediksi Risiko Stunting",
    category: "AI & Machine Learning",
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

    links: { github: "https://github.com/Gigajn/Childer-Growth-Guardian" },
  },
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

    links: { github: "https://github.com/Gigajn/BGE-Supply" },
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

    links: {
      demo: "https://imm-zeta.vercel.app",
      github: "https://github.com/Gigajn/formatur-fe",
    },
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
    slug: "wisata-konservasi-ar",
    title: "Wisata Konservasi Augmented Reality",
    category: "Augmented Reality",
    summary:
      "Aplikasi edukasi AR bertema konservasi dengan model 3D dan scene interaktif.",
    description:
      "Aplikasi edukasi berbasis Augmented Reality bertema konservasi yang menampilkan model 3D dan scene interaktif agar proses belajar terasa lebih menyenangkan. Dikembangkan dengan Unity (C#) dan Vuforia.",
    tech: ["Unity", "C#", "Vuforia"],
    image: "/assets/wisata-konservasi-ar.png",
    highlights: ["Tracking berbasis marker dan markerless", "Optimasi model 3D"],
  },
];

export const projectCategories: ProjectCategory[] = [
  "AI & Machine Learning",
  "Web",
  "Augmented Reality",
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
