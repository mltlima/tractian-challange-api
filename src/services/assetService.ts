import { notFoundError, conflictError } from '../utils/errorUtils.js';
import * as AssetRepository from '../repositories/assetRepository.js';

export async function getAssetById(id: string) {
    const asset = await AssetRepository.getAssetById(id);
    if (!asset) {
        throw notFoundError('Asset not found');
    }
    return asset;
}

export async function getAssetByName(name: string) {
    const asset = await AssetRepository.getAssetByName(name);
    if (!asset) {
        throw notFoundError('Asset not found');
    }
    return asset;
}

export async function createAsset(asset: AssetRepository.Asset) {
    const existingAsset = await AssetRepository.getAssetByName(asset.name);
    if (existingAsset) {
        throw conflictError('Asset already exists');
    }
    await AssetRepository.createAsset(asset);
}

export async function updateAsset(id: string, asset: AssetRepository.Asset) {
    await getAssetById(id);
    await AssetRepository.updateAsset(id, asset);
}

export async function deleteAsset(id: string) {
    await getAssetById(id);
    await AssetRepository.deleteAsset(id);
}