import dotenv from "dotenv";

function config() {
  dotenv.config();
  console.log("environment variables loaded");
}

config();

export const serverConfig = {
  PORT: process.env.PORT || 4000,
  DB_URL: process.env.MONGO_URL,
  DB_NAME: process.env.DB_NAME,
};
