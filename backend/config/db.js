import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';


dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const app = express();
const { MONGO_URL, PORT } = process.env;

console.log(MONGO_URL);
console.log(PORT);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB is connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1); // Exits the process with an error
  }
};

export default connectDB;
3