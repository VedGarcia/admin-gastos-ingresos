import React, { createContext, useReducer, useContext } from "react";

const GlobalStateContext = createContext();

const initialState = {
  transactions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "RESET_TRANSACTIONS":
      return {
        ...state,
        transactions: [],
      };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const resetTransactions = () => {
    dispatch({
      type: "RESET_TRANSACTIONS",
    });
  };

  return (
    <GlobalStateContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        resetTransactions,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
