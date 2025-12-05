import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../src/generated/prisma/client.ts'
import { crearAlumno, crearVariosAlumnos } from './services/alumno.service.js'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('Conexion exitosa. El adaptador PG esta funcionando.')
    //1- crear alumnos
    // await crearAlumno(prisma)
   await crearVariosAlumnos(prisma)
}

main().catch((e)=>{
    console.error('Ocurrió un error:', e)
    process.exit(1)
}).finally(async ()=>{
    await prisma.$disconnect()
   console.log('Conexion cerrada')
});
