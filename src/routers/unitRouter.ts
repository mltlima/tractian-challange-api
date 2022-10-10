import { Router } from 'express';

import * as UnitController from '../controllers/unitController.js';
import schemas from '../schemas/index.js';
import { validateSchema } from '../middlewares/schemasMiddleware.js';
import { validateToken } from '../middlewares/authMiddleware.js';

const unitRouter = Router();

unitRouter.use(validateToken);
unitRouter.get('/unit/:id', UnitController.getUnitById);
unitRouter.get('/unit/name/:name', UnitController.getUnitByName);
unitRouter.post('/unit', validateSchema(schemas.unitSchema), UnitController.createUnit);
unitRouter.put('/unit/:id', validateSchema(schemas.unitSchema), UnitController.updateUnit);
unitRouter.delete('/unit/:id', UnitController.deleteUnit);

export default unitRouter;