import Link from "next/link";

export default function Login() {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="p-10 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl mb-6 text-center">Register</h1>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" />
            <input type="email" placeholder="Email" className="p-3 border rounded-lg" />
            <input type="password" placeholder="Password" className="p-3 border rounded-lg" />
            <button className="bg-purple-600 text-white p-3 rounded-lg">Register</button>
          </form>
        <Link href="/login" className="text-center block mt-7 "> Already a User ? Click Here</Link>
        </div>
      </div>
    );
  }
  