import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";
const AuthModalContext = createContext();

export const useAuthModalContext = () => {
  const context = useContext(AuthModalContext);
  return context;
};

export const AuthModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <AuthModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};
