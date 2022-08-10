import prisma from "../config/database.js";
import { Picture } from "@prisma/client";

export async function insert(url:string, locationId: number) {
    return await prisma.picture.create({data: {url, locationId}});
}