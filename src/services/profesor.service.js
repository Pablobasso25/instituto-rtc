export const agregarProfesor = async(prisma, nombre, apellido, email, curso)=>{
    const actualizarCurso =await prisma.curso.update({
        where:{
            nombre:curso
        },
        data:{
            profesor:{
                create:{
                    nombre,
                    apellido,
                    email
                }
            }
        },
        include:{
            profesor:true
        }
    })

    console.log(`Profesor ${actualizarCurso.profesor.nombre}, ${actualizarCurso.profesor.apellido} fue agregado al curso ${actualizarCurso.nombre}`);
}