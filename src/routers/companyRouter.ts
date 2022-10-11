import { Router } from 'express';

import * as CompanyController from '../controllers/companyController.js';
import schemas from '../schemas/index.js';
import { validateSchema } from '../middlewares/schemasMiddleware.js';
import { validateToken } from '../middlewares/authMiddleware.js';

const companyRouter = Router();

companyRouter.get('/companies', CompanyController.getCompanies);
companyRouter.get('/company/:id', CompanyController.getCompanyById);
companyRouter.get('/company/name/:name', CompanyController.getCompanyByName);
companyRouter.post('/company', validateSchema(schemas.companySchema), validateToken, CompanyController.createCompany);
companyRouter.put('/company/:id', validateSchema(schemas.companySchema), validateToken, CompanyController.updateCompany);
companyRouter.delete('/company/:id', validateToken, CompanyController.deleteCompany);

export default companyRouter;