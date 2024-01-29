import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAll() {
  return await prisma.cancion.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      Album: {
        include: {
          artist: true,
        },
      },
      ArtistaCancion: {
        include: {
          artista: true,
        },
      },
    },
  });
}

export async function getByCode(code: string) {
  return await prisma.cancion.findFirst({
    where: {
      code,
      deletedAt: null,
    },
    include: {
      Album: {
        include: {
          artist: true,
        },
      },
      ArtistaCancion: {
        include: {
          artista: true,
        },
      },
    },
  });
}
