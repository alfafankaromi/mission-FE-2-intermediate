# Misi FE 2 Intermediate

Aplikasi web berbasis React JS untuk platform pembelajaran online (VideoBelajar), dengan fitur **CRUD (Create, Read, Update, Delete)** untuk data kelas. Proyek ini dibuat untuk memenuhi **Mission 2 - CRUD React (Intermediate)** dari bootcamp Harisenin.

**Dibuat oleh:** Amala Al Fafan Karomi 20012

---

## 🛠️ Tech Stack
- **React 18** — library utama untuk membangun UI
- **React Router DOM** — routing antar halaman (Login, Register, Homepage)
- **Tailwind CSS** — styling & responsive design
- **Vite** — build tool & dev server
- **lucide-react** — icon set

## 🚀 Fitur Utama

### CRUD Data Kelas
Fitur utama tugas ini — dikelola lewat state React (`useState`) di halaman Beranda:
- **Create** — tombol "Tambah Kelas" membuka form modal untuk menambah kelas baru (judul, deskripsi, instruktur, kategori, harga, foto)
- **Read** — daftar kelas ditampilkan dalam bentuk grid kartu, bisa difilter berdasarkan kategori
- **Update** — tombol edit pada tiap kartu kelas membuka form yang sama dalam mode edit, terisi otomatis dengan data yang sudah ada
- **Delete** — tombol hapus pada tiap kartu kelas untuk menghapus data dari daftar

### Arsitektur Komponen (Atomic Design)
- `atoms`: TombolPrimary, InputTeks, LogoBrand, RatingBintang, AvatarUser
- `molecules`: InputTelepon, KartuKelas, TabKategori, KotakNewsletter, **FormKelas** (form tambah/edit kelas)
- `organisms`: FormLogin, FormRegister, HeaderNav, HeroBanner, **SectionKoleksiKelas** (logic CRUD), SectionNewsletter, FooterBagian

### Form Validation
Pengecekan field wajib (judul, instruktur, harga) sebelum data kelas bisa disimpan.

### Desain Responsif
Menggunakan Tailwind CSS, mengikuti pendekatan mobile-first.

---

## 📁 Struktur Folder Project
```
├── public/
├── src/
│   ├── assets/
│   │   └── images/          
│   ├── components/
│   │   ├── atoms/           
│   │   ├── molecules/       
│   │   └── organisms/       
│   ├── data/
│   │   └── dataKelas.js     
│   ├── pages/
│   │   ├── HalamanBeranda.jsx   
│   │   ├── HalamanLogin.jsx
│   │   └── HalamanRegister.jsx
│   ├── App.jsx               
│   ├── main.jsx               
│   └── index.css              
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

