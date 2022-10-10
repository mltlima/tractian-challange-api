import { Router } from 'express';

import userRouter from './userRouter.js';
import assetRouter from './assetRouter.js';
import unitRouter from './unitRouter.js';
import companyRouter from './companyRouter.js';

const router = Router();

router.use(userRouter);
router.use(assetRouter);
router.use(unitRouter);
router.use(companyRouter);

export default router;