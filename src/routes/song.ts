import { Router } from "express";
import { list, recommendSongs } from '../controllers/songs'

const router = Router();

router.get(
  '/',
  list
)

router.get(
  '/recommendations',
  recommendSongs,
)

export default router;