import axios from "axios";
import config from "./config.js";

const instance = axios.create({
  baseURL: config.BASE_URL,
  headers: { authorization: localStorage.getItem("token") },
});

export const Login = async (payload) => {
  await instance.post("");
};
