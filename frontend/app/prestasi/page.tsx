import PageHero from "@/components/PageHero";
import PrestasiList from "@/components/PrestasiList";

export const metadata = { title: "Prestasi Siswa — SMK 10 SMARTSCHOOL" };

export default function PrestasiPage() {
  return (
    <>
      <PageHero eyebrow="Prestasi Siswa / Siswi" title="Mengukir Prestasi Untuk Masa Depan" />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-bold">Prestasi <span className="text-sky-brand">Siswa</span></h2>
        <p className="mt-2 max-w-xl text-sm text-gray-600">Berbagai prestasi yang telah diraih oleh siswa-siswi SMK 10 di Tingkat Kabupaten, provinsi, hingga nasional.</p>
        <div className="mt-6"><PrestasiList /></div>
      </section>
    </>
  );
}
