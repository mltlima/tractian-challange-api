import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "").trim();
  const secretKey = process.env.JWT_SECRET;
 
  if (!token) {
    throw new Error("invalid token");
  }

  const user = jwt.verify(token, secretKey!);
  if (!user) {
    throw new Error("user not found");
  }

  res.locals.user = user;
  next();
  
}