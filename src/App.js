import "./App.scss";
import React from "react";
import HeaderContainer from "./containers/common/HeaderContainer";
import { Route } from "react-router";
import MainPage from "./pages/MainPage";
import BookMarks from "./pages/BookMarks";
import MyPage from "./pages/MyPage";
import Plan from "./pages/Plan";
import SearchPage from "./pages/SearchPage";
import WritePlan from "./pages/WritePlan";

const App = () => {
  return (
    <>
      <HeaderContainer />
      <div className="content">
        <Route path="/" component={MainPage} exact />
        <Route path="/bookmarks" component={BookMarks} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/plan" component={Plan} />
        <Route path="/searchpage" component={SearchPage} />
        <Route path="/writeplan" component={WritePlan} />
      </div>
    </>
  );
};

export default App;
