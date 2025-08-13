import { NextResponse } from "next/server";
import connectDB from "@/app/database/connectDB";
import OrderList from "@/app/models/orderList.model";

// GET: Fetch all orders
export async function GET(request) {
  try {
    await connectDB();

    // querying the all cars
    const cars = await OrderList.find({});

    // sending a successfull response
    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    // sending an errorI response
    console.error("Error fetching cars data:", error);
    return NextResponse.json(
      { message: "Failed to fetch cars" },
      { status: 500 },
    );
  }
}

// POST: Create a orderList
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const {
      buyerName,
      buyerEmail,
      buyerId,
      brand,
      carName,
      modelName,
      price,
      image,
      paymentStatus,
      orderStatus,
      transactionId,
    } = body;

    // car property validation
    if (
      !buyerName ||
      !buyerEmail ||
      !buyerId ||
      !brand ||
      !carName ||
      !modelName ||
      !price ||
      !image ||
      !paymentStatus ||
      !orderStatus ||
      !transactionId
    ) {
      return NextResponse.json(
        { message: "Missing required order data fields" },
        { status: 400 },
      );
    }

    const newOrderList = await OrderList.create({
      buyerName,
      buyerEmail,
      buyerId,
      brand,
      carName,
      modelName,
      price,
      image,
      paymentStatus,
      orderStatus,
      transactionId,
    });

    console.log(newOrderList);
    // sending a successfull response
    return NextResponse.json(newOrderList, { status: 201 });
  } catch (error) {
    // sending an error response
    console.error("Error creating a OrderList data:", error);
    return NextResponse.json(
      { message: "Failed to create OrderList" },
      { status: 500 },
    );
  }
}
