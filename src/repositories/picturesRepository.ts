import prisma from "../config/database.js";

export async function insert(url:string, locationId: number) {
    return await prisma.picture.create({data: {url, locationId}});
}