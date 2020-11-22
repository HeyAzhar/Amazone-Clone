import React, { createContext, useContext, useReducer } from "react";

//Creating context
export const StateContext = createContext();

//Context Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//use Context
export const useStateValue = () => useContext(StateContext);
