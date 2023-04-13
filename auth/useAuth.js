import { useContext } from "react";

import AuthContext from "./AuthContext";

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (user) => {
    setUser(user);
    localStorage.setItem("token", "Bearer " + user.token);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return { user, logOut, logIn };
};
