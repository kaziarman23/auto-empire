import { NextResponse } from "next/server";
import SSLCommerzPayment from "sslcommerz";

// credentials
const store_id = process.env.NEXT_PUBLIC_StoreID;
const store_passwd = process.env.NEXT_PUBLIC_StorePassword;
const is_live = false; // true for production

export async function POST(request) {
  const data = await request.json();

  const {
    price,
    buyerName,
    buyerEmail,
    carName,
    modelName,
    orderStatus,
    paymentStatus,
  } = data;

  const tran_id = "TXN_" + Math.random().toString(36).substring(2, 15);

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

  const post_data = {
    total_price: price,
    currency: "BDT",
    tran_id,
    success_url: "http://localhost:3000/api/ssl-payment/success",
    fail_url: "http://localhost:3000/api/ssl-payment/fail",
    cancel_url: "http://localhost:3000/api/ssl-payment/cancel",
    ipn_url: "http://localhost:3000/api/ssl-payment/ipn",
    carName,
    modelName,
    orderStatus,
    paymentStatus,
    cus_name: buyerName,
    cus_email: buyerEmail,
    cus_add1: "Dhaka",
    cus_phone: "01711111111",
    shipping_method: "NO",
    product_category: "general",
    product_profile: "general",
  };

  try {
    const apiResponse = await sslcz.init(post_data);
    return NextResponse.json({ GatewayPageURL: apiResponse.GatewayPageURL });
  } catch (err) {
    return NextResponse.json({ error: "SSLCommerz Error", detail: err });
  }
}
