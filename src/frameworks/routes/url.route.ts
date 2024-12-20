import express from "express";
import { Route } from "../types/serverTypes";

const router: Route = express.Router();

router.post("/shorten");

export default router;
