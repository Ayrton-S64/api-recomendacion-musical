import { Request, Response, response } from "express";
import { listAll, listByUser } from "../services/playlist";

export const list = async(req: Request, res: Response)=>{
  console.log('processing list playlists')  
  try {
    const response = await listAll();
    console.log('sending response playlists', response);
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

export const getOwned = async(req: Request, res: Response)=>{
  // @ts-ignore
  console.log('processing owned playlists; user:', req.user);  
  try {
    const response = await listByUser(1);
    console.log('sending response playlists', response);
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