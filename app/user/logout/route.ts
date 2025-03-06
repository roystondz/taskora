import { NextResponse } from "next/server";

export async function POST(req:Request){
    const response = NextResponse.redirect(new URL("/user/login",req.url));
    response.cookies.set("token","");
    return response;
}