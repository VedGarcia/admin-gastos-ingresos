import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
export const Context = createContext();

const initialState = {
  transactions: [],
};

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

const addTransaction = (transaction) => {
dispatch({type: "ADD_TRANSACTION",
  payload: transaction
})
  console.log("addTransaction")
}


  return (
    <Context.Provider 
    value={{ transations: state.transactions, 
    addTransaction: addTransaction,}}>
      {children}
    </Context.Provider>
  );
};

export default GlobalProvider;
