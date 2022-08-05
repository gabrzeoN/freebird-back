import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import * as authRepository from "../repositories/authRepository.js";
import * as countryRepository from "../repositories/countryRepository.js";
import * as saltUtil from "../utils/saltUtils.js";
import * as err from "../utils/errorUtils.js"


async function emailMustNotBeRegister(email:string) {
    const user = await authRepository.getUserByEmail(email);
    if(user){
        throw err.conflictError("This email is already in use!");
    }
    return;
}

async function foneMustNotBeRegister(fone:string) {
    const user = await authRepository.getUserByFone(fone);
    if(user){
        throw err.conflictError("This fone is already in use!");
    }
    return;
}

async function countryMustBeRegister(countryId:number) {
    const country = await countryRepository.getCountryById(countryId);
    if(!country){
        throw err.notFoundError("Country not found!");
    }
    return;
}

function encryptPassword(password:string) {
    const encryptedPassword = bcrypt.hashSync(password, saltUtil.bcrypt);
    return encryptedPassword;
}

// async function emailMustBeRegister(email:string) {
//     const user = await authRepository.getUserByEmail(email);
//     if(!user){
//         throw {type: "unauthorized", message: "Incorrect email or password!"};
//     }
//     return user;
// }

// function passwordMustMatch(inputPassword: string, userPassword:string) {
//     const correctPassword = bcrypt.compareSync(inputPassword, userPassword);
//     if(!correctPassword){
//         throw {type: "unauthorized", message: "Incorrect email or password!"};
//     } 
//     return;
// }

// function generateJwtToken(userId:number) {
//     const data = { userId }
//     const config = { expiresIn: saltUtil.timeToJwtExpires };
//     const token = jwt.sign(data, saltUtil.jwt, config);
//     return token;
// }

export async function signUp(user: authRepository.UserSignUpData) {
    await emailMustNotBeRegister(user.email);
    await foneMustNotBeRegister(user.foneNumber);
    await countryMustBeRegister(user.countryId);
    const encryptedPassword = encryptPassword(user.password);
    await authRepository.insertSignUp({...user, password: encryptedPassword});
    return;
}

export async function signIn(loginInput: authRepository.UserSignInData) {
    // const user = await emailMustBeRegister(loginInput.email);
    // passwordMustMatch(loginInput.password, user.password);
    // const token = generateJwtToken(user.id);
    // await authRepository.insertSignIn({userId: user.id, token});
    // return token;
}