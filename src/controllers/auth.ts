import { Request, Response, response } from "express";
import { verifyUser } from "../services/auth";

export const login = async (req: Request, res: Response)=>{
  try {
    const response = await verifyUser(req.body.email, req.body.password);
    res.send({
      status: true,
      code: 200,
      error: null,
      data: response
    }).status(200);
  } catch (error) {
    res.send({
      status: false,
      code: 400,
      error: error,
      data: null
    }).status(400);    
  }
}