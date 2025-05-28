import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    carName: {
      type: String,
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    stockAvailable: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Car || mongoose.model("Car", carSchema);
