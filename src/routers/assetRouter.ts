import { Router } from 'express';

import * as AssetController from '../controllers/assetController.js';
import schemas from '../schemas/index.js';
import { validateSchema } from '../middlewares/schemasMiddleware.js';
import { validateToken } from '../middlewares/authMiddleware.js';

const assetRouter = Router();

assetRouter.use(validateToken);
assetRouter.get('/asset/:id', AssetController.getAssetById);
assetRouter.get('/asset/name/:name', AssetController.getAssetByName);
assetRouter.post('/asset', validateSchema(schemas.assetSchema), AssetController.createAsset);
assetRouter.put('/asset/:id', validateSchema(schemas.assetSchema), AssetController.updateAsset);
assetRouter.delete('/asset/:id', AssetController.deleteAsset);

export default assetRouter;