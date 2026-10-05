import PageHero from "@/components/PageHero";
import ProseSection from "@/components/ProseSection";
import { visi, misi } from "@/lib/data";

export const metadata = { title: "Visi & Misi — SMK 10 SMARTSCHOOL" };

export default function VisiMisiPage() {
  return (
    <>
      <PageHero eyebrow="Profile Sekolah" title="Visi Misi Sekolah Sebagai Platform Pendidikan" />
      <ProseSection>
        <h2 className="font-semibold text-ink">Visi</h2>
        <p className="mt-2">{visi}</p>
        <h2 className="mt-8 font-semibold text-ink">Misi</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          {misi.map((m) => <li key={m}>{m}</li>)}
        </ol>
      </ProseSection>
    </>
  );
}
