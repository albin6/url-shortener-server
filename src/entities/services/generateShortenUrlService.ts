export function generateShortenUrlService(originalUrl: string): string {
  const length = 5;
  const timestamp = Date.now().toString(36);
  const randomPart = Array.from({ length }, () =>
    originalUrl.charAt(Math.floor(Math.random() * originalUrl.length))
  ).join("");
  console.log(timestamp + randomPart);
  return process.env.CORS_ALLOWED_ORIGIN + "/" + timestamp + randomPart;
}
