import PageHero from "@/components/PageHero";
import { programKeahlianSingkat, school } from "@/lib/data";

export const metadata = { title: "Informasi Sekolah — SMK 10 SMARTSCHOOL" };

const rows: [string, string][] = [
  ["Nama", school.name],
  ["NPSN", school.npsn],
  ["Status", school.status],
  ["Akreditasi", school.akreditasi],
  ["Alamat", school.address],
  ["Telepon", school.phone],
  ["Email", school.email],
  ["Website", school.website || "-"],
];

export default function InfoSekolahPage() {
  return (
    <>
      <PageHero eyebrow="Informasi Sekolah" title="Informasi dan Program Keahlian Sekolah" />
      <section className="mx-auto max-w-3xl px-5 py-14 text-sm md:text-base">
        <h2 className="text-lg font-semibold">Informasi Lengkap</h2>
        <dl className="mt-4 grid grid-cols-[110px_1fr] gap-y-2 text-gray-700">
          {rows.map(([k, v]) => (<div key={k} className="contents"><dt className="font-medium">{k}</dt><dd>: {v}</dd></div>))}
        </dl>

        <h2 className="mt-10 text-lg font-semibold">Program Keahlian</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
          {programKeahlianSingkat.map((p) => <li key={p}>{p}</li>)}
        </ul>

        <h2 className="mt-10 text-lg font-semibold">Jam Operasional</h2>
        <dl className="mt-3 grid grid-cols-[130px_1fr] gap-y-2 text-gray-700">
          <dt className="font-medium">Senin–Jumat</dt><dd>07.00 – 15.00</dd>
          <dt className="font-medium">Sabtu–Minggu</dt><dd>Libur</dd>
        </dl>
      </section>
    </>
  );
}
