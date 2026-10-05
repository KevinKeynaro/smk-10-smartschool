import { Router } from "express";
import { supabase } from "../config/supabase.js";

const router = Router();

// Rute prestasi
router.get("/prestasi", async (_req, res) => {
  const { data, error } = await supabase.from("prestasi").select("*");
  
  if (error) {
    return res.status(500).json({ pesan: "Ups, gagal mengambil data prestasi", error });
  }
  res.json(data);
});

// Rute fasilitas
router.get("/fasilitas", async (_req, res) => {
  const { data, error } = await supabase.from("fasilitas").select("*");
  
  if (error) {
    return res.status(500).json({ pesan: "Ups, gagal mengambil data fasilitas", error });
  }
  res.json(data);
});

// Rute ekstrakurikuler
router.get("/ekstrakurikuler", async (_req, res) => {
  const { data, error } = await supabase.from("ekstrakurikuler").select("*");
  
  if (error) {
    return res.status(500).json({ pesan: "Ups, gagal mengambil data ekstrakurikuler", error });
  }
  res.json(data);
});

export default router;