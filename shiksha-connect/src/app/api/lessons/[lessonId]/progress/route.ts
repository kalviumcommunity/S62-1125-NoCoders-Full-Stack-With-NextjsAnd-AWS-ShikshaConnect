import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const { userId, completed } = body;

    const updated = await prisma.studentProgress.upsert({
      where: {
        userId_lessonId: {
          userId,
          lessonId: params.id,
        },
      },
      update: { completed },
      create: {
        userId,
        lessonId: params.id,
        completed,
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update progress" }, { status: 500 });
  }
}
