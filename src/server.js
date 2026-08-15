import express from "express";
import cors from "cors";
import alumnoRoutes from "./routes/alumno.routes.js";
import profesorRoutes from "./routes/profesor.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/alumnos", alumnoRoutes);
app.use("/api/profesores", profesorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API con Express corriendo en http://localhost:${PORT}`);
});
