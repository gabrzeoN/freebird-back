import joi from "joi";
import { LocationInput } from "../repositories/locationsRepository";

const oneMillion = 100000000;
const oneBillion = 1000000000;

export const createSchema = joi.object<LocationInput>({
    description: joi.string().trim().max(2000).required(),
    pricePerNight: joi.number().integer().max(oneMillion).required(),
    isAvailable: joi.bool(),
    bedrooms: joi.number().integer().max(99).required(),
    country: joi.string().trim().max(20).required(),
    state: joi.string().trim().max(20).required(),
    city: joi.string().trim().max(20).required(),
    picture: joi.string().uri().required(),
});