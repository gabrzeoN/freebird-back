import prisma from "../config/database.js";
import { User, Session } from "@prisma/client";

export type UserSignUpData = Omit<User, "id" | "createdAt">
export type UserSignInData = Omit<User, "id" | "createdAt" |  "fullName" | "foneNumber" | "country">
export type UserSignUpDataReptPass = UserSignUpData & { repeatPassword: string }
export type SessionCreateData = Omit<Session, "id" | "createdAt">

async function getUserByEmail(email:string) {
    const user = await prisma.user.findUnique({where: {email}});
    return user;
}

async function getUserByFone(foneNumber:string) {
    const user = await prisma.user.findUnique({where: {foneNumber}});
    return user;
}

async function insertSignUp(user:UserSignUpData) {
    return await prisma.user.create({data: user});
}

async function insertSignIn(session:SessionCreateData) {
    return await prisma.session.create({data: session});
}

export const authRepository = {
    getUserByEmail,
    getUserByFone,
    insertSignIn,
    insertSignUp
}