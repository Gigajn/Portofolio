# Portofolio – Giga Jundan Al Huda

Website portofolio pribadi **Giga Jundan Al Huda**, mahasiswa Sistem Informasi di Universitas Ahmad Dahlan, Yogyakarta, dengan fokus pada Machine Learning dan penerapan AI. Berisi profil singkat, keahlian, proyek pilihan, pendidikan, dan kontak.

🌐 **Website:** [portofolio-nu-green-15.vercel.app](https://portofolio-nu-green-15.vercel.app) · 📧 [gigahuda12@gmail.com](mailto:gigahuda12@gmail.com) · 💼 [LinkedIn](https://www.linkedin.com/in/gigajdn)

## Proyek yang ditampilkan

| Proyek | Bidang | Teknologi |
| --- | --- | --- |
| [Archodin – Framework Multi-Agent AI](https://github.com/Gigajn/Archodin_Inc) (dalam pengembangan) | AI | Rust, LLM, LangChain |
| [Prediksi Kelayakan Bansos Desa Karangrau](https://github.com/Gigajn/Model-Bansos-Karangrau) | Machine Learning | Python, XGBoost, Optuna, SHAP |
| [Model Prediksi Risiko Stunting](https://github.com/Gigajn/Childer-Growth-Guardian) | Machine Learning | Python, TensorFlow, Pandas, Scikit-learn |
| [BGE Supply](https://github.com/Gigajn/BGE-Supply) | Web (back-office) | Laravel, Filament, PHP, PostgreSQL |
| [Website Pemilihan Formatur IMM](https://github.com/Gigajn/formatur-fe) ([demo](https://imm-zeta.vercel.app)) | Web (e-voting) | Angular, TypeScript, Express, Node.js |
| Habibie Club Genius | Web (platform belajar) | Web |
| [Wisata Konservasi Augmented Reality](https://drive.google.com/drive/folders/1_8BEBPxCg5VEjwCNdyV_LlMnCufkJ30t?usp=sharing) (Google Drive) | AR | Unity, C#, Vuforia |

## Teknologi website

- [Next.js](https://nextjs.org) (App Router, static generation). Catatan: website ini ditulis dengan TypeScript, bukan Rust. Turbopack, alat build bawaan Next.js, memang dibuat dengan Rust.
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide](https://lucide.dev) untuk ikon
- SEO: metadata, Open Graph image otomatis, `sitemap.xml`, `robots.txt`, dan JSON-LD

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Build produksi:

```bash
npm run build
npm start
```

## Mengubah isi website

Semua konten ada di folder `src/data`, jadi tidak perlu menyentuh komponen:

| File | Isi |
| --- | --- |
| `src/data/personal.ts` | Nama, ringkasan, pendidikan, pengalaman, tautan CV/foto, kontak |
| `src/data/projects.ts` | Daftar proyek (judul, deskripsi, teknologi, gambar, tautan demo/GitHub) |
| `src/data/skills.ts` | Keahlian yang dikelompokkan per bidang |

Kolom yang dibiarkan kosong (`""`) otomatis disembunyikan. Cari komentar `TODO` untuk bagian yang sebaiknya dilengkapi, misalnya file CV, foto profil, dan tautan demo proyek.

Gambar proyek disimpan di `public/assets`, CV di `public/cv`. Proyek tanpa gambar otomatis mendapat sampul bergaya. Setiap proyek bisa diberi tautan `demo`, `github`, dan `drive` (Google Drive).

## Struktur folder

```
src/
├── app/
│   ├── page.tsx                  # Halaman utama
│   ├── projects/[slug]/page.tsx  # Halaman detail proyek
│   ├── layout.tsx                # Layout, font, metadata SEO
│   ├── opengraph-image.tsx       # Gambar pratinjau saat link dibagikan
│   ├── sitemap.ts / robots.ts
│   └── globals.css               # Tema warna & gaya dasar
├── components/                   # Navbar, Hero, ProjectCard, Contact, dll.
└── data/                         # Konten website
```

## Deploy

Cara termudah adalah [Vercel](https://vercel.com/new): impor repository ini, lalu tambahkan environment variable `NEXT_PUBLIC_SITE_URL` berisi URL website (mis. `https://nama-anda.vercel.app`) agar sitemap dan metadata memakai domain yang benar.
