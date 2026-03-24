import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
const privateRoute = ["/booking", "/my-booking"];
export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log(token);
  const isAuthenticated = Boolean(token);
  const reqPath = req.nextUrl.pathname;
  const isPrivateReq = privateRoute.some((route) => reqPath.startsWith(route));
  console.log({ isPrivateReq, isAuthenticated });
  if (!isAuthenticated && isPrivateReq) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${reqPath}`, req.url),
    );
  }
  //   console.log(req);
  //   console.log({ token, isPrivateReq, reqPath, isAuthenticated });
  return NextResponse.next();
}

export const config = {
  matcher: ["/booking/:path*", "/my-booking/:path*"],
};

// role and dashoard checking ekhanei korbo
