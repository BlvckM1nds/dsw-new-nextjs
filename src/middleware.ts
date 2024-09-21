import { type NextRequest, NextResponse } from "next/server";

const isLoggedIn: boolean = true;

export function middleware(req: NextRequest): NextResponse {
  console.log(req);

  if (isLoggedIn) {
    return NextResponse.next();
  };

  return NextResponse.json({ message: "ga tembus" });
};

export const config = {
  matcher: ["/api/:path*"]
};