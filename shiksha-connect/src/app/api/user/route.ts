import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, total } = body;

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: { name },
      });

      if (total <= 0) {
        throw new Error("Invalid order total. Rolling back.");
      }

      const order = await tx.order.create({
        data: {
          total,
          userId: user.id,
        },
      });

      return { user, order };
    });

    return NextResponse.json({
      message: "Transaction successful",
      data: result,
    });
  } catch (error: any) {
    console.error("Transaction failed:", error);
    return NextResponse.json(
      { error: error.message || "Transaction failed" },
      { status: 400 }
    );
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

    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
