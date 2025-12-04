import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/libs/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export async function GET(req: Request) {
  try {
    // 🔐 1. Get Authorization header
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: Token missing" },
        { status: 401 }
      );
    }

    // 🔍 2. Extract token
    const token = authHeader.split(" ")[1];

    // 🧪 3. Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      email: string;
      name: string;
    };

    // 👤 4. Fetch authenticated user
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User no longer exists" },
        { status: 404 }
      );
    }

    // 🎉 5. Send user details
    return NextResponse.json({
      success: true,
      message: "Authenticated user fetched successfully",
      user,
    });
  } catch (error: any) {
    console.error("❌ /api/me error:", error);

    // Token expired
    if (error.name === "TokenExpiredError") {
      return NextResponse.json(
        { success: false, message: "Token expired" },
        { status: 401 }
      );
    }

    // Invalid token
    if (error.name === "JsonWebTokenError") {
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 403 }
      );
    }

    // Other errors
    return NextResponse.json(
      { success: false, message: "Authentication failed" },
      { status: 500 }
    );
  }
}
