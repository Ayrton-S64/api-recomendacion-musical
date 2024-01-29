import { Router } from "express";
import { list } from '../controllers/artists'

const router = Router();

router.get(
  '/',
  list  
)

export default router;