import { NextResponse,NextRequest } from "next/server";
import { jwtVerify } from "jose";



export async function middleware(req:NextRequest){
    const token = req.cookies.get('token')?.value;  
    if(!token){
        return NextResponse.redirect(new URL("/user/login",req.url));
    }
    try{
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not defined");
        }
        await jwtVerify(token, new TextEncoder().encode(secret));
        return NextResponse.next();
    }catch(error){
        console.log(error);
        return NextResponse.redirect(new URL("/user/login",req.url));
    }
}

export const config = {
    matcher: ["/user/dashboard/:path*", "/user/todo/:path*"], // Protect these routes
    
};
  