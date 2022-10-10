import bcrypt from 'bcrypt';

import { notFoundError, conflictError } from '../utils/errorUtils.js';
import * as UserRepository from '../repositories/userRepository.js';

export async function login(email: string, password: string): Promise<boolean> {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
        throw notFoundError('User not found');
    }
    return await bcrypt.compare(password, user.password);
}

export async function register(username: string, email: string, password: string, company: string): Promise<boolean> {
    const existingUser = await UserRepository.getUserByEmail(email);
    if (existingUser) {
        throw conflictError('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, email, password: hashedPassword, company };
    await UserRepository.createUser(user);
    return true;
}

export async function getUserByEmail(email: string) {
    return await UserRepository.getUserByEmail(email);
}