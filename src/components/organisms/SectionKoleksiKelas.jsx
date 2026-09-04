import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import TabKategori from '../molecules/TabKategori';
import KartuKelas from '../molecules/KartuKelas';
import FormKelas from '../molecules/FormKelas';
import TombolPrimary from '../atoms/TombolPrimary';

export default function SectionKoleksiKelas({
  daftarKelas,
  daftarKategori,
  onTambahKelas,
  onUpdateKelas,
  onHapusKelas
}) {
  const [kategoriAktif, setKategoriAktif] = useState('Semua Kelas');
  const [formTerbuka, setFormTerbuka] = useState(false);
  const [kelasDiedit, setKelasDiedit] = useState(null);

  const kelasTersaring = kategoriAktif === 'Semua Kelas'
    ? daftarKelas
    : daftarKelas.filter((item) => item.kategori === kategoriAktif);

  const bukaFormTambah = () => {
    setKelasDiedit(null);
    setFormTerbuka(true);
  };

  const bukaFormEdit = (dataKelas) => {
    setKelasDiedit(dataKelas);
    setFormTerbuka(true);
  };

  const tutupForm = () => {
    setFormTerbuka(false);
    setKelasDiedit(null);
  };

  const handleSimpan = (dataKelas) => {
    if (kelasDiedit) {
      onUpdateKelas(dataKelas);
    } else {
      onTambahKelas(dataKelas);
    }
    tutupForm();
  };

  return (
    <section id="koleksi-kelas" className="py-8 md:py-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-1">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <TombolPrimary variasi="primary" onClick={bukaFormTambah} className="shrink-0">
          <Plus size={16} className="mr-1.5" />
          Tambah Kelas
        </TombolPrimary>
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
          <KartuKelas
            key={kelas.id}
            dataKelas={kelas}
            onEdit={bukaFormEdit}
            onDelete={onHapusKelas}
          />
        ))}
      </div>

      {kelasTersaring.length === 0 && (
        <div className="text-center py-12 text-gray-400 text-sm">
          Belum ada kelas untuk kategori ini.
        </div>
      )}

      {formTerbuka && (
        <FormKelas
          dataAwal={kelasDiedit}
          daftarKategori={daftarKategori}
          onSimpan={handleSimpan}
          onBatal={tutupForm}
        />
      )}
    </section>
  );
}