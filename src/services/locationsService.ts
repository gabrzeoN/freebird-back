import { locationsRepository, LocationData } from "../repositories/locationsRepository.js";
import { picturesRepository } from "../repositories/picturesRepository.js";

export async function createLocation(newLocation: LocationData) {
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