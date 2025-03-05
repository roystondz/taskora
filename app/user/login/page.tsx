"use client"

import Link from "next/link";

import {useRouter} from "next/navigation";
import { useState } from "react";

export default function Login() {


    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event:React.FormEvent){
        event.preventDefault();
        const response = await fetch("/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();
        if(response.ok){
            router.push("/user/dashboard");

        }else{
            alert(data.message);
        }
    }

    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="p-10 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl mb-6 text-center">Login</h1>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" className="p-3 border rounded-lg"
            onChange={(event)=>setEmail(event.target.value)}
            />
            <input type="password" placeholder="Password" className="p-3 border rounded-lg" 
            onChange={(event)=>setPassword(event.target.value)}
            />
            <button className="bg-purple-600 text-white p-3 rounded-lg" type="submit">Login</button>
          </form>
          <Link href="/user/register" className="text-center block mt-7"> New User ? Click Here</Link>
        </div>
      </div>
    );
  }
  