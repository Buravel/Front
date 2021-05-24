import "./App.scss";
import React from "react";
import { Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignCompletePage from "./pages/SignCompletePage";
import FindID from "./pages/FindIDPage";
import FindPW from "./pages/FindPWPage";
import FindAuth from "./pages/FindAuthPage";
import RegisterAuth from "./pages/RegisterAuthPage";

const App = () => {
  return (
    <>
      <Route path="/login" component={LoginPage} />
      <Route path="/signUp" component={RegisterPage} />
      <Route path="/privacyPolicy" component={PrivacyPolicy} />
      <Route path="/signUpComplete" component={SignCompletePage} />
      <Route path="/findID" component={FindID} />
      <Route path="/findPW" component={FindPW} />
      <Route path="/findAuth" component={FindAuth} />
      <Route path="/registerAuth" component={RegisterAuth} />
    </>
  );
};

export default App;
