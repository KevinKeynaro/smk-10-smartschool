import { Router } from "express";
import ekstrakulikuler from "../data/ekstrakulikuler.json";

const router = Router();

router.get("/", (_req, res) => {
  res.json(ekstrakulikuler);
});

export default router;
