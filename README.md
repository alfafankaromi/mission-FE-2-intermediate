# VideoBelajar - Education Course Web Application

Aplikasi web statis berbasis React JS untuk platform pembelajaran online (VideoBelajar). Proyek ini dibuat untuk memenuhi Mission 1 Frontend (Intermediate) dari bootcamp Harisenin.

**Dibuat oleh:** [Amala Al Fafan Karomi (20012)]

---

## 🛠️ Tech Stack
- **React 18** — library utama untuk membangun UI
- **React Router DOM** — routing antar halaman (Login, Register, Homepage)
- **Tailwind CSS** — styling & responsive design
- **Vite** — build tool & dev server
- **lucide-react** — icon set (ikon mata password, hamburger menu, dll)

## 🚀 Fitur Utama
1. **Routing Multi Halaman (`react-router-dom`)**:
   - `/` : Homepage / Beranda dengan Hero Banner, Filter Kategori, Grid Katalog Kelas, & Newsletter.
   - `/login` : Halaman Masuk dengan Form Validasi.
   - `/register` : Halaman Pendaftaran Akun Baru.
2. **Arsitektur Komponen (Atomic Design)**:
   - `atoms`: TombolPrimary, InputTeks, LogoBrand, RatingBintang, AvatarUser.
   - `molecules`: InputTelepon, KartuKelas, TabKategori, KotakNewsletter.
   - `organisms`: FormLogin, FormRegister, HeaderNav, HeroBanner, SectionKoleksiKelas, SectionNewsletter, FooterBagian.
3. **Reusable Component via Props**:
   - Semua komponen atoms/molecules/organisms menerima data lewat props.
4. **Form Validation & State Management**:
   - Pengecekan field kosong, format email valid, dan batas minimal kata sandi (min 8 karakter).
5. **Desain Responsif**:
   - Mengikuti Figma (Mobile, Desktop) menggunakan Tailwind CSS.

---

## 📁 Struktur Folder Project
├── public/
├── src/
│   ├── assets/
│   │   └── images/          # Logo & aset gambar statis
│   ├── components/
│   │   ├── atoms/           # Komponen dasar (Button, Input, Avatar, Star, Logo)
│   │   ├── molecules/       # Kombinasi atom (Input Telepon, Kartu Kelas, Tab Filter)
│   │   └── organisms/       # Komponen kompleks (Navbar, Hero, Forms, Footer)
│   ├── data/
│   │   └── dataKelas.js     # Data katalog kelas
│   ├── pages/
│   │   ├── HalamanBeranda.jsx
│   │   ├── HalamanLogin.jsx
│   │   └── HalamanRegister.jsx
│   ├── App.jsx               # Setup Routes
│   ├── main.jsx               # React DOM Entrypoint
│   └── index.css              # Custom Tailwind Setup & Font Lato
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json