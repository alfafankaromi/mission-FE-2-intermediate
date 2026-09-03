import React, { useState } from 'react';
import TabKategori from '../molecules/TabKategori';
import KartuKelas from '../molecules/KartuKelas';

export default function SectionKoleksiKelas({ daftarKelas, daftarKategori }) {
  const [kategoriAktif, setKategoriAktif] = useState('Semua Kelas');

  const kelasTersaring = kategoriAktif === 'Semua Kelas'
    ? daftarKelas
    : daftarKelas.filter((item) => item.kategori === kategoriAktif);

  return (
    <section id="koleksi-kelas" className="py-8 md:py-12">
      <div className="mb-6">
        <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-1">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-xs md:text-sm text-gray-500 font-medium">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mb-8">
        <TabKategori
          daftarKategori={daftarKategori}
          kategoriAktif={kategoriAktif}
          onPilihKategori={setKategoriAktif}
        />
      </div>

      {/* Grid of Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {kelasTersaring.map((kelas) => (
          <KartuKelas key={kelas.id} dataKelas={kelas} />
        ))}
      </div>

      {kelasTersaring.length === 0 && (
        <div className="text-center py-12 text-gray-400 text-sm">
          Belum ada kelas untuk kategori ini.
        </div>
      )}
    </section>
  );
}
