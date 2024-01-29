import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAll(){
  return await prisma.artista.findMany({
    where:{
      deletedAt: null,
    },
    include:{
      albums:{
        include:{
          canciones: true,
        }
      },
      ArtistaCancion: {
        include: {
          cancion: true,
        }
      },
    }
  });
}

export async function getById(artistId: number){
  return await prisma.artista.findFirst({
    where:{
      id: artistId,
      deletedAt: null,
    },
    include:{
      albums:{
        include:{
          canciones: true,
        }
      },
      ArtistaCancion: {
        include: {
          cancion: true,
        }
      },
    }
  });
}

