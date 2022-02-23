import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserRepository from "../repositores/UserRepository";

class UserController {
  async index (req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserRepository.findAll();
      return res.status(StatusCodes.OK).json({ users });
    } catch (error) {
      return next(error);
    }
  }

  async findById (req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const result = await UserRepository.findById(id);

      if (!result) {
        return res.sendStatus(StatusCodes.NO_CONTENT);
      }

      if (result instanceof Error) {
        res.status(StatusCodes.BAD_GATEWAY).json(result.message);
      }

      return res.status(StatusCodes.OK).json({ user: result });
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

export default new UserController();
