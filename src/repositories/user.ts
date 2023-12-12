import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserByEmail(email:string){
  try {
    return await prisma.usuario.findUnique({
      where:{
        correo: email,
      }
    })
  } catch (error) {
    throw error;    
  }
}

export async function getUserByUsername(username:string){
  try {
    return await prisma.usuario.findUnique({
      where: {
        username,
      }
    })
  } catch (error) {
    throw error;
  }
}