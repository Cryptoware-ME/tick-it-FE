import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";
import { useAuth } from "../auth/useAuth";
const AuthModalContext = createContext();

export const useAuthModalContext = () => {
  const context = useContext(AuthModalContext);
  return context;
};

export const AuthModalProvider = ({ children }) => {
  const { user } = useAuth();

  const [modalOpen, setModalOpen] = useState(false);

  const changeModalMode = (toggle) =>
    !user ? setModalOpen(toggle) : (() => null)();

  useEffect(() => {
    console.log("modal", user);
  }, [user]);

  return (
    <AuthModalContext.Provider
      value={{
        modalOpen,
        setModalOpen: changeModalMode,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};
