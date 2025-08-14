import mongoose from "mongoose";

const orderListSchema = new mongoose.Schema(
  {
    buyerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    buyerName: {
      type: String,
      required: true,
    },
    buyerEmail: {
      type: String,
      required: true,
    },
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
    image: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Unpaid", "Failed"],
      default: "Unpaid",
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Processing", "Delivered", "Failed", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.orderList ||
  mongoose.model("orderList", orderListSchema);
