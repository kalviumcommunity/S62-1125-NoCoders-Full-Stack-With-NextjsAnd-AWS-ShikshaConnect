import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    const data = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];

    const start = (page - 1) * limit;
    const paginated = data.slice(start, start + limit);

    return NextResponse.json({ page, limit, data: paginated });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.name)
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );

    return NextResponse.json(
      { message: "User created", data: body },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
