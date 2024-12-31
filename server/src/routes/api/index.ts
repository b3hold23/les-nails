import { Router } from 'express';
import { reviewRoutes } from './reviewRoutes.js';

const router = Router();

router.use('/reviews', reviewRoutes);

export default router;