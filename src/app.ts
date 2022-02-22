import "reflect-metadata";
import "dotenv/config";
import express from "express";
import Index from "./routes/index.route";
import Cadastro from "./routes/cadastro.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Index);
app.use("/cadastro", Cadastro);

export { app };
