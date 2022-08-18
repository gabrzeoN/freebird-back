import prisma from "../config/database.js";
import { Location, Picture } from "@prisma/client";

export type LocationInput = Omit<Location, "id" | "hostId"> & { picture: string }
export type LocationData = LocationInput & { hostId: number }

async function getById(id:number) {
    const location = await prisma.location.findUnique({
        where: {id},
        include: {
            Picture: {
                select: {
                    url: true
                }
            }
        }
    });
    return location;
}

async function getByHostId(hostId:number) {
    const location = await prisma.location.findMany({
        where: {hostId},
        include: {
            Picture: {
                select: {
                    url: true
                }
            }
        }
    });
    return location;
}

async function getAll() {
    const locations = await prisma.location.findMany({
        include: {
            Picture: {
                select: {
                    url: true
                }
            }
        }
    });
    return locations;
}

async function insert(location:LocationData) {
    return await prisma.location.create({data: location});
}

export const locationsRepository = {
    getById,
    getByHostId,
    getAll,
    insert
};