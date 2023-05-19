import { Children, useContext } from "react";

import AuthContext from "./AuthContext";
import { useAuth } from "./useAuth";

export const AuthProvider = () => {
  const { user, logOut, login } = useAuth();

  return (
    <AuthContext.Provider value={{ user, logOut, login }}>
      {Children}
    </AuthContext.Provider>
  );
};
