import { Router } from "express";
import UserController from "../controllers/user.controller";

const route = Router();

route.post("/token", UserController.login);

export default route;
