# React Personal Notes

Proyek ini merupakan aplikasi catatan pribadi berbasis React yang dibuat sebagai bagian dari pembelajaran **Belajar Membuat Aplikasi Web dengan React**.

## Fitur

- Menampilkan daftar catatan aktif dan arsip.
- Menambahkan catatan baru.
- Menghapus catatan.
- Mengarsipkan dan mengembalikan catatan dari arsip.
- Pencarian berdasarkan judul atau isi catatan.
- Batas maksimal 50 karakter untuk judul.
- Validasi minimal 10 karakter untuk isi catatan.
- Pengelompokan catatan berdasarkan bulan dan tahun.
- Penyorotan kata yang cocok dengan pencarian.

## Teknologi

- React 19
- React DOM
- Vite
- JavaScript ES Modules
- CSS
- ESLint

## Struktur Proyek

```text
react-personal-notes/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── NoteActionButton.jsx
│   │   ├── NoteInput.jsx
│   │   ├── NoteItem.jsx
│   │   ├── NoteSearch.jsx
│   │   └── NotesList.jsx
│   ├── styles/
│   │   └── style.css
│   ├── utils/
│   │   └── index.js
│   └── index.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Menjalankan Proyek

```bash
npm install
npm run dev
```

Untuk build production:

```bash
npm run build
```

Untuk preview hasil build:

```bash
npm run serve
```

## Informasi

Repository ini dibuat untuk menyimpan satu proyek submission secara terpisah sesuai prinsip **1 ZIP = 1 repository**.

Author: **Muhammad Reza Pahlevi Harahap**
