import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  console.log("✅ Payment Success:", data);

  // Example: Save to DB or verify with validation API
  // const val_id = data.val_id;

  return NextResponse.redirect("http://localhost:3000/payment-success", 302);
}
