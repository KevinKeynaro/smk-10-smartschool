# SMK 10 SMARTSCHOOL — Next.js

Konversi desain Figma (projek_UI_UX_Mapil.pdf) ke Next.js 15 (App Router) + TypeScript + Tailwind CSS.

## Jalankan
```bash
npm install
npm run dev   # http://localhost:3000
```

## Struktur
- `app/` — halaman: `/`, `/profil/*`, `/info-sekolah/*`, `/prestasi`, `/jurusan/[slug]`, `/kontak`
- `components/` — Navbar, Footer, PageHero, InfoCard, PrestasiList, dll
- `lib/data.ts` — semua konten (edit di sini untuk ganti teks/data)
- `tailwind.config.ts` — design token (navy, sky-brand, font Inter)

## Gambar
Taruh foto asli di `public/images/` (nama file ada di `lib/data.ts`):
`hero.jpg`, `kepala-sekolah.jpg`, `fasilitas-*.jpg`, `ekskul-*.jpg`.
Kalau belum ada, otomatis tampil gradient navy.
