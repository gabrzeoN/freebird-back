import { Router } from "express";
import authRouter from "./authRouter.js";
import locationsRouter from "./locationsRouter.js";

const router = Router();

router.use(authRouter);
router.use(locationsRouter);

export default router;