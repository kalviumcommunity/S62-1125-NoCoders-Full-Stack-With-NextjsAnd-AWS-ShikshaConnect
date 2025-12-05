import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: params.id },
      include: {
        modules: {
          include: {
            lessons: true,
          },
        },
      },
    });

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch course" }, { status: 500 });
  }
}
