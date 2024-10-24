import React from "react";
import Balance from "../Balance";
import TransactionForm from "../Transactions/TransactionForm";
import TransactionList from "../Transactions/TransactionList";
import IncomeExpenses from "../IncomeExpenses";
import ExpenseChart from "../ExpenseChart";
import { GiBandit } from "react-icons/gi";

function Ingreso() {
  return (
    <div className="bg-[#1b1c20] p-10 rounded-lg flex gap-x-2 border-2 border-neutral-800 opacity-80">
      <div className="container mx-auto w-3/6">
        <h1 className="text-4xl font-bold border-b py-3">Balance Personal</h1>
        <IncomeExpenses />
        <Balance />
        <TransactionForm />
      </div>
      <GiBandit className="h-10 w-10" />
      <div className="flex flex-col flex-1">
        <ExpenseChart />
        <TransactionList />
      </div>
      <div className="w-[200vw] h-[200vw] bg-gradient-to-tr from-[#171616] to-[#000000] absolute top-[-50vw] right-[-50vw] overflow-hidden -z-30"></div>
    </div>
  );
}

export default Ingreso;
