import PageHero from "@/components/PageHero";
import InfoCard from "@/components/InfoCard";
import { ekskul } from "@/lib/data";

export const metadata = { title: "Ekstrakulikuler — SMK 10 SMARTSCHOOL" };

export default function EkskulPage() {
  return (
    <>
      <PageHero eyebrow="Informasi Sekolah" title="Ekstrakulikuler" description="Kegiatan ekstrakulikuler di SMK 10 menjadi wadah baik untuk siswa mengembangkan minat, bakat, dan kreativitas." />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ekskul.map((e) => <InfoCard key={e.name} title={e.name} desc={e.desc} image={e.image} />)}
        </div>
      </section>
    </>
  );
}
