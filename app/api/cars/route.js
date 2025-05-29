import { NextResponse } from "next/server";
import Car from "@/app/models/car.model";
import connectDB from "@/app/lib/connectDB";

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

export async function POST(request) {
  try {
    await connectDB();

    const newCar = await Car.create({
      brand: "Mercedes-Benz",
      carName: "S-Class",
      modelName: "S 580 4MATIC",
      price: 55000000,
      releaseYear: 2023,
      stockAvailable: 3,
      image:
        "https://i.pinimg.com/736x/8e/4b/1c/8e4b1c4bde26596bdbc5e856d4ad1e96.jpg",
    });

    console.log("working: ", newCar);

    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    console.error("Error creating hardcoded car:", error);
    return NextResponse.json(
      { message: "Failed to insert car" },
      { status: 500 },
    );
  }
}

export async function PATCH(request) {}

export async function DELETE(request) {}
