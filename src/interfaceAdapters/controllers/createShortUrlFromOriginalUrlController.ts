import AsyncHandler from "express-async-handler";
import { Req, Res } from "../../frameworks/types/serverTypes";
import { insertOriginalUrlAndShortenUrl } from "../repositories/UrlRepository";
import { badReq, success } from "../../entities/utils/statusAndMessage/status";
import { invalidUrl } from "../../entities/utils/statusAndMessage/message";

export const createShortUrlFromOriginalUrlUseCase = AsyncHandler(
  async (req: Req, res: Res) => {
    const originalUrl = req.query.originalUrl;
    if (typeof originalUrl !== "string") {
      res.status(badReq).json({ success: false, message: invalidUrl });
      return;
    }
    console.log("Original url :", originalUrl);
    const shortenUrl: string = generateShortenUrlService(originalUrl);
    await insertOriginalUrlAndShortenUrl(originalUrl, shortenUrl);

    res.status(success).json({ success: true });
  }
);
