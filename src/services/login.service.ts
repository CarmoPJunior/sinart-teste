import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import UserRepository from "../repositores/UserRepository";

type UserRequest = {
  login: string;
  senha: string;
};

class LoginService {
  async logar ({ login, senha }: UserRequest) {
    const user = await UserRepository.findByLogin(login);

    if (!user) {
      return new Error("Usuário não existe!");
    }

    const passwordMatch = await compare(senha, user.senha);

    if (!passwordMatch) {
      return new Error("Usuário ou Senha incorreto!");
    }

    const token = sign(
      {
        idUsuario: user.id,
        nome: user.nome
      }
      , String(process.env.JWT_SECRET),
      {
        subject: String(user.id),
        expiresIn: 30
      });

    return { token };
  }
}

export default new LoginService();
