import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req:Request){
    try{
        const {name,email,password} = await req.json();
    if(!email||!password){
        return NextResponse.json({message:"Email and password are required"},{status:400});
    }

    const hashedPassword = await bcrypt.hashSync(password,10);

    const user = await prisma.user.create({
        data:{
            name,
            email,
            password:hashedPassword,
        },
    });

    const secret = process.env.JWT_SECRET || "";
    if(!secret){
        throw new Error("JWT_SECRET is not defined");
    }
    const token = jwt.sign({userId:user.id},secret,{expiresIn:"1h"});
    const response =  NextResponse.json({token},{status:200});
    response.cookies.set("token",token,{httpOnly:true});
    return response;
    
    }catch(error){
        return NextResponse.json({message:"An Error occurred",error},{status:500});
    }

}