import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import * as authRepository from "../repositories/authRepository.js";
import * as locationsRepository from "../repositories/locationsRepository.js";
import * as err from "../utils/errorUtils.js"


export async function createLocation(location:locationsRepository.LocationData) {
    await locationsRepository.insert(location);
}