import React from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalContextApi = ({ children }) => {
  const money = 1000;
  const Adhar = 2123704802484;

  return (
    <GlobalContext.Provider value={{ money, Adhar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextApi;
