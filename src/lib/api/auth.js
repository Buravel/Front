import axios from "axios";
import client from "./client";
axios.defaults.baseURL = "http://34.64.93.115";
let token;
export const login = async ({ username, password }) =>
  await axios({
    method: "POST",
    url: "/login",
    data: {
      username: username,
      password: password,
    },
  })
    .then((response) => {
      token = JSON.stringify(response.headers.authorization);
      try {
        localStorage.setItem("token", token);
      } catch (e) {
        console.log("localStorage is not working");
      }
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const register = ({ nickname, username, email, password }) =>
  client.post("/signUp", { nickname, username, email, password });

export const findID = (email) => client.post("/findUsername", { email });
export const findPW = (email) => client.post("/find", { email });
export const value = {
  token,
};
//test
//export const registerAuth = ({ email }) =>
//  client.post("/api/auth/registerAuth", { email });
/*
export const login = async ({ id, password }) =>
  await axios({
    method: "GET",
    url: "/user",
    data: {
      id: id,
      password: password,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const register = async ({ username, id, email, password }) =>
  await axios
    .post("/user", {
      username: username,
      id: id,
      email: email,
      password: password,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const check = async (id, password) =>
  await axios({
    method: "GET",
    url: "/user",
    data: {
      id: id,
      password: password,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const findID = async ({ email }) =>
  await axios
    .post("/user", {
      email: email,
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const findPW = async (email) =>
  await axios
    .post("/user", {
      email: email,
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
*/
/*axios.get("/user").then((response) => {
  console.log(response);
});
*/
/*  axios
    .get("/user", { id, password })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
export const register = ({ username, id, email, password }) =>
  axios.post("/user", { username, id, email, password }).then((response) => {
    console.log(response);
  });
export const check = () =>
  axios.get("/user").then((response) => {
    console.log(response);
  });
*/
