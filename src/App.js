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
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import SetUpPage from "./pages/SetupPage";
import EditPage from "./pages/EditPage";

const App = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/signUp" component={RegisterPage} />
      <Route path="/privacyPolicy" component={PrivacyPolicy} />
      <Route path="/signUpComplete" component={SignCompletePage} />
      <Route path="/findID" component={FindID} />
      <Route path="/findPW" component={FindPW} />
      <Route path="/findAuth" component={FindAuth} />
      <Route path="/registerAuth" component={RegisterAuth} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/setupPage" component={SetUpPage} />
      <Route path="/editPage" component={EditPage} />
    </>
  );
};

export default App;
