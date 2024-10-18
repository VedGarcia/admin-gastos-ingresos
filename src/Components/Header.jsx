import React from 'react';
import { NavLink } from 'react-router-dom'; 

function Header() {
    return (
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 flex justify-between items-center rounded-md shadow-md">
            <h1 className="text-3xl font-bold">Expense Tracker</h1>
            <div className="space-x-4">
                <NavLink to="/" className="text-xl font-bold hover:text-blue-300 transition duration-300">
                    uwu
                </NavLink>
                <NavLink to="/login" className="text-xl font-bold hover:text-green-300 transition duration-300">
                    OwO
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
