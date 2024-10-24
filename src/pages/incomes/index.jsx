import { NavLink } from "react-router-dom";
import Balance from "../../Components/Balance/index.jsx";
import TransactionForm from "../../Components/Transaction/TransactionForm/index.jsx";
import TransactionList from "../../Components/Transaction/TransactionList/index.jsx";
import IncomeExpense from "../../Components/Transaction/incomeExpense/index.jsx";
import ExpenseChat from "../../Components/Transaction/ExpenseChart/index.jsx";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { MdHistoryToggleOff } from "react-icons/md";

function Incomes() {
  return (
    <>
      <div className="text-gray-500 w-full min-h-screen flex justify-center items-center ">
        <div className="xl:size-3/6 md:size-full lg:overflow-hidden overflow-hidden">
          <div className="bg-white p-10 rounded-lg lg:grid lg:grid-cols-6 lg:gap-x-5 gap-y-5">
            {/* encabezado */}
            <div className="col-span-6 lg:mb-1 mb-5 px-3 py-2 rounded-lg flex justify-between items-center bg-[#5d54A4] shadow-md shadow-gray-500">
              <h1 className="text-4xl font-bold text-white flex gap-3 items-center">
                <FaMoneyBill1Wave />
                Expense Tracker
              </h1>
              {/* para volver al login */}
              <div className="flex gap-4 text-3xl text-white">
                <NavLink to="/">
                  <IoIosArrowBack />
                </NavLink>
              </div>
            </div>
            {/* para mostrar las transacciones  */}
            <div className="h-auto p-4 col-span-3 bg-gradient-to-br from-[#6c63ac] to-[#4C489D] border-[#8C6AE6] rounded-lg shadow-md shadow-gray-500 text-white">
              <IncomeExpense />
              <Balance />
              {/* Formulario de Transaccion */}
              <div className="flex flex-col py-2 lg:h-72 justify-center">
                <TransactionForm />
              </div>
            </div>
            <div className="lg:flex lg:flex-col lg:col-span-3 lg:my-0 my-3 ">
              {/* la Grafica */}
              <div className="bg-[#5d54A4] rounded-lg bg-gradient-to-tr from-[#6c63ac] to-[#4C489D] p-2 shadow-md shadow-gray-500 lg:h-full lg:flex lg:flex-col lg:justify-around">
                <ExpenseChat />
                <div className="text-white font-bold flex flex-col w-full gap-y-2 text-lg">
                  <div className="flex gap-1 items-center w-full">
                    <div className="w-7 bg-[#8C6AE6] rounded-full text-transparent">
                      d
                    </div>
                    <span>incomes</span>
                    <GiReceiveMoney />
                  </div>
                  <div className="flex gap-1 items-center w-full">
                    <div className="w-7 bg-[#877DD4] rounded-full text-transparent">
                      d
                    </div>
                    <span>Expense</span>
                    <GiPayMoney />
                  </div>
                </div>
              </div>
            </div>
            {/* la lista de transacciones */}
            <div className="border bg-[#5d54A4] rounded-lg p-4 w-full h-44 text-white lg:col-span-6">
              <h3 className="text-2xl font-bold w-full mb-2 gap-2 flex items-center">
                <MdHistoryToggleOff />
                History
              </h3>
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Incomes;
