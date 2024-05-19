import db from "@/lib/db";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, image } = await req.json();
  await db();
  await User.create({ name, email, image });
  return NextResponse.json({ name, email, image }, { status: 201 });
}

export async function GET() {
  await db();
  const users = await User.find();
  return NextResponse.json(users);
}
