import { Router } from "express";
import { list } from '../controllers/songs'

const router = Router();

router.get(
  '/',
  list
)

export default router;