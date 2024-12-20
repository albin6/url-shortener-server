import { NextFunction, Request, Response } from "express";
import { serverError } from "../statusAndMessage/status";
import { serverErrorMessage } from "../statusAndMessage/message";

const errorHandler = (err: Error, req: Request, res: Response) => {
  console.error(err.message);
  res.status(serverError).json({
    success: false,
    message: err.message || serverErrorMessage,
  });
};

export default errorHandler;
