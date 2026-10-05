import PageHero from "@/components/PageHero";
import { sambutan, school } from "@/lib/data";

export const metadata = { title: "Sambutan Kepala Sekolah — SMK 10 SMARTSCHOOL" };

export default function SambutanPage() {
  return (
    <>
      <PageHero eyebrow="Profil Sekolah" title="Sambutan Kepala Sekolah" description="Pesan dari kepala sekolah SMK 10 SMARTSCHOOL." crumb="Sambutan" />
      <section className="mx-auto grid max-w-5xl items-start gap-10 px-5 py-14 md:grid-cols-[280px_1fr]">
        <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 bg-cover bg-center"
             style={{ backgroundImage: "url(/images/kepala-sekolah.jpg)" }} role="img" aria-label={school.headmaster} />
        <div className="text-sm leading-7 text-gray-700 md:text-base">
          <p>“{sambutan}”</p>
          <p className="mt-6 text-sky-brand">✦ Kepala Sekolah</p>
          <p className="font-semibold text-ink">{school.headmaster}</p>
        </div>
      </section>
    </>
  );
}
