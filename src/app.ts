import "reflect-metadata";
import "dotenv/config";
import express from "express";
import "./database";

import Index from "./routes/index.route";
import User from "./routes/user.route";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Index);
app.use("/users", User);

export { app };
