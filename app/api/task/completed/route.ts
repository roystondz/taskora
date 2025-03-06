import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        const {taskId} = await req.json();
    if(!taskId){
        throw new Error("Task ID is required");
    }
    const task = await prisma.task.update({
        where:{
            id:taskId,
        },
        data:{
            completed:true,
        }
    });
    return NextResponse.json({message:"Task Completed Successfully",task});
    }catch(error){
        return NextResponse.json({message:"An Error occurred while completing",error},{status:500});
    }
}