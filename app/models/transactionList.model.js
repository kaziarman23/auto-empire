import mongoose from "mongoose";

const transactionListSchema = new mongoose.Schema(
  {
    userId: {
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
    transactionId: {
      type: String,
      required: true,
      unique: true,
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
    amount: {
      type: Number,
      required: false,
    },
    card_issuer: {
      type: String,
      required: false,
    },
    currency: {
      type: String,
      required: false,
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
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.transactionList ||
  mongoose.model("transactionList", transactionListSchema);
