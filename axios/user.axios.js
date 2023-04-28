import { instance } from "./ApiAxios";

export const getUsers = async (filter) => {
  const data = await instance.get(`/users`, {
    params: {
      filter ,
    },
  });
  return data;
};
