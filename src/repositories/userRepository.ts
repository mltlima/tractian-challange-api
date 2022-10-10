import db from '../db.js';

export interface User {
    username: string;
    email: string;
    password: string;
    company: string;
}

export async function getUserById(id: string): Promise<User> {
    return await db.collection('users').findOne({ _id: id });
}

export async function getUserByEmail(email: string): Promise<User> {
    return await db.collection('users').findOne({ email });
}

export async function createUser(user: User): Promise<void> {
    await db.collection('users').insertOne(user);
}

export async function updateUser(id: string, user: User): Promise<void> {
    await db.collection('users').updateOne({ _id: id }, { $set: user });
}

export async function deleteUser(id: string): Promise<void> {
    await db.collection('users').deleteOne({ _id: id });
}