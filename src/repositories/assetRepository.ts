import db from '../db';

export interface Asset {
    name: string;
    description: string;
    image: string;
    model: string;
    owner: string;
    status: AssetStatus;
    health: number;
    unit: string;
}

enum AssetStatus {
    "Running",
    "Alerting",
    "Stopped"
}

export async function createAsset(asset: Asset) {
    const collection = db.collection("assets");
    await collection.insertOne(asset);
}

export async function getAssetById(id: string): Promise<Asset> {
    const collection = db.collection("assets");
    return await collection.findOne({ _id: id });
}

export async function getAssetByName(name: string): Promise<Asset> {
    const collection = db.collection("assets");
    return await collection.findOne({ name });
}

export async function getAssetByIdAndOwner(id: string, owner: string): Promise<Asset> {
    const collection = db.collection("assets");
    return await collection.findOne({ _id: id, owner });
}

export async function updateAsset(id: string, asset: Asset): Promise<void> {
    const collection = db.collection("assets");
    await collection.updateOne({ _id: id }, { $set: asset });
}

export async function deleteAsset(id: string): Promise<void> {
    const collection = db.collection("assets");
    await collection.deleteOne({ _id: id });
}