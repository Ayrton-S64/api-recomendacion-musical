import { Request, Response, response } from "express";
import { listAll } from "../services/artist";

export const list = async(req: Request, res: Response)=>{
  console.log('processing list artists')  
  try {
    const response = await listAll();
    console.log('sending response artists', response);
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