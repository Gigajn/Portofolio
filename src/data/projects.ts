export type Project = {
  slug: string;
  title: string;
  period?: string;
  tech: string[];
  image: string; // path ke public/assets
  description: string;
  highlights?: string[];
  links?: { demo?: string; github?: string };
};
export const projects: Project[] = [
  {
    slug: "oodin-games",
    title: "Oodin Games",
    period: "",
    tech: ["Game", "Design", "Construct 3"],
    image: "/assets/odin games (2).png",
    description:
      "Indie game prototype exploring tight gameplay loops and level pacing. I worked on gameplay systems, asset integration, and the overall feel.",
    highlights: [
      "Prototype dapat dimainkan",
      "Dokumentasi game loop & level design",
    ],
  },
  {
    slug: "habibie-club-genius",
    title: "Habibie Club Genius",
    period: "",
    tech: ["Web"],
    image: "/assets/Habibie Club.png",
    description:
      "A learning platform with module management, connecting tutors with students, and a dashboard to track progress.",
  },
  {
    slug: "bge-supply",
    title: "BGE Supply (Filament + Laravel)",
    period: "",
    tech: ["Laravel", "Filament", "PHP", "PostgreSQL"],
    image: "/assets/BGE.png",
    description:
      "Back-office admin for supply operations, including product CRUD and synchronization with an e-commerce catalog.",
  },
  {
    slug: "wisata-konservasi-ar",
    title: "Wisata Konservasi Augmented Reality (Unity) C#",
    period: "",
    tech: ["Unity", "C#", "Vuforia"],
    image: "/assets/AR.png",
    description:
      "An AR education app for conservation themes—showcasing 3D models and interactive scenes to make learning playful.",
    highlights: ["Marker/markerless tracking", "Optimasi model 3D"],
  },
  {
    slug: "imm-formatur-vote",
    title: "Website Pemilihan Formatur IMM (Angular + Express)",
    period: "",
    tech: ["Angular", "TypeScript", "Express", "Node.js"],
    image: "/assets/IMMFAST.png",
    description:
      "A secure voting web app for Ikatan Mahasiswa Muhammadiyah with real-time tallying and secure access control.",
    highlights: ["Role-based access", "Audit log (opsional)", "Rekap realtime"],
  },
  {
    slug: "ml-stunting-tf",
    title: "Model ML (TensorFlow) – Stunting",
    period: "",
    tech: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    image: "/assets/py.png",
    description:
      "A TensorFlow model to assess stunting risk, feature experiments, evaluation, and a reproducible preprocessing pipeline.",
    highlights: [
      "Notebook & pipeline preprocessing",
      "Evaluasi (accuracy/ recall/precision)",
    ],
  },
  {
    slug: "ml-bansos-karangrau-xgb",
    title: "Model ML (XGBoost) – Bantuan Sosial Karangrau",
    period: "",
    tech: ["Python", "XGBoost", "Optuna", "SHAP"],
    image: "/assets/py.png",
    description:
      "An XGBoost model to help determine social assistance eligibility for Karangrau village with transparent reasoning.",
    highlights: ["Feature engineering", "SHAP/feature importance"],
  },
];
export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
