export const crearCursos = async (prisma) => {
  const listaCursos = await prisma.curso.createMany({
    data: [
      { nombre: "Despliegue con Docker" },
      { nombre: "Arquitectura REST" },
      { nombre: "Git y GitHub Avanzado" },
    ],
    skipDuplicates: true,
  });
  console.log("Catálogo de Cursos creado.", listaCursos);
};

export const leerCursos = async (prisma) => {
  const cursos = await prisma.curso.findMany();
  console.log("Lista de Cursos:", cursos);
};

export const datosCursoCompleto = async (prisma, nombreCurso) => {
  const datosCurso = await prisma.curso.findUnique({
    where: {
      nombre: nombreCurso,
    },
    include: {
      profesor: true,
      alumnos: {
        select: { nombre: true, apellido: true },
      },
    },
  });

  console.log(`Datos del curso ${nombreCurso}`);

  if(!datosCurso){
    console.log(`No se encontró el curso ${nombreCurso}`);
    return;
  }
  console.log(`\n 📚 Curso: ${nombreCurso}`)
  console.log(`👨‍🏫 Profesor: ${datosCurso.profesor.nombre}, ${datosCurso.profesor.apellido}`);
  console.log(`👥 Alumnos inscritos:`)
  console.table(datosCurso.alumnos);
};
