import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  console.log("📩 IPN Received:", data);

  // You can verify the transaction here using `val_id`
  // Example validation API call:
  // const valId = data.val_id;

  // await fetch(`https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${valId}&store_id=XXX&store_passwd=XXX&v=1&format=json`);

  return NextResponse.json({ status: "IPN received", data });
}
