# Aturin - Aplikasi Pengelolaan Jadwal dan Aktivitas

Aturin adalah aplikasi berbasis web yang dirancang untuk membantu pengguna dalam mengatur jadwal, mencatat aktivitas harian, dan meningkatkan produktivitas dengan antarmuka yang sederhana dan responsif.

## 👥 Anggota Kelompok

| Nama Lengkap             | NIM         |
|---------------------     |-------------|
| Mhd. Fauzan Aditya       | 221110425      |
| Nicholas Tandri          | [NIM]       |
| Filber Febrian Tanada    | [NIM]       |
| Filbert Wijaya           | [NIM]       |
| Kevin Wijaya             | [NIM]       |

## 🌐 URL Aplikasi Live

[https://aturin-ten.vercel.app](https://aturin-ten.vercel.app)

## ☁️ Arsitektur Cloud yang Digunakan

Aplikasi ini menggunakan arsitektur deployment berbasis cloud dengan detail sebagai berikut:

- **Frontend**: Deploy menggunakan **Vercel**, mendukung auto-deployment dari GitHub.
- **Backend**: Menggunakan **Firebase Cloud Functions** untuk layanan serverless API.
- **Authentication**: Menggunakan **Firebase Authentication** (Google & GitHub OAuth).
- **Database**: **MonggoDB Atlas** untuk penyimpanan data real-time.

## 🚀 Petunjuk Penggunaan Aplikasi

1. Buka aplikasi melalui URL [aturin-ten.vercel.app](https://aturin-ten.vercel.app).
2. Login menggunakan akun **Google** atau **GitHub**.
3. Setelah login:
   - Tambahkan jadwal baru melalui tombol **Tambah Kegiatan**.
   - Atur waktu, kategori, dan deskripsi kegiatan.
   - Tandai kegiatan selesai atau hapus jika tidak diperlukan.
4. Gunakan tampilan kalender atau daftar untuk melihat kegiatan harian.

## 🛠️ Petunjuk Instalasi & Menjalankan Proyek di Lokal

1. Klon repositori:
  ```bash
  https://github.com/ozanerr/Aturin
  ```
2. Masuk ke folder proyek:
  ```bash
  cd Aturin
  ```
3. Install dependensi backend dan jalankan:
  ```bash
  cd backend
  npm install
  npm run dev
  ```
4. Install dependensi frontend dan jalankan:
  ```bash
  cd frontend
  npm install
  npm run dev
  ```

Aplikasi akan berjalan di http://localhost:5173.
