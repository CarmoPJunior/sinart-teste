import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import db from "../models";

class CadastroController {
// route.post("/client", async (req, res, next) => {
//   try {
//     const response = await ClientService.create(req.body);
//     return res.status(201).json(response);
//   } catch (e) {
//     return next(e);
//   }
// });

  async index (req: Request, res: Response, next: NextFunction) {
    try {
      // const uuid = req.params.uuid;
      // const user: User | null = await userRepository.findByUuid(uuid);

      // if (!user) {
      //   return res.sendStatus(StatusCodes.NO_CONTENT);
      // }

      db.User.findAll().then((result: object) => res.json(result)).catch((err: object) => console.error(err));

      return res.status(StatusCodes.OK).json({});
    } catch (error) {
      return next(error);
    }
  }

  // async create (request, response, next) {
  //   try {
  //     const response = await ClientService.create(req.body);
  //     return res.status(201).json(response);
  //   } catch (e) {
  //     return next(e);
  //   }
  // }
}

export default new CadastroController();
