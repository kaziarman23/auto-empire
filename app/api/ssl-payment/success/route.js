import { NextResponse } from "next/server";
import Order from "@/app/models/orderList.model";
import transactionList from "../../../models/transactionList.model";

export async function POST(request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  console.log("✅ Payment Success:", data);

  const { tran_id, amount, card_issuer, currency } = data;

  // Find the order by transaction ID
  const order = await Order.findOne({ transactionId: tran_id });

  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  // Update the order status
  order.paymentStatus = "Paid";
  order.orderStatus = "Processing";
  await order.save();

  // Create a new transaction record
  await transactionList.create({
    userId: order.buyerId,
    buyerName: order.buyerName,
    buyerEmail: order.buyerEmail,
    transactionId: tran_id,
    paymentStatus: "Paid",
    orderStatus: "Processing",
    brand: order.brand,
    carName: order.carName,
    modelName: order.modelName,
    amount,
    card_issuer,
    currency,
  });

  return NextResponse.redirect("http://localhost:3000/payments/success", 302);
}
