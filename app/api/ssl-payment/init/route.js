import { NextResponse } from "next/server";
import { SslCommerzPayment } from "sslcommerz";

// credentials
const store_id = process.env.NEXT_PUBLIC_StoreID;
const store_passwd = process.env.NEXT_PUBLIC_StorePassword;
const is_live = false; // true for production

export async function POST(request) {
  const data = await request.json();

  const {
    buyerId,
    buyerName,
    buyerEmail,
    carName,
    modelName,
    price,
    orderStatus,
    paymentStatus,
  } = data;

  const tran_id = "TXN_" + Math.random().toString(36).substring(2, 15);

  const sslcz = new SslCommerzPayment(store_id, store_passwd, is_live);

  const post_data = {
    tran_id,
    carName,
    modelName,
    buyerId,
    buyerName,
    buyerEmail,
    price,
    currency: "BDT",
    orderStatus,
    paymentStatus,
    shipping_method: "NO",
    product_category: "general",
    product_profile: "general",
    success_url: "http://localhost:3000/api/ssl-payment/success",
    fail_url: "http://localhost:3000/api/ssl-payment/fail",
    cancel_url: "http://localhost:3000/api/ssl-payment/cancel",
    ipn_url: "http://localhost:3000/api/ssl-payment/ipn",
  };

  try {
    const apiResponse = await sslcz.init(post_data);
    return NextResponse.json({
      GatewayPageURL: apiResponse.GatewayPageURL,
    }).status(200);
  } catch (err) {
    return NextResponse.json({ error: "SSLCommerz Error", detail: err }).status(
      500,
    );
  }
}
