import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bycrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req:Request){
    try{
        const {name,email,password} = await req.json();
    if(!email||!password){
        return NextResponse.json({message:"Email and password are required"},{status:400});
    }

    const hashedPassword = await bycrypt.hash(password,10);

    const user = await prisma.user.create({
        data:{
            name,
            email,
            password:hashedPassword,
        },
    });

    return NextResponse.json({message:"User created successfully",user},{status:201});

    }catch(error){
        return NextResponse.json({message:"An error occured",error},{status:500});
    }

}