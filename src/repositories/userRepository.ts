import db from '../db.js';

export interface User {
    username: string;
    email: string;
    password: string;
}

export async function getUserById(id: string): Promise<User> {
    return await db.collection('users').findOne({ _id: id });
}

export async function getUserByEmail(email: string): Promise<User> {
    return await db.collection('users').findOne({ email });
}