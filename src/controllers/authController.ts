import { Response, Request } from "express";

import * as authService from "../services/authService.js";
import { UserSignInData, UserSignUpDataReptPass } from "./../repositories/authRepository.js";

export async function signUp(req: Request, res: Response) {
    const body : UserSignUpDataReptPass = req.body;
    delete body.repeatPassword;
    await authService.signUp(body);
    return res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const body : UserSignInData = req.body;
    const token = await authService.signIn(body);
    return res.status(200).send({token});
}