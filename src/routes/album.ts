import { Router } from "express";
import { list } from '../controllers/album'

const router = Router();

router.get(
  '/',
  list
)

export default router;