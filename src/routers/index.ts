import { Router } from 'express';

import userRouter from './userRouter.js';
import assetRouter from './assetRouter.js';
import unitRouter from './unitRouter.js';

const router = Router();

router.use(userRouter);
router.use(assetRouter);
router.use(unitRouter);

export default router;