import mongoose from "mongoose";

const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@knight-cluster.bypaq.mongodb.net/autoEmpire?retryWrites=true&w=majority&appName=knight-cluster`;

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Database is Already Connected");
      return;
    } else {
      await mongoose.connect(DB_URI);
      console.log("Database is Connected")
    }
  } catch (error) {
    console.log(error)
    console.log("Database is not Connected")
    process.exit(1)
  }
};
