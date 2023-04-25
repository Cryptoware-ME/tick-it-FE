import { instance } from "./ApiAxios";

export const getUsers = async (email) => {
  const data = await instance.get(`/users`, {
    params: {
      filter: { where: { email: email } },
    },
  });
  return data;
};
