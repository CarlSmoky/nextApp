"use client"
import React, { createContext, useState } from "react";
import { childrenProps, NavState } from "../types/Interfaces";

export interface NavContextProps {
  currentNav: NavState
  setCurrentNav: React.Dispatch<React.SetStateAction<NavState>>
}

export const DisplayNavContext = createContext<NavContextProps | null>(null);

export const DisplayNavProvider: React.FC<childrenProps> = ({ children })  => {
  const [currentNav, setCurrentNav] = useState<NavState>(NavState.home);

  const provideData = { currentNav, setCurrentNav};

  return (
    <DisplayNavContext.Provider value={provideData}>
      {children}
    </DisplayNavContext.Provider>
  );
}
