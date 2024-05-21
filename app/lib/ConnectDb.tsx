import mongoose from "mongoose";
export default async function ConnectDataBase(): Promise<void> {
  try {
    const key = process.env.MONGO_URI;
    if (!key) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }
    const connect = await mongoose.connect(key);
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
