import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req:Request){
    try{
        const {email,password} = await req.json();
    const user = await prisma.user.findUnique({
        email
    })
    if(user && bcrypt.compareSync(password,user.password)){
        return NextResponse.json({message:"User is logged in",user},{status:200})
    }else{
        return NextResponse.json({message:"Invalid credentials"},{status:401})
    }
    }catch(error){
        return NextResponse.json({message:"Something went wrong",error},{status:500})
    }
}
