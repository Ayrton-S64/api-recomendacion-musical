import { Request, Response } from "express";
import { getAll, getRecommend } from "../services/songs";

export const listAll = async(req: Request, res: Response)=>{
  return await getAll();
}

export const recommendSongs =  async(req: Request, res: Response)=>{
  return await getRecommend(1);
}