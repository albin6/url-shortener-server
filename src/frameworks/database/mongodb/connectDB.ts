import mongoose from "mongoose";

function connectDB(dbName: string) {
  mongoose
    .connect(dbName)
    .then(() => {
      console.log(`connected to database`);
    })
    .catch((err) => {
      console.error(`Error connecting to MongoDB: ${err.message}`);
      process.exit(1);
    });
}

export default connectDB;
