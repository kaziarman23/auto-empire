import { NextResponse } from "next/server";
import connectDB from "@/app/database/connectDB";
import Car from "@/app/models/car.model";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "Car ID is required" },
        { status: 400 },
      );
    }

    const car = await Car.findById(id);

    if (!car) {
      return NextResponse.json({ message: "Car not found" }, { status: 404 });
    }

    return NextResponse.json(car, { status: 200 });
  } catch (error) {
    console.error("Error fetching car:", error);
    return NextResponse.json(
      { message: "Failed to fetch car" },
      { status: 500 },
    );
  }
}
