import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const user = { id, name: "Demo User" };
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await req.json();

  if (!body.name)
    return NextResponse.json({ error: "Name required" }, { status: 400 });

  return NextResponse.json({
    message: "User updated",
    id,
    data: body,
  });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  return NextResponse.json({
    message: "User deleted",
    id,
  });
}
