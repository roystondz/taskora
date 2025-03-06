import { prisma } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

async function POST(req:NextRequest){
    const userId = req.headers.get("x-user-id");
    console.log("User Id :",userId);    
    if(!userId){
        return NextResponse.json({message:"Unauthorized"},{status:401});
    }
    try{
        const { title, description } = await req.json();
    const task = await prisma.task.create({
        data:{
            title,
            description,
            userid:userId,
        }
    });
    return NextResponse.json(task,{status:200});
    }catch(error){
        return NextResponse.json({message:"An Error occurred",error},{status:500});
    }
    
}

export default POST;
