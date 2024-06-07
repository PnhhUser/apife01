import axios from "axios";
import { localName } from "./constants";

export const getStorageByName = function (name) {
  return localStorage.getItem(name);
};

export const setLocalStorage = function (name, value) {
  return localStorage.setItem(name, value);
};

export const removeStorageByName = function (name) {
  return localStorage.removeItem(name);
};

export const apiLogin = async function (email, password) {
  const { data } = await axios.post("http://localhost:3333/api/login", {
    email: email,
    password: password,
  });

  const token = data.accessToken;

  setLocalStorage(localName.token, token);

  return token;
};

export const apiProfile = async function (token) {
  const res = await axios.get("http://localhost:3333/api/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
