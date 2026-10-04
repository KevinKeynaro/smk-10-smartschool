import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import PrestasiList from "@/components/PrestasiList";
import { jurusan, sambutan, school } from "@/lib/data";
import { IconBag, IconCircuit, IconCode, IconFilm, IconNetwork, IconPalette } from "@/components/Icons";

const jurusanIcon = { code: IconCode, network: IconNetwork, film: IconFilm, bag: IconBag, circuit: IconCircuit, palette: IconPalette };

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg text-white">
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-40">
          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            Tempat Tumbuh Kembang dan Berkembangnya Generasi Unggul
          </h1>
          <p className="mt-5 max-w-xl text-white/80">
            Sekolah yang menghadirkan lingkungan belajar yang nyaman, aktif, dan mendukung potensi setiap siswa.
          </p>
          <Link href="/kontak" className="mt-8 inline-block rounded-lg bg-sky-brand px-6 py-3 text-sm font-semibold text-navy-900 hover:brightness-110">
            Hubungi Kami
          </Link>
        </div>
      </section>

      {/* Sambutan */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[280px_1fr]">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 bg-cover bg-center"
               style={{ backgroundImage: "url(/images/kepala-sekolah.jpg)" }} role="img" aria-label={school.headmaster} />
          <div>
            <p className="text-xs font-semibold text-sky-brand">✦ SAMBUTAN KEPALA SEKOLAH</p>
            <blockquote className="mt-3 text-sm leading-7 text-gray-700 md:text-base">“{sambutan}”</blockquote>
            <p className="mt-5 font-semibold">{school.headmaster}</p>
            <p className="text-sm text-sky-brand">Kepala Sekolah {school.name}</p>
            <Link href="/profil/sambutan" className="mt-5 inline-block rounded-lg bg-sky-brand px-5 py-2 text-sm font-semibold text-white hover:brightness-110">
              Baca Selengkapnya
            </Link>
          </div>
        </div>
      </section>

      {/* Program keahlian */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-xs font-semibold text-sky-brand">KOPETENSI KEAHLIAN</p>
          <SectionTitle>Program Keahlian yang Bisa Kamu Pilih</SectionTitle>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-auto md:max-w-6xl">
          {jurusan.map((j) => {
            const Icon = jurusanIcon[j.icon];
            return (
            <article key={j.slug} className="flex w-72 shrink-0 snap-start flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-xl bg-navy text-sky-brand">
                {j.logo ? <Image src={j.logo} alt={j.name} width={72} height={72} className="h-[68px] w-[68px] object-contain" /> : <Icon className="h-10 w-10" />}
              </span>
              <h3 className="mt-4 font-semibold">{j.name}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-600">Selamat Datang di Jurusan {j.name}! {j.summary}</p>
              <Link href={`/jurusan/${j.slug}`} className="mt-4 text-sm font-semibold text-sky-brand hover:underline">Selengkapnya</Link>
            </article>
          );})}
        </div>
      </section>

      {/* Prestasi */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-semibold text-sky-brand">✦ INFORMASI</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Prestasi <span className="text-sky-brand">Siswa</span></h2>
          <p className="mt-2 max-w-xl text-sm text-gray-600">Berbagai prestasi yang telah diraih oleh siswa-siswi SMK 10 di Tingkat Kabupaten, provinsi, hingga nasional.</p>
          <div className="mt-6"><PrestasiList /></div>
        </div>
      </section>
    </>
  );
}
