import { Request, Response } from 'express';
import * as AssetService from '../services/assetService.js';

export async function getAssetById(req: Request, res: Response) {
    const { id } = req.params;
    const asset = await AssetService.getAssetById(id);
    res.status(200).send(asset);
}

export async function getAssetByName(req: Request, res: Response) {
    const { name } = req.params;
    const asset = await AssetService.getAssetByName(name);
    res.status(200).send(asset);
}

export async function createAsset(req: Request, res: Response) {
    const { name, description, image, model, owner, status, health, unit } = req.body;
    await AssetService.createAsset({ name, description, image, model, owner, status, health, unit });
    res.status(201).send();
}

export async function updateAsset(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, image, model, owner, status, health, unit } = req.body;
    await AssetService.updateAsset(id, { name, description, image, model, owner, status, health, unit });
    res.status(204).send();
}

export async function deleteAsset(req: Request, res: Response) {
    const { id } = req.params;
    await AssetService.deleteAsset(id);
    res.status(204).send();
}