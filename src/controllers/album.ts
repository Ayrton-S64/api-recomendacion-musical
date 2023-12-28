import { Request, Response, response } from "express";
import { listAlbums, listSingles } from "../services/album";

export const list = async (req: Request, res: Response)=>{
  console.log('processing request for list albums')
  try {
    const response = await listAlbums();
    console.log('sending response albums')
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