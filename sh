import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { sendSuccess, sendError } from "@/libs/responseHandler";
import { ERROR_CODES } from "@/libs/errorCodes";
import { userSchema } from "@/libs/schemas/userSchema";
import { handleZodError } from "@/libs/validationHandler";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input using Zod schema
    const validatedData = userSchema.parse(body);

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: { 
          name: validatedData.name, 
          email: validatedData.email 
        },
      });

      const order = await (tx as any).order.create({
        data: {
          total: validatedData.total,
          userId: user.id,
        },
      });

      return { user, order };
    });

    return sendSuccess(result, "Transaction successful", 201);
  } catch (error: any) {
    if (error.name === "ZodError") {
      // Handle Zod validation errors
      const validationErrors = handleZodError(error);
      return NextResponse.json(validationErrors, { status: 400 });
    }
    
    console.error("Transaction failed:", error);
    return sendError("Transaction failed", ERROR_CODES.TRANSACTION_FAILED, 500, error);
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
      orderBy: { id: "desc" },
    });

    return sendSuccess(users, "Users fetched successfully");
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return sendError("Failed to fetch users", ERROR_CODES.DATABASE_FAILURE, 500, error);
  }
}
