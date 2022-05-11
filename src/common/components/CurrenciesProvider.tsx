import React, { createContext, Dispatch, useReducer, useState } from "react";
import { Currency } from "../../../types";

type Selected = Currency | null;

type InitialState = {
  amount: number | null;
  selectedTo: Selected;
  selectedFrom: Selected;
};

type ActionType =
  | { type: "AMOUNT"; payload: number }
  | { type: "SELECTED_TO"; payload: Selected }
  | { type: "SELECTED_FROM"; payload: Selected };

const initialState: InitialState = { amount: null, selectedTo: null, selectedFrom: null };
const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "AMOUNT":
      return { ...state, amount: action.payload };
    case "SELECTED_TO":
      return { ...state, selectedTo: action.payload };
    case "SELECTED_FROM":
      return { ...state, selectedFrom: action.payload };
    default:
      return state;
  }
};

type CurrencyProviderProps = {
  children: React.ReactNode;
};

type CurrenciesContextType = {
  currencies: Currency[] | null;
  setCurrencies: React.Dispatch<React.SetStateAction<Currency[] | null>>;
};

type DispatchType = {
  dispatch: Dispatch<ActionType>;
};

const CurrenciesContext = createContext<
  (CurrenciesContextType & InitialState & DispatchType) | null
>(null);

const CurrencyProvider = ({ children }: CurrencyProviderProps) => {
  const [currencies, setCurrencies] = useState<Currency[] | null>(null);
  const [{ amount, selectedTo, selectedFrom }, dispatch] = useReducer(reducer, initialState);

  return (
    <CurrenciesContext.Provider
      value={{ currencies, setCurrencies, amount, selectedTo, selectedFrom, dispatch }}
    >
      {children}
    </CurrenciesContext.Provider>
  );
};

export { CurrenciesContext, CurrencyProvider };
