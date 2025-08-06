import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  console.log("❌ Payment Failed:", data);

  return NextResponse.redirect("http://localhost:3000/payment-fail", 302);
}
