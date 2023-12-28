import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAll(){
  return await prisma.album.findMany({
    where:{
      isSingle: false,
    },
    include:{
      artist: true,
      songs: true,
    }
  });
}

export async function getSingles(){
  return await prisma.album.findMany({
    where:{
      isSingle: true,
    }
  })
}