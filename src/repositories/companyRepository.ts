import db from '../db.js';

export async function createCompany(name: string) {
    const collection = db.collection("companies");
    await collection.insertOne({ name });
}

export async function getCompanyById(id: string) {
    const collection = db.collection("companies");
    return await collection.findOne({ _id: id });
}

export async function getCompanyByName(name: string) {
    const collection = db.collection("companies");
    return await collection.findOne({ name });
}

export async function updateCompany(id: string, name: String): Promise<void> {
    const collection = db.collection("companies");
    await collection.updateOne({ _id: id }, { $set: name });
}

export async function deleteCompany(id: string): Promise<void> {
    const collection = db.collection("companies");
    await collection.deleteOne({ _id: id });
}