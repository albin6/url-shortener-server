import urlModel from "../../frameworks/database/models/url.model";

export const insertOriginalUrlAndShortenUrl = async (
  originalUrl: string,
  shortUrl: string
): Promise<any> => {
  return await urlModel.create({
    originalUrl,
    shortUrl,
    maxUsageLimit: 1000,
  });
};
