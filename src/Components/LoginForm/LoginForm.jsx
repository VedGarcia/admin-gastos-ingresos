
import { RiUserLine } from "react-icons/ri";
import { TfiLock } from "react-icons/tfi";



function LoginForm() {
  return (
    <form className="bg-[#1b1c20] container mx-auto  mt-auto w-2/6 text-white h-screen flex justify-center items-center flex-col p-10 rounded-lg shadow-lg flex-1">
      <h1 className="text-3xl p-10">Login</h1>
      <div className="relative mb-4 w-full">
        <input className="bg-gradient-to-r  from-gray-800 to-zinc-700  text-white px-4 py-2 rounded-lg shadow-md mb-3 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" placeholder="Username" required  />
        <RiUserLine className="absolute right-1  top-2.5 h-6 w-6 text-gray-400" />
      </div>
      <div className="relative mb-4 w-full">
        <input className="bg-gradient-to-r from-gray-800 to-zinc-700  text-white px-4 py-2 rounded-lg shadow-md mb-3 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600" type="password" placeholder="Password" required />
        <TfiLock className="absolute right-1 top-2.5 h-6 w-6 text-gray-400"/>
      </div>

      <div className="flex justify-between items-center w-full mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2 cursor-pointer"/> Remember Me
        </label>
        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg trasition duration-300 ease-in-out" type="submit">Login</button>

      <div className="mt-4 text-center">
        <p className="text-blue-500 hover:underline cursor-pointer">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
