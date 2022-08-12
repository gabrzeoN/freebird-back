import { Router } from "express";
import validToken from "../middlewares/validTokenMiddleware.js";
import validSchema from "../middlewares/validSchemaMiddleware.js";
import { createSchema } from "../schemas/locationsSchema.js";
import { createLocation, getAllLocations, getLocation } from "../controllers/locationsController.js";

const locationsRouter = Router();

locationsRouter.post("/locations", validSchema(createSchema), validToken, createLocation);
locationsRouter.get("/locations", getAllLocations);
locationsRouter.get("/locations/:id", getLocation);

export default locationsRouter;