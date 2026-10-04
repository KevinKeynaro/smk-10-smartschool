"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { school } from "@/lib/data";
import { IconGlobe, IconMail, IconMapPin, IconPhone } from "@/components/Icons";

const field = "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-brand";

export default function KontakPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: hubungkan ke API route / layanan email
    setSent(true);
  }

  return (
    <>
      <PageHero eyebrow="Hubungi Kami" title="Kontak Sekolah" description="Ada pertanyaan, saran, atau ingin bekerja sama? Kirimkan Pesan Anda." crumb="Kontak" image="/images/hero-kontak.jpg" />
      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-14 md:grid-cols-[280px_1fr]">
        <aside className="rounded-2xl border border-gray-200 p-5">
          <h2 className="font-semibold">Informasi Sekolah</h2>
          <dl className="mt-4 space-y-4 text-sm">
            <div className="flex gap-3"><IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-brand" /><div><dt className="text-xs font-semibold text-sky-brand">ALAMAT</dt><dd>{school.address}</dd></div></div>
            <div className="flex gap-3"><IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-sky-brand" /><div><dt className="text-xs font-semibold text-sky-brand">TELEPON</dt><dd>{school.phone}</dd></div></div>
            <div className="flex gap-3"><IconMail className="mt-0.5 h-4 w-4 shrink-0 text-sky-brand" /><div><dt className="text-xs font-semibold text-sky-brand">EMAIL</dt><dd>{school.email}</dd></div></div>
            <div className="flex gap-3"><IconGlobe className="mt-0.5 h-4 w-4 shrink-0 text-sky-brand" /><div><dt className="text-xs font-semibold text-sky-brand">WEBSITE</dt><dd>{school.website || "-"}</dd></div></div>
          </dl>
        </aside>

        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 p-5">
          <h2 className="font-semibold">Kirim Pesan</h2>
          <p className="text-sm text-gray-600">Pesan Anda akan kami balas melalui email secepatnya.</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm">Nama Lengkap<input required name="nama" className={field} /></label>
            <label className="text-sm">Email<input required type="email" name="email" className={field} /></label>
            <label className="text-sm">Nomor Telepon<input name="telepon" type="tel" className={field} /></label>
            <label className="text-sm">Subjek<input required name="subjek" className={field} /></label>
            <label className="text-sm sm:col-span-2">Pesan<textarea required name="pesan" rows={5} className={field} /></label>
          </div>

          <button type="submit" className="mt-5 rounded-lg bg-sky-brand px-6 py-2 text-sm font-semibold text-white hover:brightness-110">Kirim Pesan</button>
          {sent && <p role="status" className="mt-3 text-sm text-green-700">Pesan terkirim. Kami akan membalas lewat email.</p>}
        </form>
      </section>
    </>
  );
}
