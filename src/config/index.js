import dotenv from "dotenv";

dotenv.config({ quiet: true });

const config = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI: process.env.MONGODB_URI,
  DB_NAME: process.env.DB_NAME,
  CLOUD_CONVERT_API_KEY: process.env.CLOUD_CONVERT_API_KEY,
};

export default config;
