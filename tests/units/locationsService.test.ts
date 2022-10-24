import { jest } from "@jest/globals";
import * as locationsService from "../../src/services/locationsService.js";
import { locationsRepository } from "../../src/repositories/locationsRepository.js";
import * as locationsFactory from "../factories/locationsFactory.js";
import { picturesRepository } from "../../src/repositories/picturesRepository.js";

beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
});

describe("locationsSevice test suite", () => {
  it("should pass", () => {
    expect(0).toBe(0);
  });
    it("should insert a location", async () => {
        const location = locationsFactory.locationInput();
        jest.spyOn(locationsRepository, 'insert').mockImplementationOnce(():any => { return {...location}});
        jest.spyOn(picturesRepository, 'insert').mockImplementationOnce(():any => null);
        const promise = locationsService.createLocation(location);
        expect(locationsRepository.insert).toHaveBeenCalled();
        delete location.picture
        expect(promise).resolves.toStrictEqual(location);
    });

    it("should get all locations", async () => {
        const location = locationsFactory.locationInput();
        jest.spyOn(locationsRepository, 'getAll').mockImplementationOnce(():any => [{...location}]);
        const promise = locationsService.getAllLocations();
        expect(locationsRepository.getAll).toHaveBeenCalled();
        expect(promise).resolves.toStrictEqual([{...location}]);
    });
    
    it("should get location by id", async () => {
        const location = locationsFactory.locationInput();
        jest.spyOn(locationsRepository, 'getById').mockImplementationOnce(():any => { return {...location , id: 1}});
        const promise = locationsService.getLocation(1);
        expect(locationsRepository.getById).toHaveBeenCalled();
        expect(promise).resolves.toStrictEqual({...location , id: 1});
    });

    it("should get location by hostId", async () => {
        const location = locationsFactory.locationInput();
        jest.spyOn(locationsRepository, 'getByHostId').mockImplementationOnce(():any =>{ return {...location , id: 1}});
        const promise = locationsService.getLocationsFromUser(1);
        expect(locationsRepository.getByHostId).toHaveBeenCalled();
        expect(promise).resolves.toStrictEqual({...location , id: 1});
    });
});