import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prevData) => ({ ...prevData, [name]: value }));

  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/login");
  };

  return (
    <div className="relative bg-gradient-to-r from-pink-300 to-blue-300 flex justify-center items-center h-screen">

<div className="absolute inset-0 overflow-hidden">
  <div className="absolute w-32 h-32 bg-blue-400 opacity-60 rounded-full animate-float-1 left-10 top-0"></div>
  <div className="absolute w-24 h-24 bg-pink-400 opacity-60 rounded-full animate-float-2 delay-1000 left-1/4 top-1/4"></div>
  <div className="absolute w-40 h-40 bg-green-400 opacity-60 rounded-full animate-float-3 delay-1500 left-2/3 top-1/3"></div>
  <div className="absolute w-28 h-28 bg-yellow-300 opacity-60 rounded-full animate-float-1 delay-2000 left-1/3 top-3/4"></div>
  <div className="absolute w-36 h-36 bg-purple-300 opacity-60 rounded-full animate-float-2 delay-2500 left-1/2 top-1/2"></div>
  <div className="absolute w-30 h-30 bg-teal-400 opacity-60 rounded-full animate-float-3 delay-3000 right-10 bottom-0"></div>
  <div className="absolute w-20 h-20 bg-orange-400 opacity-60 rounded-full animate-float-1 delay-3500 left-2/5 top-1/4"></div>

</div>




      <div className="relative w-full max-w-md p-8  bg-white bg-opacity-80 backdrop-blur-lg border-4 animate-snake-border rounded-lg shadow-lg z-10 animate-slide-in">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 animate-slide-in">
          Sign Up
        </h1>
        <form onSubmit={handleSignUp}>
          {["username", "email", "password"].map((field) => (
            <div key={field} className="mb-6">
              <label
                htmlFor={field}
                className="block text-gray-700 text-lg mb-1"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:border-blue-500 transition duration-300 hover:shadow-md"
                autoComplete="off"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-md py-3 w-full transition duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-gray-600 text-center">
          <Link
            to="/login"
            className="text-sm font-medium hover:underline hover:text-blue-600 transition"
          >
            Already have an account? Log in here!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
