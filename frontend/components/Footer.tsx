import Link from "next/link";
import { navItems, quickLinks, school, socials } from "@/lib/data";
import { IconFacebook, IconGlobe, IconInstagram, IconMail, IconMapPin, IconPhone, IconWhatsapp, IconYoutube } from "@/components/Icons";

const socialIcon = { Instagram: IconInstagram, Facebook: IconFacebook, YouTube: IconYoutube, WhatsApp: IconWhatsapp };

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-bold"><span aria-hidden className="text-sky-brand">✦</span> {school.name}</p>
          <p className="mt-3 max-w-xs text-sm text-white/70">{school.tagline}</p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => {
              const Icon = socialIcon[s.label as keyof typeof socialIcon];
              return (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-sky-brand hover:text-sky-brand"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="font-semibold">Tautan Cepat</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {quickLinks.map((l) => (
              <li key={l.label}><Link href={l.href} className="hover:text-sky-brand">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Info Kontak</h2>
          <ul className="mt-3 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3"><IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-sky-brand" />{school.phone}</li>
            <li className="flex items-start gap-3"><IconMail className="mt-0.5 h-4 w-4 shrink-0 text-sky-brand" />{school.email}</li>
            <li className="flex items-start gap-3"><IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-brand" />{school.address}</li>
            <li className="flex items-start gap-3"><IconGlobe className="mt-0.5 h-4 w-4 shrink-0 text-sky-brand" />{school.website || "-"}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © 2026 {school.name}. Hak cipta dilindungi.
      </div>
    </footer>
  );
}
