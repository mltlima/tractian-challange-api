import { Router } from 'express';

import * as UnitController from '../controllers/unitController.js';
import schemas from '../schemas/index.js';
import { validateSchema } from '../middlewares/schemasMiddleware.js';
import { validateToken } from '../middlewares/authMiddleware.js';

const unitRouter = Router();

unitRouter.get('/units', UnitController.getUnits);
unitRouter.get('/units/company/:company', UnitController.getUnitsByCompany);
unitRouter.get('/unit/:id', UnitController.getUnitById);
unitRouter.get('/unit/name/:name', UnitController.getUnitByName);
unitRouter.post('/unit', validateSchema(schemas.unitSchema), validateToken, UnitController.createUnit);
unitRouter.put('/unit/:id', validateSchema(schemas.unitSchema), validateToken, UnitController.updateUnit);
unitRouter.delete('/unit/:id', validateToken, UnitController.deleteUnit);

export default unitRouter;