export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Machine Learning & AI",
    description: "Pengolahan data, pemodelan, evaluasi, dan interpretasi model.",
    items: [
      "Python",
      "TensorFlow",
      "XGBoost",
      "Scikit-learn",
      "Pandas",
      "Optuna",
      "SHAP",
    ],
  },
  {
    title: "Backend & Database",
    description: "API, logika bisnis, dan pengelolaan data.",
    items: [
      "Laravel",
      "Filament",
      "PHP",
      "Node.js",
      "Express",
      "REST API",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Frontend",
    description: "Antarmuka web yang responsif dan mudah digunakan.",
    items: ["Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mobile, Game & AR",
    description: "Aplikasi interaktif lintas platform.",
    items: ["Flutter", "Dart", "Unity", "C#", "Vuforia", "Construct 3"],
  },
];
