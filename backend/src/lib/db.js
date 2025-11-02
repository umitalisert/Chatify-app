import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV.MONGO_URI;
    if (!MONGO_URI) {
      console.error("MONGO_URI is not defined");
    }

    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("mongodb connected", conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};
