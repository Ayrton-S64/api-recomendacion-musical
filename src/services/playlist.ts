import { getAll, getById, getByUserId } from "../repositories/playlist";

export async function listAll() {
  return await getAll();
}

export async function listByUser(userId: number) {
  return await getByUserId(userId);
}

export async function find(listId: number) {
  return await getById(listId);
}