import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
// Kita panggil file gabungan yang baru saja (akhiran .js nya kita hapus biar aman)
import apiRouter from "./routes/index"; 

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get("/", (_req, res) => {
  res.json({ message: "API SMK 10 SMARTSCHOOL aktif" });
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Cukup satu baris ini saja, semua rute langsung tersambung! :d
app.use("/api", apiRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Terjadi kesalahan pada server" });
});

app.listen(PORT, () => {
  console.log(`Backend API berjalan di http://localhost:${PORT}`);
});