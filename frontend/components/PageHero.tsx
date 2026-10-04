import Link from "next/link";

type Props = { eyebrow?: string; title: string; description?: string; crumb?: string; image?: string };

export default function PageHero({ eyebrow, title, description, crumb, image = "/images/hero.jpg" }: Props) {
  return (
    <section
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(7,18,54,.55), rgba(7,18,54,.85)), url(${image})` }}
    >
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-32">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
            <span aria-hidden className="text-sky-brand">✦</span> {eyebrow}
          </p>
        )}
        <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-xl text-sm text-white/80 md:text-base">{description}</p>}
        {crumb && (
          <p className="mt-5 text-xs text-white/70">
            <Link href="/" className="hover:text-sky-brand">Beranda</Link> / {crumb}
          </p>
        )}
      </div>
    </section>
  );
}
