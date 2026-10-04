import { Router } from "express";
import fasilitas from "../data/fasilitas.json";

const router = Router();

router.get("/", (_req, res) => {
  res.json(fasilitas);
});

export default router;
