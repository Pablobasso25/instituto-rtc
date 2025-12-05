export const inscribirAlumno = async (prisma) => {
  const inscripcion = await prisma.alumno.update({
    where: { email: "toge.inumaki@jujutsuschool.jp" },
    data: {
      cursos: {
        connect: [
        //   { nombre: "Despliegue con Docker" },
          { nombre: "Git y GitHub Avanzado" },
        ],
      },
    },
  });
  console.log(inscripcion);
};
