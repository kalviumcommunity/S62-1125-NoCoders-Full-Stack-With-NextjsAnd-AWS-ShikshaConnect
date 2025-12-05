import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const lesson = await prisma.lesson.findUnique({
      where: { id: params.id },
      include: {
        resources: true,
        module: {
          include: {
            course: true,
          },
        },
      },
    });

    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
    }

    return NextResponse.json(lesson);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch lesson" }, { status: 500 });
  }
}
