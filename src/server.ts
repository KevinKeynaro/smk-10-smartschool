import express from "express";
import cors from "cors";
import prestasiRouter from "./routes/prestasi.js";
import fasilitasRouter from "./routes/fasilitas.js";
import ekstrakulikulerRouter from "./routes/ekstrakulikuler.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "API SMK 10 SMARTSCHOOL aktif" });
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/prestasi", prestasiRouter);
app.use("/api/fasilitas", fasilitasRouter);
app.use("/api/ekstrakulikuler", ekstrakulikulerRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Terjadi kesalahan pada server" });
});

app.listen(PORT, () => {
  console.log(`Backend API berjalan di http://localhost:${PORT}`);
});
