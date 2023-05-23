import React, { useState, useEffect } from "react";
import { validate } from "../axios/auth.axios";
import { useRouter } from "next/router";

export const useAuth = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      restoreUser(token);
    }
  }, []);

  useEffect(() => {
    console.log("auth hook", user);
  }, [user]);

  const restoreUser = async (token) => {
    const response = await validate(token);
    if (response) {
      setUser(response);
    }
  };

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
