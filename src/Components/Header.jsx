import React from 'react';
import { NavLink } from 'react-router-dom'; 

function Header() {
    return (
        <div className="bg-slate-500 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Expense Tracker</h1>

            <NavLink to="/" className="text-xl font-bold">uwu</NavLink>
            <NavLink to="/login" className="text-xl font-bold">OwO</NavLink>
        </div>
    );
}

export default Header;