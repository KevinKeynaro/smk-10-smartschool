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
router.get("/ekstrakulikuler", async (_req, res) => {
  const { data, error } = await supabase.from("ekstrakulikuler").select("*");
  
  if (error) {
    return res.status(500).json({ pesan: "Ups, gagal mengambil data ekstrakulikuler", error });
  }
  res.json(data);
});

export default router;