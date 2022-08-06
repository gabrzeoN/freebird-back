import { Response, Request } from "express";

import * as locationsService from "../services/locationsService.js";
import * as locationsRepository from "./../repositories/locationsRepository.js";

export async function createLocation(req: Request, res: Response) {
    const body : locationsRepository.LocationInput = req.body;
    const userId: number = res.locals.userId;
    await locationsService.createLocation({...body, hostId: userId});
    return res.sendStatus(201);
}
