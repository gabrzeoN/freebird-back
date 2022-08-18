import prisma from "../config/database.js";

async function insert(url:string, locationId: number) {
    return await prisma.picture.create({data: {url, locationId}});
}

export const picturesRepository = {
    insert
};