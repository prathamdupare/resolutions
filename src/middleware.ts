/*
 * This file is used to configure the middleware.
 * Learn more: https://next-auth.js.org/configuration/nextjs#middleware
 *
 * The `matcher` property is used to configure the matching of paths to apply the middleware to.
 * The default setting is to match all paths.
 *
 * Feel free to remove this file if you do not need to use it.
 */

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|static|images|animations|brands|favicon.ico|$).*)",
  ],
};
