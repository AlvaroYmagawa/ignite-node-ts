import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserCOntroller = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserCOntroller.handle);

export { authenticateRoutes };
