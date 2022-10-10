import db from '../db.js';

export interface Unit {
    name: string;
    company: string;
}

export async function createUnit(unit: Unit) {
    const collection = db.collection("units");
    await collection.insertOne(unit);
}

export async function getUnitById(id: string): Promise<Unit> {
    const collection = db.collection("units");
    return await collection.findOne({ _id: id });
}

export async function getUnitByName(name: string): Promise<Unit> {
    const collection = db.collection("units");
    return await collection.findOne({ name });
}

export async function updateUnit(id: string, unit: Unit): Promise<void> {
    const collection = db.collection("units");
    await collection.updateOne({ _id: id }, { $set: unit });
}

export async function deleteUnit(id: string): Promise<void> {
    const collection = db.collection("units");
    await collection.deleteOne({ _id: id });
}