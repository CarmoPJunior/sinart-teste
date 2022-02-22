import { Router } from "express";
import CadastroController from "../controllers/cadastro.controller";

const route = Router();

// const controller = require('../controllers/personController')
route.get("/", CadastroController.index);
// route.post('/', controller.post);
// route.put('/:id', controller.put);
// route.delete('/:id', controller.delete);

export default route;
