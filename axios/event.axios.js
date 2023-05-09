import { instance } from "./ApiAxios";

export const getEvents = async (filter) => {
  const data = await instance.get(`/events`, {
    params: {
      filter,
    },
  });
  return data;
};
