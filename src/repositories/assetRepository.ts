import db from '../db';

export interface Asset {
    name: string;
    description: string;
    image: string;
    model: string;
    owner: string;
    status: AssetStatus;
    health: number;
}

enum AssetStatus {
    "Running",
    "Alerting",
    "Stopped"
}

export default class AssetRepository {
    private collection = db.collection('assets');

    public async create(asset: Asset): Promise<Asset> {
        const result = await this.collection.insertOne(asset);
        return result.ops[0];
    }

    public async findByName(name: string): Promise<Asset> {
        return await this.collection.findOne({ name });
    }

    public async findById(id: string): Promise<Asset> {
        return await this.collection.findOne({ _id: id });
    }

    public async updateAsset(id: string, asset: Asset): Promise<Asset> {
        await this.collection.updateOne({ _id: id }, { $set: asset });
        return await this.findById(id);
    }

    public async deleteAsset(id: string): Promise<Asset> {
        const asset = await this.findById(id);
        await this.collection.deleteOne({ _id: id });
        return asset;
    }
}