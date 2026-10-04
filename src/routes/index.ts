import { Router, Request, Response } from "express";
import { supabase } from "../config/supabase"; // Pastikan folder config-nya benar ya

const router = Router();

// Rute untuk mengambil data prestasi
router.get("/prestasi", async (_req: Request, res: Response) => {
  const { data, error } = await supabase.from("prestasi").select("*");
  
  if (error) {
    return res.status(500).json({ pesan: "Ups, gagal mengambil data prestasi", error });
  }
  res.json(data);
});

// Rute untuk mengambil data fasilitas
router.get("/fasilitas", async (_req: Request, res: Response) => {
  const { data, error } = await supabase.from("fasilitas").select("*");
  
  if (error) {
    return res.status(500).json({ pesan: "Ups, gagal mengambil data fasilitas", error });
  }
  res.json(data);
});

// Rute untuk mengambil data ekstrakurikuler
router.get("/ekstrakurikuler", async (_req: Request, res: Response) => {
  const { data, error } = await supabase.from("ekstrakurikuler").select("*");
  
  if (error) {
    return res.status(500).json({ pesan: "Ups, gagal mengambil data ekstrakurikuler", error });
  }
  res.json(data);
});

export default router;