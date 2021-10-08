import { Router } from "express";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

const usersRoutes = Router();

const createUserController = new CreateCategoryController();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };
