

export default function DashBoard(){
    return(
        <div className="h-screen bg-purple-50">
            <div className="navbar flex flex-row justify-between bg-purple-300">
                <div className="logo text-5xl p-6">
                    <h1>Taskora</h1>
                </div>
                <div className="flex flex-row">
                    <nav>
                        <ul className="flex flex-row p-8 text-2xl gap-5">
                            <li>Pending</li>
                            <li>Completed</li>
                            <li>Logout</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="body flex flex-col gap-5">
                <div className="">

                </div>
                <div className="task-body flex flex-col">
                    <div className="action">
                        <button className="px-4 py-2 bg-purple-200 rounded-lg m-10">
                            Add New Task
                        </button>
                    </div>
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

                        <div className="task p-4 flex flex-row justify-between shadow-sm">
                            <div className="flex flex-col">
                                <h1 className="font-bold">Task</h1>
                                <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, similique.</h5>
                            </div>
                            <div className="flex flex-col">
                                <h5></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}