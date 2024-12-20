import dotenv from "dotenv";
import { createServer } from "./frameworks/server/server";
import connectDB from "./frameworks/database/mongodb/connectDB";

dotenv.config();

const PORT: number = parseInt(process.env.PORT || "3000", 10);

const app = createServer();

app.listen(PORT, () => {
  const dbName: string =
    process.env.DBCONNECTION || "mongodb://localhost:27017/url-shortener";
  connectDB(dbName);
  console.log(`Server is running at http://localhost:${PORT}`);
});
