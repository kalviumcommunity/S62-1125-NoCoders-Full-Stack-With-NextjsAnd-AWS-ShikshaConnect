import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { sendSuccess, sendError } from "@/libs/responseHandler";
import { ERROR_CODES } from "@/libs/errorCodes";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, total, email } = body;

    if (!name) {
      return sendError("Missing required field: name", ERROR_CODES.VALIDATION_ERROR, 400);
    }

    if (!email) {
      return sendError("Missing required field: email", ERROR_CODES.VALIDATION_ERROR, 400);
    }

    if (total === undefined || total === null) {
      return sendError("Missing required field: total", ERROR_CODES.VALIDATION_ERROR, 400);
    }

    if (total <= 0) {
      return sendError("Invalid order total. Total must be greater than 0", ERROR_CODES.VALIDATION_ERROR, 400);
    }

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: { name, email },
      });

      const order = await (tx as any).order.create({
        data: {
          total,
          userId: user.id,
        },
      });

      return { user, order };
    });

    return sendSuccess(result, "Transaction successful", 201);
  } catch (error) {
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
