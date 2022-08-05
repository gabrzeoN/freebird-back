import prisma from "../config/database.js";
import { Country } from "@prisma/client";

export async function getCountryById(id:number) {
    const country = await prisma.country.findUnique({where: {id}});
    return country;
}

export async function getCountryByName(name:string) {
    const country = await prisma.country.findUnique({where: {name}});
    return country;
}