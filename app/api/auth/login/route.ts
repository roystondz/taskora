import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import {PrismaClient} from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req:Request){
    try{
        const {email,password} = await req.json();
    const user = await prisma.user.findUnique({
        where:{
            email,
        }
    })

    const secret = process.env.JWT_SECRET;
    if(!secret){
        throw new Error("JWT_SECRET is not defined");
    }

    if(user && bcrypt.compareSync(password,user.password)){
        const token = jwt.sign({userId:user.id},secret,{expiresIn:"1h"});
    const response =  NextResponse.json({message:"User is logged in",token},{status:200});
        response.cookies.set("token",token,{httpOnly:true});
    return response;
    }else{
        return NextResponse.json({message:"Invalid credentials"},{status:401})
    }
    }catch(error){
        return NextResponse.json({message:"Something went wrong",error},{status:500})
    }
}
