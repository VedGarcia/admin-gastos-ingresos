import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import React from "react";
import Balance from '../../Components/Balance';
import TransactionForm from '../../Components/TransactionForm';

function Incomes() {
    const navigate = useNavigate();

    const handleLogout = () => {

        navigate('/login'); 
    };

    return (
        <div className="bg-red-400 ">
            <Header />
            <Balance />
            <TransactionForm />
            <h1>Incomes Page</h1>

            <button onClick={handleLogout} className="text-gray-500">
                Logout
            </button>
        </div>
    );
}

export default Incomes;
