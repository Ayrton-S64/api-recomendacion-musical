import {getAll, getByCode} from '../repositories/songs'

export async function listAll(){
  return await getAll();
}

export async function find(code: string){
  return await getByCode(code);
}

export async function getRecommend(userId: number, amount: number = 5){
  return [];
}