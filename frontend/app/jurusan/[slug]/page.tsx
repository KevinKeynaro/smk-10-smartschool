import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { jurusan } from "@/lib/data";
import { IconBag, IconCircuit, IconCode, IconFilm, IconNetwork, IconPalette } from "@/components/Icons";

const jurusanIcon = { code: IconCode, network: IconNetwork, film: IconFilm, bag: IconBag, circuit: IconCircuit, palette: IconPalette };

export function generateStaticParams() {
  return jurusan.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const j = jurusan.find((x) => x.slug === slug);
  return { title: j ? `${j.name} — SMK 10 SMARTSCHOOL` : "Jurusan" };
}

export default async function JurusanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const j = jurusan.find((x) => x.slug === slug);
  if (!j) notFound();
  const Icon = jurusanIcon[j.icon];

  return (
    <>
      <PageHero eyebrow="Kopetensi Keahlian" title={j.name} />
      <article className="mx-auto max-w-3xl px-5 py-14 text-sm leading-7 text-gray-700 md:text-base">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-sky-brand">
          {j.logo ? <Image src={j.logo} alt={j.name} width={48} height={48} className="h-11 w-11 object-contain" /> : <Icon className="h-7 w-7" />}
        </span>
        <h2 className="mt-5 font-semibold text-ink">Selamat Datang di Jurusan {j.name}!</h2>
        <p className="mt-3">{j.intro}</p>

        <h2 className="mt-8 font-semibold text-ink">Keunggulan Program</h2>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          {j.keunggulan.map((k) => (
            <li key={k.title}><strong className="text-ink">{k.title}:</strong> {k.text}</li>
          ))}
        </ul>

        <h2 className="mt-8 font-semibold text-ink">Kegiatan Utama</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {j.kegiatan.map((k) => <li key={k}>{k}</li>)}
        </ul>
      </article>
    </>
  );
}
