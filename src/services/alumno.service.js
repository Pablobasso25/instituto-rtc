export const crearAlumno = async(prisma) =>{
    const nuevoAlumno = await prisma.alumno.create({
        data:{
            nombre: 'Yuyi',
            apellido: 'Itadori',
            email: 'yuyi.itadori@jujutsuschool.com',
            telefono: '555-1234-567'
        }
    })

    console.log('Alumno creado:', nuevoAlumno)
}