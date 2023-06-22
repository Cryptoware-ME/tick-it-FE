import { instance } from "./ApiAxios";

export const getReportTypes = async () => {
  const data = await instance.get(`/reportTypes`);
  return data;
};

export const postReport = async (payload) => {
  const data = await instance.post("/reports", payload);
  return data.data;
};
