import "./App.scss";
import React from "react";
import { Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignCompletePage from "./pages/SignCompletePage";
import FindID from "./pages/FindIDPage";
import FindPW from "./pages/FindPWPage";
import FindAuthID from "./pages/FindAuthPageID";
import FindAuthPW from "./pages/FindAuthPagePW";
import RegisterAuth from "./pages/RegisterAuthPage";
// import MainPage from './pages/MainPage';
import BookMarks from "./pages/BookMarks";
import MyPage from "./pages/MyPage";
import Plan from "./pages/Plan";
import SearchPage from "./pages/SearchPage";
import WritePlan from "./pages/WritePlan";
import SetUpPage from "./pages/SetupPage";
import EditPage from "./pages/EditPage";
import AuthCompletePage from "./pages/AuthCompletePage";
import QuitPage from "./pages/QuitPage";
import QuitCompletePage from "./pages/QuitCompletePage";
import HomePage from "./pages/HomePage";
import CheckPWPage from "./pages/CheckPWPage";
import BookMarkDetail from "./pages/BookMarkDetail";

const App = () => {
  return (
    <>
      <Route path="/" component={HomePage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/bookmarks" component={BookMarks} exact />
      <Route path="/bookmarks/:id" component={BookMarkDetail} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/plan/:planId" component={Plan} />
      <Route path="/search" component={SearchPage} />
      <Route path="/writeplan" component={WritePlan} />
      <Route path="/editplan/:planId" component={WritePlan} />

      <Route path="/signUp" component={RegisterPage} />
      <Route path="/privacyPolicy" component={PrivacyPolicy} />
      <Route path="/signUpComplete" component={SignCompletePage} />
      <Route path="/findID" component={FindID} />
      <Route path="/findPW" component={FindPW} />
      <Route path="/findAuthID" component={FindAuthID} />
      <Route path="/findAuthPW" component={FindAuthPW} />
      <Route path="/registerAuth" component={RegisterAuth} />
      <Route path="/setupPage" component={SetUpPage} />
      <Route path="/editPage" component={EditPage} />
      <Route path="/authComplete" component={AuthCompletePage} />
      <Route path="/quit" component={QuitPage} />
      <Route path="/quitComplete" component={QuitCompletePage} />
      <Route path="/checkPW" component={CheckPWPage} />
    </>
  );
};

export default App;
