import { prisma } from "@/prisma/db";
import { NextRequest,NextResponse } from "next/server";


 export async function GET(req:NextRequest){
    try{
        const userId = req.headers.get("x-user-id");

    if(!userId){
        return {status:401,body:{message:"Unauthorized"}};
    }

    const tasks = await prisma.task.findMany({
        where:{
            userid:userId,
            completed:true,
        }
    })
        return NextResponse.json(tasks,{status:200});
    }catch(error){
        return NextResponse.json({message:"An Error occurred",error},{status:500});
    }

    
}