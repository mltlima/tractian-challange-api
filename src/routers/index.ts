import { Router } from 'express';

import userRouter from './userRouter.js';
import assetRouter from './assetRouter.js';

const router = Router();

router.use(userRouter);
router.use(assetRouter);

export default router;