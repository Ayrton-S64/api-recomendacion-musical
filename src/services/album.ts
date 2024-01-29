import { getAll, getByType, getByCode } from "../repositories/album";

export async function listAll() {
  return await getAll();
}

export async function listAlbums() {
  return await getByType(false);
}

export async function listSingles(){
  return await getByType(true);
}

export async function find(code: string){
  return await getByCode(code);
}
