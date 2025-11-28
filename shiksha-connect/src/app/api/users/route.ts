import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "../../../libs/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export async function GET(req: Request) {
  try {
    // Get the authorization header
    const authHeader = req.headers.get("authorization");
    
    // Check if token is provided
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { success: false, message: "Token missing or invalid format" },
        { status: 401 }
      );
    }

    // Extract the token
    const token = authHeader.split(" ")[1];

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number; email: string; name: string };

    // Get user details from database
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: "Protected data accessed successfully", 
      user,
      tokenInfo: {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name
      }
    });
  } catch (error) {
    console.error("Protected route error:", error);
    
    if (error instanceof jwt.JsonWebTokenError) {
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 403 }
      );
    }
    
    if (error instanceof jwt.TokenExpiredError) {
      return NextResponse.json(
        { success: false, message: "Token expired" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Authentication failed", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 403 }
    );
  }
}
