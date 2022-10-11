import bcrypt from 'bcrypt';

import { notFoundError, conflictError } from '../utils/errorUtils.js';
import * as UserRepository from '../repositories/userRepository.js';

export async function login(email: string, password: string): Promise<string> {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
        throw notFoundError('User not found');
    }

    if (!bcrypt.compare(password, user.password)) {
        throw notFoundError('Invalid password');
    }

    const username = (await UserRepository.getUserByEmail(email)).username;
    
    return username;

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

export async function getAllUsers() {
    const users = await UserRepository.getAllUsers();
    users.map(user => {
        delete user.password;
    });
    
    return users;
}