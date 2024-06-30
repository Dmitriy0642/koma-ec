import { NextResponse, type NextRequest } from "next/server";
import { generateRandomId } from "./app/util/RandomId";
export async function middleware(req: NextRequest) {
  const response = NextResponse.next();

  const userId = req.cookies.get("userId");

  if (!userId) {
    const expiresDate = new Date();
    expiresDate.setFullYear(expiresDate.getFullYear() + 1);
    response.cookies.set("userId", generateRandomId(), {
      expires: expiresDate,
    });
  }
  return response;
}

export const config = {
  matcher: "/:path*",
};
