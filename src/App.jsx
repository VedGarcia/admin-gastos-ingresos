import { GlobalProvider } from "./Context/GlobalState";
import React, { useState } from "react";
import LoginForm from "./Components/LoginForm/LoginForm.jsx";

import Ingreso from "./Components/IngresoApp/Ingreso.jsx"; 

function App() {
  const [currentView, setCurrentView] = useState("login"); 

  const handleLogin = () => {
    setCurrentView("ingreso"); 
  };

  return (
    <GlobalProvider>
      <div className="text-white h-screen flex justify-center items-center">
        {currentView === 'login' ? (
          <LoginForm onLogin={handleLogin} /> 
        ) : (
          <Ingreso /> 
        )}
      </div>
    </GlobalProvider>
  );
}

export default App;