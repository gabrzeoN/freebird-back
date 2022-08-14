import * as authRepository from "../repositories/authRepository.js";
import * as locationsRepository from "../repositories/locationsRepository.js";
import * as picturesRepository from "../repositories/picturesRepository.js";
import * as err from "../utils/errorUtils.js";

export async function createLocation(newLocation:locationsRepository.LocationData) {
    const picture = newLocation.picture;
    delete newLocation.picture
    const location = await locationsRepository.insert(newLocation);
    await picturesRepository.insert(picture, location.id);
    return location;
}

export async function getAllLocations() {
    const locations = await locationsRepository.getAll();
    return locations;
}

export async function getLocation(id: number) {
    const location = await locationsRepository.getById(id);
    return location;
}

export async function getLocationsFromUser(hostId: number) {
    const locations = await locationsRepository.getByHostId(hostId);
    return locations;
}