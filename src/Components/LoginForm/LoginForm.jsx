
import React from 'react';
import { RiUserLine } from "react-icons/ri";
import { TfiLock } from "react-icons/tfi";

function LoginForm({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();


    onLogin();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1b1c20] w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 text-white p-10 rounded-lg shadow-lg">
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
      <div className="relative mb-4 w-full ">
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
        className="relative z-10 bg-gradient-to-r from-blue-800 to-gray-700 text-white px-6 py-3 rounded-md block w-full font-semibold transition-transform duration-300 active:scale-95 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 group focus:outline-none focus:ring-3 focus:ring-blue-600 focus:ring-opacity-50"
        type="submit"
      >
        Acceder
      </button>
    </form>
  );
}

export default LoginForm;