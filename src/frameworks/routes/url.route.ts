import express from "express";
import { Route } from "../types/serverTypes";
import { createShortUrlFromOriginalUrlUseCase } from "../../interfaceAdapters/controllers/createShortUrlFromOriginalUrlController";

const router: Route = express.Router();

router.post("/shorten-url", createShortUrlFromOriginalUrlUseCase);

export default router;
