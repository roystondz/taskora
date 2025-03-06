import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";


export async function POST(req:Request){
    try{
        const {taskId} = await req.json();
    if(!taskId){
        throw new Error("Task ID is required");
    }
    const task = await prisma.task.delete({
        where:{
            id:taskId,
        }
    });
    return NextResponse.json({message:"Task Deleted Successfully",task});
    }catch(error){
        return NextResponse.json({message:"An Error occurred while deleting",error},{status:500});
    }
}