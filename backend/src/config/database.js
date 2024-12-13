import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URI_DB);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Detener la aplicación si falla la conexión
  }
};

export default connectDB;