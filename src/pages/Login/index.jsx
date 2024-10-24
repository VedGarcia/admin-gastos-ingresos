import { NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import {
  FaLock,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Login_registration() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <img src="public/logo.png" className="absolute top-20 left-[40%] w-52"/>
      <div className="shadow-2xl shadow-gray-700 bg-custom-pattern bg-cover bg-center overflow-hidden">
        <section className="w-96 h-[600px] flex flex-col justify-center items-center p-6 rounded-m">
          <form className="w-full h-72 flex flex-col p-1 font-bold text-sm text-gray-500 ">
            <div className="flex items-center border-b-2 h-10 w-3/4 gap-x-3 my-5 pl-1">
              <MdAccountCircle className="text-3xl text-[#5d54A4]" />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full h-full outline-none "
              ></input>
            </div>
            <div className="flex items-center border-b-2 h-10 w-3/4 gap-x-3 my-5 pl-2">
              <FaLock className="text-2xl text-[#5d54A4]" />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full h-full outline-none"
              ></input>
            </div>
            <div className="">
              <NavLink to="/incomes">
                <button className="mt-12 bg-white w-72 h-16 rounded-full shadow-md shadow-[#4C489D] flex justify-between items-center py-3 px-5 text-lg text-[#5d54A4] hover:bg-[#5d54A4] hover:text-white hover:-translate-y-1 duration-300">
                  LOG IN NOW
                  <IoIosArrowForward className="text-3xl " />
                </button>
              </NavLink>
            </div>
          </form>
        </section>
          <div className="flex flex-col items-end -translate-y-28 -translate-x-8">
            <p className="text-white font-bold text-xl mb-3">log in via</p>
            <div className="flex gap-x-4 text-lg text-white">
              <FaFacebookSquare />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login_registration;
