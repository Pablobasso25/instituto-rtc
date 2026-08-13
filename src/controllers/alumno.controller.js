import {
  actualizarAlumnoService,
  crearAlumnoService,
  eliminarAlumnoPorIdService,
  obtenerAlumnosService,
} from "../services/alumno.service.js";

export const crearAlumno = async (req, res) => {
  try {
    const datosAlumno = req.body;
    const nuevoAlumno = await crearAlumnoService(datosAlumno);
    res.status(201).json(nuevoAlumno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const obtenerAlumnos = async (req, res) => {
  try {
    const alumnos = await obtenerAlumnosService();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: "Ocurrió un error al obtener los alumnos " });
  }
};

export const actualizarAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const datosAlumno = req.body;
    const alumnoActualizado = await actualizarAlumnoService(id, datosAlumno);
    res.status(200).json(alumnoActualizado);
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ error: "No se encontró el alumno con el ID proporcionado" });
    }
    return res.status(400).json({ error: error.message });
  }
};
export const eliminarAlumnoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarAlumnoPorIdService(id);
    res.status(200).json({ message: "Alumno eliminado correctamente" });
  } catch (error) {
    return res
      .status(404)
      .json({ error: "No se encontró el alumno con el ID proporcionado" });
  }
};
