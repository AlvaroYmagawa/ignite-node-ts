import { Router } from "express";

//* ROUTES
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
