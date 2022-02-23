import { Router } from "express";
import UserController from "../controllers/user.controller";

const route = Router();

route.get("/", UserController.index);
route.get("/:id", UserController.findById);
// route.post('/', controller.post);
// route.put('/:id', controller.put);
// route.delete('/:id', controller.delete);

export default route;
