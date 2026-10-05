import { PrestasiItem } from "@/lib/api";

// Tambahkan 'data' ke dalam interface props
interface PrestasiListProps {
  data: PrestasiItem[];
  limit?: number;
}

export default function PrestasiList({ data, limit }: PrestasiListProps) {
  // Jika ada limit (misal di halaman beranda), potong array-nya. Jika tidak, tampilkan semua.
  const displayData = limit ? data.slice(0, limit) : data;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {displayData.map((p) => (
        <div key={p.id || p.title} className="border p-4 rounded-lg shadow-sm">
          {p.image && (
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover mb-4 rounded" />
          )}
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-sm text-blue-600 font-medium mb-2">{p.kategori}</p>
          <p className="text-gray-700"><strong>Tim:</strong> {p.team}</p>
          <p className="text-gray-600 text-sm mt-1">{p.place} - {p.date}</p>
        </div>
      ))}
    </div>
  );
}