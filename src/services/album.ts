import { getSingles, getAll } from "../repositories/album";

export async function listAlbums() {
  return await getAll();
}

export async function listSingles(){
  return await getSingles();
}
