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

  await prisma.genero.create({
    data: {
      name: 'indie',
    }
  })
  await prisma.genero.create({
    data: {
      name: 'rock',
    }
  })
  await prisma.genero.create({
    data: {
      name: 'pop',
    }
  })

  const lvj = await prisma.artista.create({
    data: {
      nombre: 'Lovejoy',
      imagen: 'https://pbs.twimg.com/profile_images/1577331669006155776/K2ddBqaN_400x400.jpg',
      generos: {
        connect: [
          {
            name: 'indie',
          },
          {
            name: 'rock',
          }
        ]
      },
      albums: {
        create: [
          {
            name: 'Pebble Brain',
            songs: {
              create: [{
                titulo: 'Knee Deep at ATP',
                generoName: 'indie',
                duracion: 3*60 + 9,
                imagen: '' ,
              }]
            }
          },
          {
            name: 'Are you all rigth?',
            songs: {
              create: [{
                titulo: 'Knee Deep at ATP',
                generoName: 'indie',
                duracion: 3*60 + 9,
                imagen: '' ,
              }]
            }
          },
          
          {
            name: 'Wake Up & It\'s Over',
            songs: {
              create: [{
                titulo: 'Knee Deep at ATP',
                generoName: 'indie',
                duracion: 3*60 + 9,
                imagen: '' ,
              }]
            }
          },
          {
            name: 'Normal People Things',
            isSingle: true,
            songs: {
              create: [{
                titulo: 'Normal People Things',
                generoName: 'indie',
                duracion: 2*60 + 45,
                imagen: '' ,
              }]
            }
          },
          {
            name: 'Call me What You Like',
            isSingle: true,
            songs: {
              create: [{
                titulo: 'Call me What You Like',
                generoName: 'indie',
                duracion: 3*60 + 47,
                imagen: '' ,
              }]
            }
          },
          {
            name: 'Knee Deep at ATP',
            isSingle: true,
            songs: {
              create: [{
                titulo: 'Knee Deep at ATP',
                generoName: 'indie',
                duracion: 3*60 + 9,
                imagen: '' ,
              }]
            }
          },
        ]
      }
    },
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
