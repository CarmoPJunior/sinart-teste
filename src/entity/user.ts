import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("USUARIO")
export class User {
  @PrimaryGeneratedColumn()
    id: number;

    @Column({
      length: 100
    })
    login: string;

    @Column()
    nome: string;

    @Column()
    senha: string;

    @Column()
    ativo: boolean;
}
