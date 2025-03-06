"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";



export default function DashBoard(){

    const router = useRouter();
    const [isOpen,setIsOpen] = useState(false);

    const [taskTitle,setTaskTitle]=useState("");
    const [taskDescription,setTaskDescription]=useState("");
    interface Task {
        id: number;
        title: string;
        description: string;
    }

    const [task, setTask] = useState<Task[]>([]);
    

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch("/api/task/getall");
            if(response.ok){
                const data = await response.json();
                setTask(data);
            }
        }
        fetchData();
    },[]);
    


    async function handleSubmit (event:React.FormEvent){
        event.preventDefault();

        const response = await fetch("/api/task/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                title:taskTitle,
                description:taskDescription,
            }),
        });

        if(response.ok){
            const data = await response.json();
            console.log(data);
            setIsOpen(false);
            router.push("/user/dashboard");
        }else{
            alert("An error occurred");
            setIsOpen(false);
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
                            <li><Link href="/user/todo/pending">Pending</Link></li>
                            <li><Link href="/user/todo/completed">Completed</Link></li>
                            <li>Logout</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="body flex flex-col gap-5">
                <div className="">
 
                </div>
                <div className="progress-bar shadow-lg m-10">
                        <div className="progress-ring flex flex-col p-10">
                            <h1 className="text-2xl">Progress</h1>
                        </div>
                </div>
                <div className="action m-10">
                        <button className="px-4 py-2 bg-purple-200 rounded-lg" onClick={() => setIsOpen(true)}>
                            Add New Task
                        </button>
                </div>
                <div className="task-body flex flex-col">
                    {task.map((task) => (
                        <div className="task m-10 flex flex-col gap-3" key={task.id}>
                        <div className="task p-4 flex flex-row justify-between shadow-sm">
                            <div className="flex flex-col">
                                <h1 className="font-bold">{task.title}</h1>
                                <h5>{task.description}</h5>
                            </div>
                            <div className="flex flex-row gap-3 ">
                                <h5 className="shadow-sm bg-red-200 rounded-lg px-4 py-3">
                                    Student
                                </h5>
                                
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-purple-400 bg-opacity-20">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl mb-4">Add New Task</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Task Title</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                                    onChange={(event)=>setTaskTitle(event.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    onChange={(event)=>setTaskDescription(event.target.value)}
                                    ></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Tags</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" 
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button type="button" className="px-4 py-2 bg-gray-300 rounded-lg mr-2" onClick={() => setIsOpen(false)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded-lg">
                                        Add Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}