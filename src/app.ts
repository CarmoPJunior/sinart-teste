import "reflect-metadata";
import "dotenv/config";
import express from "express";
import "./database";
import errorHanddlerMiddleware from "./middlewares/errorHanddlerMiddleware";
import jwtAuthenticationMiddleware from "./middlewares/jwtAuthenticationMiddleware";

import Index from "./routes/index.route";
import User from "./routes/user.route";
import Autenticacao from "./routes/autenticacao.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Index);
app.use("/users", jwtAuthenticationMiddleware, User);
app.use("/autenticacao", Autenticacao);
app.use(errorHanddlerMiddleware);

export { app };
