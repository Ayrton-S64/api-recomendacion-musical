import { PrismaClient } from "@prisma/client";
import * as Bycript from 'bcrypt'

const prisma = new PrismaClient();


async function main(){
  const defaultPassword = await Bycript.hash('password',8);

  await prisma.usuario.upsert({
    where:{
      correo: 'admin@example.com',
    },
    update: {
      username: 'admin',
      correo: 'admin@example.com',
      password: defaultPassword,
    },
    create: {
      username: 'admin',
      correo: 'admin@example.com',
      password: defaultPassword,

    }
  })
}

main()
.then(async ()=>{
  await prisma.$disconnect()
})
.catch(async (e)=>{
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})