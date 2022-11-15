import React, { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext({});
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
 
  const value = {
    isModalOpen,
    setIsModalOpen,
    toggle,
    setToggle
     
   
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
