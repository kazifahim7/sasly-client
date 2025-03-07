import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./service/Auth";


type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
    user: [/^\/dashboard\/user/, /^\/product\/[a-f0-9]{24}$/, /^\/product\/cart\/[a-f0-9]{24}$/]

};

export const middleware = async (request: NextRequest) => {
    const { pathname } = request.nextUrl;
    console.log(pathname)

    const userInfo = await getCurrentUser();

    if (!userInfo) {
        if (authRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(
                new URL(
                    `https://assignment-6-client-seven.vercel.app/login?redirectPath=${pathname}`,
                    request.url
                )
            );
        }
    }

    if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
        const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
        }
    }

    return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
    matcher: [
        "/dashboard",
        "/dashboard/user/:path*",
        "/product/cart/:path*",
        "/product/:id"
      
    ],
};
