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
        nombre: "Maki",
        apellido: "Zenin",
        email: "maki.zenin@jujutsuschool.jp",
      }, 
      {
        nombre: "Toge",
        apellido: "Inumaki",
        email: "toge.inumaki@jujutsuschool.jp",
        telefono: "512-444-100",
      },
      {
        nombre: "Panda",
        apellido: "-",
        email: "panda@jujutsuschool.jp",
        telefono: "514-444-100",
      },
      {
        nombre: "Mai",
        apellido: "Zenin",
        email: "mai.zenin@jujutsuschool.jp",
        telefono: "515-444-100",
      },
    ],
    skipDuplicates: true,
  });

  console.log('Se inscribieron los siguientes alumnos', alumnosData)
};

export const obtenerAlumnos = async (prisma) => {
    const alumnosConsultados = await prisma.alumno.findMany();
    console.log('🎓 Lista de Alumnos consultados:');
    console.table(alumnosConsultados)
}

export const ObtenerDatosAlumnos = async(prisma) => {
    const datosAlumnos = await prisma.alumno.findMany({
        select:{
            nombre:true, apellido:true, telefono:true
        }
    })
     console.log('🎓 Lista de Alumnos consultados:');
    console.table(datosAlumnos)
}

export const actualizarEmailAlumno = async(prisma, emailAnterior, nuevoEmail) => {
    try{

    const alumnoActualizado = await prisma.alumno.update({
        where: {email: emailAnterior},
        data:{email: nuevoEmail}
    })
    console.log('Email de alumno actualizado', alumnoActualizado);
    }catch(error){
        if(error.code === 'P2025'){
            console.error('Error: No se encontró un alumno con el email proporcionado.');
        }else{
            console.error('Ocurrió un error al actualizar el email del alumno:', error);
        }
    }
    
}

