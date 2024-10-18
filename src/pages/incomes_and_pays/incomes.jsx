import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import React from "react";
import Balance from '../../components/Balance';
import { TransactionForm } from '../../components/transactions/TransactionForm';
import { IncomeExpenses } from '../../components/IncomeExpenses';
import { ExpenseChart } from '../../components/ExpenseChart';
import { TransactionList } from '../../components/transactions/TransactionList';

function Incomes() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-300 to-blue-300 text-white flex justify-center items-center">
            <div className="w-full flex justify-center items-center">
                <div className="bg-white bg-opacity-80 backdrop-blur-lg p-10 rounded-md w-full max-w-6xl shadow-lg animate-slide-in">
                    <Header />
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-1">
                            <IncomeExpenses /> 
                            <Balance />
                            <TransactionForm />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <ExpenseChart />
                            <TransactionList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Incomes;
