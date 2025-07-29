import express from "express";
import homeRoutes from "./routes/home.routes.js";
import userRoutes from "./routes/user.routes.js";
import tokenRoutes from "./routes/token.routes.js";
import alunoRoutes from "./routes/aluno.routes.js";
import fotoRoutes from "./routes/foto.routes.js";

import cors from "cors";
import helmet from "helmet";

import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

import "./database/index.js";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    this.app.use(express.static(resolve(__dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app;
