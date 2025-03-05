"use client"

import { useState } from "react";
import Link from "next/link";

export default function DashBoard(){

    const [isOpen,setIsOpen] = useState(false);



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
                    <div className="task m-10 flex flex-col gap-3">
                        <div className="task p-4 flex flex-row justify-between shadow-sm">
                            <div className="flex flex-col">
                                <h1 className="font-bold">Task</h1>
                                <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, similique.</h5>
                            </div>
                            <div className="flex flex-row gap-3 ">
                                <h5 className="shadow-sm bg-red-200 rounded-lg px-4 py-3">
                                    Student
                                </h5>
                                <h5 className="shadow-sm bg-red-200 rounded-lg px-4 py-3">
                                    Student
                                </h5>
                                <h5 className="shadow-sm bg-red-200 rounded-lg px-4 py-3">
                                    Student
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-purple-400 bg-opacity-20">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl mb-4">Add New Task</h2>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Task Title</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Tags</label>
                                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
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