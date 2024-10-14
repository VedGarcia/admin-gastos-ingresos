import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importamos Link para navegación

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        // Guardar los datos del nuevo usuario en localStorage
        const userData = {
            username: username,
            password: password,
            email: email
        };

        localStorage.setItem('userData', JSON.stringify(userData)); // Guardamos como objeto JSON

        // Redirigir a la página de login después de registrarse
        navigate('/login');
    };

    return (
        <div className="bg-stone-100 flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img src="src/assets/react.svg" alt="Placeholder Image" className="object-cover w-full h-full" />
            </div>

            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
                <form onSubmit={handleSignUp}>
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

                    <div className="mb-4 bg-sky-100">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
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

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Sign Up</button>
                </form>
                
                {/* Enlace al Login */}
                <div className="mt-6 text-gray-600 text-center">
                    <Link to="/login" className="hover:underline">Already have an account? Log in here!</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
