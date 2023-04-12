import { instance } from "./ApiAxios";

export const login = async (payload) => {
  const data = await instance.post("/auth/login", payload);
  console.log("data: ", data);
};
