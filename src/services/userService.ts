import bcrypt from 'bcrypt';

import { notFoundError } from '../utils/errorUtils.js';
import * as UserRepository from '../repositories/userRepository.js';

export async function login(email: string, password: string): Promise<boolean> {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
        throw notFoundError('User not found');
    }
    return await bcrypt.compare(password, user.password);
}