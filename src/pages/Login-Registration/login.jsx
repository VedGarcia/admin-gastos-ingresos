import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

      
        const savedUserData = JSON.parse(localStorage.getItem('userData'));


        if (savedUserData && savedUserData.username === username && savedUserData.password === password) {
            localStorage.setItem('isLoggedIn', true);

            navigate("/incomes");
        } else {
            alert("Credenciales incorrectas. Intenta de nuevo.");
        }
        navigate("/login")
    };

    return (
        <div className="bg-stone-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src="src/assets/react.svg" alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>

            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4 bg-sky-100">
                        <label htmlFor="username" className="block text-gray-600">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
                            autoComplete="off" 
                            required 
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
                            autoComplete="off" 
                            required 
                        />
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
                </form>
 
            </div>
        </div>
    );
}

export default Login;
