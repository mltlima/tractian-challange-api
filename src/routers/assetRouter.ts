import { Router } from 'express';

import * as AssetController from '../controllers/assetController.js';
import schemas from '../schemas/index.js';
import { validateSchema } from '../middlewares/schemasMiddleware.js';
import { validateToken } from '../middlewares/authMiddleware.js';

const assetRouter = Router();

assetRouter.get('/assets', AssetController.getAllAssets);
assetRouter.get('/asset/:id', AssetController.getAssetById);
assetRouter.get('/asset/name/:name', AssetController.getAssetByName);
assetRouter.post('/asset', validateSchema(schemas.assetSchema), validateToken, AssetController.createAsset);
assetRouter.put('/asset/:id', validateSchema(schemas.assetSchema), validateToken, AssetController.updateAsset);
assetRouter.delete('/asset/:id', validateToken, AssetController.deleteAsset);

export default assetRouter;