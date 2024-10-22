import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import PropTypes from "prop-types"

const initialState = {
  transactions: [],
};

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transactions) => {

    dispatch({ type: 'ADD_TRANSACTION', payload: transactions});
  }
  const deleteTransaction = (id) => {

    dispatch({ type: 'DELETE_TRANSACTION', payload: id});
  }
  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        dispatch,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </Context.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node
}