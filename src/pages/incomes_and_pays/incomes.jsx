import { useNavigate } from 'react-router-dom';
import React from "react";

function Incomes() {
    const navigate = useNavigate();

    const handleLogout = () => {

        navigate('/login'); 
    };

    return (
        <div className="bg-black ">
            <h1>Incomes Page</h1>

            <button onClick={handleLogout} className="text-gray-500">
                Logout
            </button>
        </div>
    );
}

export default Incomes;
