import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import User from "@/app/models/user.model";

// GET: Fetch all users
export async function GET() {
  try {
    await connectDB();

    const users = await User.find({});

    // sending a successfull response
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 },
    );
  }
}

// POST: Create a new user
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const { name, email, password, image, role } = body;

    // Validate required fields
    if (!name || !email || !password || !image) {
      return NextResponse.json(
        { message: "Missing required user fields" },
        { status: 400 },
      );
    }

    const newUser = await User.create({
      name,
      email,
      password,
      image,
      role, // defaults to "user" if not provided
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 },
    );
  }
}

// PATCH: Update a user by ID
export async function PATCH(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { message: "User ID not found in the body" },
        { status: 400 },
      );
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { message: "Failed to update user" },
      { status: 500 },
    );
  }
}

// DELETE: Delete a user by ID
export async function DELETE(request) {
  try {
    await connectDB();
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: "User ID not found in the body" },
        { status: 400 },
      );
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { message: "Failed to delete user" },
      { status: 500 },
    );
  }
}
