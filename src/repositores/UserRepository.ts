import { getRepository } from "typeorm";
import { User } from "../entity/user";
import { DatabaseError } from "../errors/database.error";

class UserRepository {
  async findById (id: number): Promise<User | undefined> {
    try {
      return await getRepository(User).findOneOrFail({ id });
    } catch (error) {
      throw new DatabaseError({ log: "Erro ao buscar usuários!", data: error });
    }
  }

  async findAll (): Promise<User[] | undefined> {
    try {
      return await getRepository(User).find();
    } catch (error) {
      throw new DatabaseError({ log: "Erro ao buscar usuário por id!", data: error });
    }
  }
}

export default new UserRepository();
