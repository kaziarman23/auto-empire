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
    total_amount: Number(price),
    currency: "BDT",
    tran_id,
    success_url: "http://localhost:3000/api/ssl-payment/success",
    fail_url: "http://localhost:3000/api/ssl-payment/fail",
    cancel_url: "http://localhost:3000/api/ssl-payment/cancel",
    ipn_url: "http://localhost:3000/api/ssl-payment/ipn",
    shipping_method: "NO",
    product_name: carName,
    product_category: "general",
    product_profile: "general",
    cus_name: buyerName,
    cus_email: buyerEmail,
    cus_add1: "Dhaka",
    cus_city: "Dhaka",
    cus_phone: "016123456789",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    buyerId,
    modelName,
    orderStatus,
    paymentStatus,
  };
  try {
    const apiResponse = await sslcz.init(post_data);
    console.log("working!");
    console.log("GatewayPageURL: ", apiResponse);
    return NextResponse.json(
      { GatewayPageURL: apiResponse.GatewayPageURL },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { error: "SSLCommerz Error", detail: err },
      { status: 500 },
    );
  }
}
