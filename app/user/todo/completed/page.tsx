"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";




export default function DashBoard(){

    const router = useRouter();

    interface Task {
        id: number;
        title: string;
        description: string;
    }

    const [task, setTask] = useState<Task[]>([]);
    

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch("/api/task/getcompleted");
            if(response.ok){
                const data = await response.json();
                setTask(data);
            }
        }
        fetchData();
    },[]);
    


    async function handleClick(){
        const response = await fetch("/api/auth/logout");
        if(response.ok){
            router.push("/user/login");
        }else{
            alert("An error occurred");
        }
    }

    async function deleteTask(taskId: number) {
        const response = await fetch("/api/task/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                taskId: taskId,
            }),
        });
        if(response.ok){
            const data = await response.json();
            console.log(data);
            window.location.reload();
        }else{
            alert("An error occurred");
        }
        
    }
    

    return(
        <div className="h-screen bg-purple-50">
            <div className="navbar flex flex-row justify-between bg-purple-300">
                <div className="logo text-5xl p-6">
                    <h1><Link href="/user/dashboard">Taskora</Link></h1>
                </div>
                <div className="flex flex-row">
                    <nav>
                        <ul className="flex flex-row p-8 text-2xl gap-5">
                            <li><Link href="/user/dashboard">Dashboard</Link></li>
                            <li><Link href="/user/todo/completed">Completed</Link></li>
                            <li><button onClick={handleClick} className="">Logout</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="body flex flex-col gap-5">
                <div className="">
 
                </div>
                <div className="progress-bar shadow-lg mt-0 ml-18 mr-18">
                        <div className="progress-ring flex flex-col p-10">
                            <h1 className="text-2xl">Progress</h1>
                        </div>
                </div>
               
                <div className="task-body flex flex-col">
                    {task.map((task) => (
                    <div className="task mt-2 ml-18 mr-18 mb-2 flex flex-col gap-3" key={task.id}>
                        <div className="task p-4 flex flex-row justify-between shadow-sm">
                            <div className="flex flex-col">
                                <h1 className="font-bold">{task.title}</h1>
                                <h5>{task.description}</h5>
                            </div>
                            <div className="gap-2 flex">
                                <h1 className="px-4 py-3 bg-green-300 rounded-lg justify-center items-center">Completed</h1>
                                <button className="px-4 py-2 bg-red-200 rounded-lg" onClick={() => deleteTask(task.id)}>
                                    Trash
                                </button>
                                
                            </div>  
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}