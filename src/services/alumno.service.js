export const crearAlumno = async (prisma) => {
  const nuevoAlumno = await prisma.alumno.create({
    data: {
      nombre: "Yuyi",
      apellido: "Itadori",
      email: "yuyi.itadori@jujutsuschool.com",
      telefono: "555-1234-567",
    },
  });

  console.log("Alumno creado:", nuevoAlumno);
};

export const crearVariosAlumnos = async (prisma) => {
  const alumnosData = await prisma.alumno.createMany({
    data: [
      {
        nombre: "Megumi",
        apellido: "Fushiguro",
        email: "megumi.fushiguro@jujutsuschool.com",
      },
      {
        nombre: "Nobara",
        apellido: "Kugisaki",
        email: "nobara.kugisaki@jujutsuschool.com",
        telefono: "123-1234-567",
      },
    ],
    skipDuplicates: true,
  });

  console.log('Se inscribieron los siguientes alumnos', alumnosData)
};
