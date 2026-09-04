import React, { useState } from 'react';
import HeaderNav from '../components/organisms/HeaderNav';
import HeroBanner from '../components/organisms/HeroBanner';
import SectionKoleksiKelas from '../components/organisms/SectionKoleksiKelas';
import SectionNewsletter from '../components/organisms/SectionNewsletter';
import FooterBagian from '../components/organisms/FooterBagian';
import { daftarKelas as dataKelasAwal, daftarKategori } from '../data/dataKelas';

export default function HalamanBeranda({ userLoggedIn, onLogout }) {
  // State utama 
  const [daftarKelas, setDaftarKelas] = useState(dataKelasAwal);

  const handleScrollToKelas = () => {
    const el = document.getElementById('koleksi-kelas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // CREATE
  const tambahKelas = (kelasBaru) => {
    const idBaru = daftarKelas.length > 0
      ? Math.max(...daftarKelas.map((k) => k.id)) + 1
      : 1;
    setDaftarKelas([...daftarKelas, { ...kelasBaru, id: idBaru }]);
  };

  // UPDATE
  const updateKelas = (kelasDiupdate) => {
    setDaftarKelas(
      daftarKelas.map((k) => (k.id === kelasDiupdate.id ? kelasDiupdate : k))
    );
  };

  // DELETE
  const hapusKelas = (id) => {
    setDaftarKelas(daftarKelas.filter((k) => k.id !== id));
  };

  return (
    <div className="min-h-screen bg-bgKrem flex flex-col justify-between">
      <HeaderNav userLoggedIn={userLoggedIn} onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <HeroBanner onCtaClick={handleScrollToKelas} />
        <SectionKoleksiKelas
          daftarKelas={daftarKelas}
          daftarKategori={daftarKategori}
          onTambahKelas={tambahKelas}
          onUpdateKelas={updateKelas}
          onHapusKelas={hapusKelas}
        />
        <SectionNewsletter />
      </main>

      <FooterBagian />
    </div>
  );
}