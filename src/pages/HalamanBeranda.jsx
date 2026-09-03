import React from 'react';
import HeaderNav from '../components/organisms/HeaderNav';
import HeroBanner from '../components/organisms/HeroBanner';
import SectionKoleksiKelas from '../components/organisms/SectionKoleksiKelas';
import SectionNewsletter from '../components/organisms/SectionNewsletter';
import FooterBagian from '../components/organisms/FooterBagian';
import { daftarKelas, daftarKategori } from '../data/dataKelas';

export default function HalamanBeranda({ userLoggedIn, onLogout }) {
  const handleScrollToKelas = () => {
    const el = document.getElementById('koleksi-kelas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bgKrem flex flex-col justify-between">
      <HeaderNav userLoggedIn={userLoggedIn} onLogout={onLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        <HeroBanner onCtaClick={handleScrollToKelas} />
        <SectionKoleksiKelas
          daftarKelas={daftarKelas}
          daftarKategori={daftarKategori}
        />
        <SectionNewsletter />
      </main>

      <FooterBagian />
    </div>
  );
}
