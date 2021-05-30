import axios from "axios";
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

export const register = async ({ nickname, username, email, password }) =>
  await axios({
    method: "POST",
    url: "/signUp",
    data: {
      nickname: nickname,
      username: username,
      email: email,
      password: password,
    },
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const registerAuth = async ({ number }) => {
  token = localStorage.getItem("token");
  if (token) token = token.replace(/\"/gi, "");
  axios.defaults.headers.common["Authorization"] = `${token}`;
  await axios
    .get("/emailVerification", {
      params: {
        token: number,
      },
    })
    .then((response) => {
      console.log(response.data.emailVerified);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return Promise.reject(error);
    });
};

export const registerReAuth = async ({ number }) => {
  token = localStorage.getItem("token");
  if (token) token = token.replace(/\"/gi, "");
  axios.defaults.headers.common["Authorization"] = `${token}`;
  await axios
    .post("/emailCheckToken", {
      params: {
        token: number,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const findID = async ({ email }) =>
  await axios
    .get("/findUsername", {
      params: {
        email: email,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });

export const findPW = async ({ email }) =>
  await axios
    .post("/tempPassword", email)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
