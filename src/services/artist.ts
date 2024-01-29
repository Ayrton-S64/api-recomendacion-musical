import { getAll, getById } from "../repositories/artist";

export async function listAll() {
  return await getAll();
}

export async function find(artistId: number) {
  return await getById(artistId);
}