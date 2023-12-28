import {getAll} from '../repositories/songs'

export async function listAll(){
  return await getAll();
}

export async function getRecommend(userId: number, amount: number = 5){
  return [];
}