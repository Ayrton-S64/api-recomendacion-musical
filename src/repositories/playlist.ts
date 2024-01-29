import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAll(){
  return await prisma.listaReproduccion.findMany({
    where:{
      deletedAt: null,
    },
    include:{
      usuario: {
        select:{
          username: true,
        }
      },
      CancionListaReproduccion:{
        include: {
          cancion: true,
        }
      }
    }
  });
}

export async function getById(listId: number){
  return await prisma.listaReproduccion.findFirst({
    where:{
      id: listId,
      deletedAt: null,
    },
    include:{
      usuario: {
        select:{
          username: true,
        }
      },
      CancionListaReproduccion:{
        include: {
          cancion: true,
        }
      }
    }
  });
}

