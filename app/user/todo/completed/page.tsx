import Link from "next/link";

export default function Completed(){
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
        
            
        <div>
            <h1>this is the h2</h1>
        </div>
        </div>
    );
}