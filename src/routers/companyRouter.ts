import { Router } from 'express';

import * as CompanyController from '../controllers/companyController.js';
import schemas from '../schemas/index.js';
import { validateSchema } from '../middlewares/schemasMiddleware.js';
import { validateToken } from '../middlewares/authMiddleware.js';

const companyRouter = Router();

companyRouter.use(validateToken);
companyRouter.get('/company/:id', CompanyController.getCompanyById);
companyRouter.get('/company/name/:name', CompanyController.getCompanyByName);
companyRouter.post('/company', validateSchema(schemas.companySchema), CompanyController.createCompany);
companyRouter.put('/company/:id', validateSchema(schemas.companySchema), CompanyController.updateCompany);
companyRouter.delete('/company/:id', CompanyController.deleteCompany);

export default companyRouter;