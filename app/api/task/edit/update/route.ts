import { prisma } from "@/prisma/db";
import { NextResponse } from "next/server";


export async function POST(req:Request){
    try{
        const {taskId,title,description} = await req.json();
        console.log("This is in edit",description);
        console.log("This is in edit",title);
        console.log("This is in edit",taskId);
        const idd =Number(taskId);
    if(!taskId){
        return NextResponse.json({message:"Task ID is required"},{status:400});
    }
    if(!title){
        return NextResponse.json({message:"Title is required"},{status:400});
    }
    if(!description){
        return NextResponse.json({message:"Description is required"},{status:400});
    }

    const existingTask = await prisma.task.findUnique({
        where: { id: idd }
    });

    if (!existingTask) {
        return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    const task = await prisma.task.update({
        where:{
            id:idd,
        },
        data:{
            title,
            description,
        }
    });
    return NextResponse.json({message:"Task Updated Successfully",task});
    }catch(error){
        return NextResponse.json({message:"An Error occurred while updating",error},{status:500});
    }  

}