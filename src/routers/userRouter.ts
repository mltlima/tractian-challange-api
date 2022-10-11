import { Router } from 'express';

import * as UserController from '../controllers/userController.js';
import schemas from '../schemas/index.js';
import { validateSchema } from '../middlewares/schemasMiddleware.js';

const userRouter = Router();

userRouter.get('/users', UserController.getAllUsers);
userRouter.post('/login', validateSchema(schemas.loginSchema), UserController.login);
userRouter.post('/register', validateSchema(schemas.registerSchema), UserController.register);
userRouter.get('/email/:email', UserController.getUserByEmail);

export default userRouter;