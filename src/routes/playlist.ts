import { Router } from "express";
import { getOwned, list } from '../controllers/playlist'

const router = Router();

router.get(
  '/',
  list  
)

router.get(
  '/my',
  getOwned  
)

export default router;