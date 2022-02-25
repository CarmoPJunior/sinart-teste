import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";
import { ForbiddenError } from "../errors/forbidden.error";
// import userRepository from "../repositories/user.repository";

const jwtAuthenticationMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      throw new ForbiddenError({ log: "Credenciais não encontradas!" });
    }

    const [authorizationType, jwtToken] = authorizationHeader.split(" ");

    if (authorizationType !== "Bearer") {
      throw new ForbiddenError({ log: "Tipo de autorização inválida!" });
    }

    if (!jwtToken) {
      throw new ForbiddenError({ log: "Token inválido!" });
    }

    try {
      const tokenPayload = JWT.verify(jwtToken, String(process.env.JWT_SECRET));

      if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
        throw new ForbiddenError({ log: "Token inválido" });
      }

      // const user = await userRepository.findByUuid(tokenPayload.sub);
      req.user = { idUsuario: tokenPayload.idUsuario, nome: tokenPayload.nome };

      return next();
    } catch (error) {
      throw new ForbiddenError({ log: "Token inválido!" });
    }
  } catch (error) {
    return next(error);
  }
};

export default jwtAuthenticationMiddleware;
