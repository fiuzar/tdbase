import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function proxy(request) {
  const session = await auth(); // Get the session for the current request
  const pathname = request.nextUrl.pathname;

  // Protect /app routes
  if (pathname.startsWith("/app")) {
    if (!session) {
      // Redirect unauthenticated users to /login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Optionally prevent logged-in users from accessing login/register again
  if ((pathname === "/login" || pathname === "/register") && session) {
    return NextResponse.redirect(new URL("/app", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*", "/login", "/register"],
};
