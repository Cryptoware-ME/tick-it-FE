import React from "react";
import { AuthContext } from "./AuthContext";
import { useAuth } from "./useAuth";
import { useEffect } from "react";

export const AuthProvider = ({ children }) => {
  const { user, logOut, login } = useAuth();
  useEffect(() => {
    console.log("provider", user);
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, logOut, login }}>
      {children}
    </AuthContext.Provider>
  );
};
