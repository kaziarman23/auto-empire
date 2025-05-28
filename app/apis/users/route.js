import { NextResponse } from "next/server";
import { connectDB } from "../../lib/ConnectDB";
import Car from "../../models/car.model";

export async function GET(request) {
  try {
    await connectDB();
    const cars = await Car.find({});
    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    console.error("Error fetching cars data:", error);
    return NextResponse.json(
      { message: "Failed to fetch cars" },
      { status: 500 },
    );
  }
}

export async function POST(request) {}

export async function PATCH(request) {}

export async function DELETE(request) {}
