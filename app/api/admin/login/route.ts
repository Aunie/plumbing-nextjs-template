import { NextResponse } from "next/server";
import { adminUser } from "@/data/user";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (
    username === adminUser.username &&
    password === adminUser.password
  ) {
    const response = NextResponse.json({
      success: true,
      message: "Login Successful",
    });

    response.cookies.set("admin-token", "logged-in", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  }

  return NextResponse.json(
    {
      success: false,
      message: "Invalid Credentials",
    },
    { status: 401 }
  );
}