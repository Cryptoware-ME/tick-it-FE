import { instance } from "./ApiAxios";

export const postCustodialMint = async (payload) => {
  const data = await instance.post(`/tickets/mint`, payload);
  return data;
};
