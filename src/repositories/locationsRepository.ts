import prisma from "../config/database.js";
import { Location, Picture } from "@prisma/client";

export type LocationInput = Omit<Location, "id" | "hostId"> & { picture: string }
export type LocationData = LocationInput & { hostId: number }

export async function getById(id:number) {
    const location = await prisma.location.findUnique({where: {id}});
    return location;
}

export async function getByHostId(hostId:number) {
    const location = await prisma.location.findMany({where: {hostId}});
    return location;
}

export async function getAll() {
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

export async function insert(location:LocationData) {
    return await prisma.location.create({data: location});
}