import joi from "joi";
import { UserSignUpDataReptPass, UserSignInData } from "../repositories/authRepository.js";

export const signUpSchema = joi.object<UserSignUpDataReptPass>({
    countryId: joi.number().integer().required(),
    fullName: joi.string().trim().required(),
    email: joi.string().trim().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9\!\@\#\$\%\^\&\*]{8,50}$')).required(),
    repeatPassword: joi.string().valid(joi.ref('password')).required(),
    foneNumber: joi.string().trim().pattern(new RegExp('^[0-9]{11}$')).required()
});

export const signInSchema = joi.object<UserSignInData>({
    email: joi.string().email().trim().required(),
    password: joi.string().required()
});