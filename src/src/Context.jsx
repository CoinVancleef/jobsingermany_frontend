import React, { useState, useEffect, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
}
