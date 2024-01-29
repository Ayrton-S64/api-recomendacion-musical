import { Router } from "express";
import { list } from '../controllers/playlist'

const router = Router();

router.get(
  '/',
  list  
)

export default router;