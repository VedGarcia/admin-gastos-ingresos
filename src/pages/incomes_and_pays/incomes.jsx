import React from 'react';
import Header from '../../Components/Header';
import Balance from '../../components/Balance';
import { TransactionForm } from '../../components/transactions/TransactionForm';
import { IncomeExpenses } from '../../components/IncomeExpenses';
import { ExpenseChart } from '../../components/ExpenseChart';
import { TransactionList } from '../../components/transactions/TransactionList';
import LogoutButton from '../Login-Registration/LogoutButton';

function Incomes() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 to-blue-300 text-gray flex justify-center items-center">
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 bg-blue-400 opacity-60 rounded-full animate-float left-10 top-0"></div>
        <div className="absolute w-24 h-24 bg-pink-400 opacity-60 rounded-full animate-float delay-1000 left-1/4 top-1/4"></div>
        <div className="absolute w-40 h-40 bg-green-400 opacity-60 rounded-full animate-float delay-1500 left-2/3 top-1/3"></div>
        <div className="absolute w-28 h-28 bg-yellow-300 opacity-60 rounded-full animate-float delay-2000 left-1/3 top-3/4"></div>
        <div className="absolute w-36 h-36 bg-purple-300 opacity-60 rounded-full animate-float delay-2500 left-1/2 top-1/2"></div>
        <div className="absolute w-30 h-30 bg-teal-400 opacity-60 rounded-full animate-float delay-3000 right-10 bottom-0"></div>
        <div className="absolute w-20 h-20 bg-orange-400 opacity-60 rounded-full animate-float delay-3500 left-2/5 top-1/4"></div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="bg-white bg-opacity-80 backdrop-blur-lg p-10 rounded-md w-full max-w-6xl border-4 animate-snake-border shadow-lg animate-slide-in">
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
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default Incomes;