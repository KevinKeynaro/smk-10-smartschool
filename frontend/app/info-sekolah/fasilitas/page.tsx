import PageHero from "@/components/PageHero";
import InfoCard from "@/components/InfoCard";
import { getFasilitas } from "@/lib/api";

export const metadata = { title: "Fasilitas Sekolah — SMK 10 SMARTSCHOOL" };

export default async function FasilitasPage() {
  const fasilitas = await getFasilitas();

  return (
    <>
      <PageHero eyebrow="Informasi Sekolah" title="Fasilitas Sekolah" description="Kegiatan ekstrakulikuler di SMK 10 menjadi wadah baik untuk siswa mengembangkan minat, bakat, dan kreativitas." />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fasilitas.map((f) => <InfoCard key={f.id || f.name} title={f.name} desc={f.desc} image={f.image} />)}
        </div>
      </section>
    </>
  );
}