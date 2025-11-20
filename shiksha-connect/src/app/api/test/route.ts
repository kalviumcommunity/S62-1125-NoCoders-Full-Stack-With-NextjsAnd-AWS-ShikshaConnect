import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function POST() {
  try {
    await prisma.user.createMany({
      data: [
        { name: "Alice" },
        { name: "Bob" },
        { name: "Charlie" },
      ],
    });

    return NextResponse.json({ message: "Batch insert successful" });
  } catch (error) {
    return NextResponse.json(
      { error: "Batch insert failed" },
      { status: 500 }
    );
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
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true },
    });

    return NextResponse.json({
      page,
      limit,
      users,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Pagination fetch failed" },
      { status: 500 }
    );
  }
}
