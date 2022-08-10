import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import * as saltUtil from "../utils/saltUtils.js";
import * as err from "../utils/errorUtils.js";

export default async function validToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) throw err.unauthorizedError("Token not found!");
    const token = authorization?.replace("Bearer", "").trim();
    if (!token) throw err.unauthorizedError("Token not found!");
    jwt.verify(token, saltUtil.jwt, (error, result: { userId: number }) => {
        if (error) throw err.unauthorizedError("Token expired!");
        if (result) {
            res.locals.userId = result.userId;
            next();
        }
    });
}