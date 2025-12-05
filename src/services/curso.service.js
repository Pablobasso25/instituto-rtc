export const crearCursos = async (prisma) => {
 const listaCursos =  await prisma.curso.createMany({
    data: [
      { nombre: "Despliegue con Docker" }, 
      { nombre: "Arquitectura REST" },
      { nombre: "Git y GitHub Avanzado" },
    ],
    skipDuplicates: true,
  });
  console.log("Catálogo de Cursos creado.", listaCursos)
};

export const leerCursos = async (prisma) => {
  const cursos = await prisma.curso.findMany();
  console.log("Lista de Cursos:", cursos);
};