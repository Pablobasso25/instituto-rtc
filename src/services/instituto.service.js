export const inscribirAlumno = async (prisma) => {
  const inscripcion = await prisma.alumno.update({
    where: { email: "yuyi.itadori@jujutsuschool.com" },
    data: {
      cursos: {
        connect: [
          { nombre: "Despliegue con Docker" },
          { nombre: "Arquitectura REST" },
        ],
      },
    },
  });
  console.log(inscripcion);
};
