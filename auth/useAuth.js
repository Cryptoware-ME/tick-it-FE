import { useState, useEffect } from "react";
import { validate } from "../axios/auth.axios";
export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      restoreUser(token);
    }
  }, []);

  const restoreUser = async (token) => {
    const response = await validate(token);
    if (response) {
      setUser(response);
    }
  };

  const logIn = (user) => {
    console.log("ggggggggggggg: ",user)
    setUser(user);
    localStorage.setItem("token", "Bearer " + user.token);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return { user, logOut, logIn };
};
