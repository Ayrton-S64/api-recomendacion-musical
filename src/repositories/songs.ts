import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getAll(){
  return await prisma.cancion.findMany({
    include: {
      album:{
        include:{
          artist: true,
        }
      }
    }
  });
}