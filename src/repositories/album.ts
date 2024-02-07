import { Album, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAll(){
  return await prisma.album.findMany({
    where:{
      isSingle: false,
    },
    include:{
      artist: true,
      canciones: true,
    }
  });
}

export async function getByType(isSingle: boolean){
  return await prisma.album.findMany({
    where:{
      isSingle,
      deletedAt: null
    },
    include:{
      artist: true,
      canciones: {
        include: {
          ArtistaCancion: {
            include: {
              artista: true,
            }
          }
        }
      },
    }
  })
}

export async function getByCode(code: string) {
  return await prisma.album.findFirst({
    where:{
      code,
      deletedAt: null,
    },
    include:{
      artist: true,
      canciones: true,
    }
  })
}


