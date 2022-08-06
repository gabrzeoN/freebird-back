import { Router } from "express";
import validToken from "../middlewares/validTokenMiddleware.js";
import validSchema from "../middlewares/validSchemaMiddleware.js";
import { createSchema } from "../schemas/locationsSchema.js";
import { createLocation } from "../controllers/locationsController.js";

const locationsRouter = Router();

locationsRouter.post("/locations", validSchema(createSchema), validToken, createLocation);

export default locationsRouter;