import { getAll, getById } from "../repositories/playlist";

export async function listAll() {
  return await getAll();
}

export async function find(listId: number) {
  return await getById(listId);
}