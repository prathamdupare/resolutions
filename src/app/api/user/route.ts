import db from "@/db/db";
import User from "@/db/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email } = await req.json();
  await db();
  await User.create({ name, email });
  return NextResponse.json({ name, email }, { status: 201 });
}

export async function GET() {
  await db();
  const users = await User.find();
  return NextResponse.json(users);
}
