export type PrestasiKategori = "Akademik" | "Seni Budaya";

export type PrestasiItem = {
  id?: number;
  title: string;
  team: string;
  date: string;
  place: string;
  kategori: PrestasiKategori;
  image?: string;
};

export type FasilitasItem = {
  id?: number;
  name: string;
  desc: string;
  image?: string;
};

export type EkskulItem = {
  id?: number;
  name: string;
  desc: string;
  image?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export async function getPrestasi(): Promise<PrestasiItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/prestasi`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Gagal memuat prestasi: ${res.statusText}`);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching prestasi dari backend API:", error);
    return [];
  }
}

export async function getFasilitas(): Promise<FasilitasItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/fasilitas`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Gagal memuat fasilitas: ${res.statusText}`);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching fasilitas dari backend API:", error);
    return [];
  }
}

export async function getekstrakurikuler(): Promise<EkskulItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/ekstrakurikuler`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Gagal memuat ekstrakurikuler: ${res.statusText}`);
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching ekstrakurikuler dari backend API:", error);
    return [];
  }
}

