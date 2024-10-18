import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: []
}

export const Context = createContext();

export const useGlobalstate = () => {
    const context = useContext(Context);
    return context
}
export const GlobalProvider = ({ children }) => {
const [state, dispatch] = useReducer(AppReducer, initialState);
const addTransaction = () => console.log("addTransaction")


    return (
        <Context.Provider 
        value={{
            transactions: state.transactions,
            dispatch,
            addTransaction
        }}
        >{children}</Context.Provider>
    )
}
