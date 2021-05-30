import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import QuitPage from "../../components/mypage/QuitPage";
axios.defaults.baseURL = "http://34.64.93.115";
const QuitForm = () => {
  let token = localStorage.getItem("token");
  if (token) token = token.replace(/\"/gi, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const returning = axios.delete("/mypage/account").then((response) => {
    console.log(response);
  });
  return <QuitPage type="quit"></QuitPage>;
};

export default withRouter(QuitForm);
