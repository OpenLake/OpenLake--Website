import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") ?? req.headers.get("referer");
  if (origin) {
    const expected = new URL(process.env.NEXT_PUBLIC_APP_URL ?? req.nextUrl.origin).origin;
    let actualOrigin: string | null = null;
    try {
      actualOrigin = new URL(origin).origin;
    } catch {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    if (actualOrigin !== expected) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("hc_access_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
  return response;
}
