import { instance } from "./ApiAxios";

export const login = async (payload) => {
  const data = await instance.post("/auth/login", payload);
  return data.data;
};
export const signup = async (payload) => {
  const data = await instance.post("/auth/signup", payload);
  return data.data;
};
export const validate = async (token) => {
  const data = await instance.post("/auth/validateToken", {
    headers: {
      authorization: token,
    },
  });
  return data.data;
};
