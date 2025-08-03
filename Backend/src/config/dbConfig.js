import mongoose from "mongoose";
import { serverConfig } from "./serverConfig.js";

const connectDB = () => {
  try {
    mongoose.connect(serverConfig.DB_URL, {
      dbName: serverConfig.DB_NAME,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to database", error.message);
  }
};

export default connectDB;
