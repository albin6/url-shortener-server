import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import rateLimit from "express-rate-limit";
import errorHandler from "../../entities/utils/error/errorMiddleware";
import urlRouter from "../routes/url.route";

dotenv.config();

export function createServer() {
  const app: Application = express();

  app.use(helmet());

  app.use(cors());

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  });
  app.use(limiter);

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else {
    app.use(morgan("combined"));
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript with Express!");
  });

  app.use("/api/v_1", urlRouter);

  app.use(errorHandler);

  return app;
}
