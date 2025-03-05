import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen bg-purple-400 flex items-center justify-center">
      <div className="flex flex-row justify-center items-center bg-purple-200 p-10 rounded-lg shadow-lg">
        <div className="flex items-center justify-center p-10">
          <h1 className="text-6xl p-6 text-purple-950">Taskora</h1>
        </div>
        <div className="flex flex-col justify-center p-10">
          <div className="sub-title mb-10 text-purple-950">
            <h4 className="text-3xl">Actively complete your tasks</h4>
          </div>
          <div className="buttons flex flex-col items-center text-white">
            <div className="p-3 text-2xl bg-purple-600 shadow-lg rounded-2xl m-5 w-52 text-center">
              <Link href="/user/login">Login</Link>
            </div>
            <div className="text-2xl p-3 bg-purple-600 shadow-lg rounded-2xl m-5 w-52 text-center">
              <Link href="/login/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
