import express from "express";
import cors from "cors";
import { prisma } from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API con Express corriendo en http://localhost:${PORT}`);
});
