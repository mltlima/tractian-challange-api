import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'

import * as UserService from '../services/userService.js';

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    const username = await UserService.login(email, password);

    const token = jwt.sign({ email, username }, process.env.JWT_SECRET);
    res.status(200).send({token});
}

export async function register(req: Request, res: Response) {
    const { username, email, password, company } = req.body;
    const isUserValid = await UserService.register(username, email, password, company);
    if (!isUserValid) {
        return res.status(400).send('Invalid user data');
    }
    res.status(200).send('User created');
}

export async function getUserByEmail(req: Request, res: Response) {
    const { email } = req.params;
    const user = await UserService.getUserByEmail(email);
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.status(200).send(user);
}

export async function getAllUsers(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.status(200).send(users);
}