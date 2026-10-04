type Props = { title: string; desc: string; image?: string };

/** Kartu foto + judul + deskripsi (fasilitas & ekstrakulikuler) */
export default function InfoCard({ title, desc, image }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div
        className="h-36 bg-gradient-to-br from-navy-700 to-navy-900 bg-cover bg-center"
        style={image ? { backgroundImage: `url(${image})` } : undefined}
        role="img"
        aria-label={title}
      />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{desc}</p>
      </div>
    </article>
  );
}
