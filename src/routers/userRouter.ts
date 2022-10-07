import { Router } from 'express';

import * as UserController from '../controllers/userController.js';
import schemas from '../schemas/index.js';
import { validateSchema } from '../middlewares/schemasMiddleware.js';

const userRouter = Router();

userRouter.post('/login', validateSchema(schemas.loginSchema), UserController.login);

export default userRouter;