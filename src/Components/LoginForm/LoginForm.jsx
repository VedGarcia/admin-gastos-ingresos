import { RiUserLine } from "react-icons/ri";
import { TfiLock } from "react-icons/tfi";

function LoginForm() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#171616]">
      <form className="bg-[#1b1c20] w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 text-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl p-10 text-center">Acceder</h1>
        <div className="relative mb-4 w-full">
          <input
            className="bg-gradient-to-r from-gray-800 to-zinc-700 text-white px-4 py-2 rounded-lg shadow-md mb-3 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            placeholder="Usuario"
            required
          />
          <RiUserLine className="absolute right-1 top-2.5 h-6 w-6 text-gray-400" />
        </div>
        <div className="relative mb-4 w-full">
          <input
            className="bg-gradient-to-r from-gray-800 to-zinc-700 text-white px-4 py-2 rounded-lg shadow-md mb-3 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="password"
            placeholder="Contraseña"
            required
          />
          <TfiLock className="absolute right-1 top-2.5 h-6 w-6 text-gray-400" />
        </div>

        <div className="flex justify-between items-center w-full mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 cursor-pointer" />Recuerdame
          </label>
          <a href="#" className="text-blue-500 hover:underline">¿Olvidaste la Contraseña?</a>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out"
          type="submit"
        >
          Acceder
        </button>
      </form>
    </div>
  );
}

export default LoginForm;