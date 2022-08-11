import { Response, Request } from "express";

import * as locationsService from "../services/locationsService.js";
import * as locationsRepository from "./../repositories/locationsRepository.js";

export async function createLocation(req: Request, res: Response) {
    const body : locationsRepository.LocationInput = req.body;
    const userId: number = res.locals.userId;
    const location = await locationsService.createLocation({...body, hostId: userId});
    return res.status(201).send(location);
}

export async function getAllLocations(req: Request, res: Response) {
    const locations = await locationsService.getAllLocations();
    return res.status(200).send(locations);
}