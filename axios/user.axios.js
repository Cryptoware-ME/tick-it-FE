import { instance } from "./ApiAxios";

export const getUsers = async (token) => {
  const data = await instance.get("/users");
};