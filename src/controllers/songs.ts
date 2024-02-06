import { Request, Response } from "express";
import { listAll, getRecommendation } from "../services/songs";

export const list = async(req: Request, res: Response)=>{
  console.log('processing list songs')  
  try {
    const response = await listAll();
    console.log('sending response songs', response);
    res.send({
      status: true,
      code: 200,
      error: null,
      data: response
    }).status(200);
  } catch (error) {
    console.log('error ', error)
    res.send({
      status: false,
      code: 400,
      error: error,
      data: null
    }).status(400);    
  }
}

export const recommendSongs =  async(req: Request, res: Response)=>{
  console.log('inside controller recommendSongs');
  try {
    const response = await getRecommendation(1);
    console.log('sending recommended songs', response);
    res.send({
      status: true,
      code: 200,
      error: null,
      data: response
    }).status(200);
  } catch (error) {
    console.log('error ', error)
    res.send({
      status: false,
      code: 400,
      error: error,
      data: null
    }).status(400);    
  }
}