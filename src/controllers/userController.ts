import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'

import * as UserService from '../services/userService.js';

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    const isUserValid = await UserService.login(email, password);
    if (!isUserValid) {
        return res.status(401).send('Invalid email or password');
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.status(200).send({token});
}