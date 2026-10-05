import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import apiRouter from "./routes/index.js"; 

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

app.use("/api", apiRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Terjadi kesalahan pada server" });
});

app.listen(PORT, () => {
  console.log(`Backend API berjalan di http://localhost:${PORT}`);
});