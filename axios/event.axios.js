import { instance } from "./ApiAxios";

export const getEvents = async (filter) => {
  const data = await instance.get(`/events`, {
    params: {
      filter,
    },
  });
  return data;
};

export const getCategories = async (filter) => {
  const data = await instance.get(`/categories`, {
    params: {
      filter,
    },
  });
  return data;
};

export const postEvent = async (payload) => {
  console.log(payload);
  const data = await instance.post("/events", payload);
  return data.data;
};
