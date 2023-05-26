import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

import { validate } from "../axios/auth.axios";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const restoreUser = async (token) => {
    const response = await validate(token);
    if (response) {
      setUser(response);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      restoreUser(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {}, [user]);

  const logIn = (user) => {
    setUser(user);
    localStorage.setItem("token", "Bearer " + user?.token);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return { user, logOut, logIn };
};
