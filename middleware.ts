import { NextResponse,NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req:NextRequest){
    const token = req.cookies.get('token')?.value;  
    if(!token){
        return NextResponse.redirect("/user/login");
    }
    try{
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not defined");
        }
        jwt.verify(token, secret);
        return NextResponse.next();
    }catch(error){
        console.log(error);
        return NextResponse.redirect("/user/login");
    }
}

export const config = {
    matcher: ["/user/dashboard/:path*", "/user/todo/:path*"], // Protect these routes
  };
  