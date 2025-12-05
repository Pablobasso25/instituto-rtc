import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.ts";
import {
    actualizarEmailAlumno,
  alumnosConCursos,
  crearAlumno,
  crearVariosAlumnos,
  eliminarAlumno,
  obtenerAlumnos,
  ObtenerDatosAlumnos,
} from "./services/alumno.service.js";
import { crearCursos, leerCursos } from "./services/curso.service.js";
import { inscribirAlumno } from "./services/instituto.service.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Conexion exitosa. El adaptador PG esta funcionando.");
  //1- crear alumnos
  //   await crearAlumno(prisma)
  //   await crearVariosAlumnos(prisma);

  // 2- obtener alumnos
  //   await obtenerAlumnos(prisma);
  // await ObtenerDatosAlumnos(prisma);

  //3- Crear cursos
  //   await crearCursos(prisma);
//   await leerCursos(prisma);
// await actualizarEmailAlumno(prisma,'megumi.fushiguro@jujutsu.com','megumi.fushiguro@jjk.com')

//4- Inscribir alumno a cursos
// await inscribirAlumno(prisma)
// await alumnosConCursos(prisma)

//5- eliminar alumnos
await eliminarAlumno(prisma, 'mai.zenin@jujutsuschool.jp')
}

main()
  .catch((e) => {
    console.error("Ocurrió un error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Conexion cerrada");
  });
