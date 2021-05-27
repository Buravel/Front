import axios from "axios";
import client from "./client";
axios.defaults.baseURL = "http://localhost:4000";
export const login = ({ id, password }) =>
  client.get("/user", { id, password });

export const register = ({ username, id, email, password }) =>
  client.post("/user", { username, id, email, password });

export const check = () => client.get("/user");

export const findID = (email) => client.get("/find", { email });
export const findPW = (email) => client.post("/find", { email });
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
