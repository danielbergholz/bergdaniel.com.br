import { type NextRequest, NextResponse } from "next/server"

export function proxy(req: NextRequest): NextResponse {
  if (
    process.env.NODE_ENV === "development" &&
    req.nextUrl.pathname.startsWith("/tidewave")
  ) {
    return NextResponse.rewrite(new URL("/api/tidewave", req.url))
  }

  // Here you could add your own logic or different middlewares.
  return NextResponse.next()
}
