import PageHero from "@/components/PageHero";
import InfoCard from "@/components/InfoCard";
import { getekstrakurikuler } from "@/lib/api";

export const metadata = { title: "ekstrakurikuler — SMK 10 SMARTSCHOOL" };

export default async function EkskulPage() {
  const ekskul = await getekstrakurikuler();

  return (
    <>
      <PageHero eyebrow="Informasi Sekolah" title="ekstrakurikuler" description="Kegiatan ekstrakurikuler di SMK 10 menjadi wadah baik untuk siswa mengembangkan minat, bakat, dan kreativitas." />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ekskul.map((e) => <InfoCard key={e.id || e.name} title={e.name} desc={e.desc} image={e.image} />)}
        </div>
      </section>
    </>
  );
}