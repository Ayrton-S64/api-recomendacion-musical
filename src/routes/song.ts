import { Router } from "express";
import { listAll } from '../controllers/songs'

const router = Router();

router.get(
  '/',
  listAll
)

export default router;