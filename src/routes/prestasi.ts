import { Router } from "express";
import prestasi from "../data/prestasi.json";

const router = Router();

router.get("/", (_req, res) => {
  res.json(prestasi);
});

export default router;
