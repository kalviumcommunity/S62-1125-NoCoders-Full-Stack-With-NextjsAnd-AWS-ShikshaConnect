import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { sendSuccess, sendError } from "@/libs/responseHandler";
import { ERROR_CODES } from "@/libs/errorCodes";

export async function POST() {
  try {
    await prisma.user.createMany({
      data: [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
        { name: "Charlie", email: "charlie@example.com" },
      ],
    });

    return sendSuccess(null, "Batch insert successful", 201);
  } catch (error) {
    console.error("Batch insert failed:", error);
    return sendError("Batch insert failed", ERROR_CODES.BATCH_INSERT_FAILED, 500, error);
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 5;

  const skip = (page - 1) * limit;

  try {
    const users = await prisma.user.findMany({
      skip,
      take: limit,
      orderBy: { id: "desc" },
      select: { id: true, name: true, email: true },
    });

    const paginationData = {
      users,
      pagination: {
        page,
        limit,
        total: users.length,
      },
    };

    return sendSuccess(paginationData, "Users fetched successfully");
  } catch (error) {
    console.error("Pagination fetch failed:", error);
    return sendError("Pagination fetch failed", ERROR_CODES.PAGINATION_FAILED, 500, error);
  }
}
