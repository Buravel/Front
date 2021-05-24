import './App.scss';
import React from 'react';
import { Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SignCompletePage from './pages/SignCompletePage';
import FindID from './pages/FindIDPage';
import FindPW from './pages/FindPWPage';
import FindAuth from './pages/FindAuthPage';
import RegisterAuth from './pages/RegisterAuthPage';
import MainPage from './pages/MainPage';
import BookMarks from './pages/BookMarks';
import MyPage from './pages/MyPage';
import Plan from './pages/Plan';
import SearchPage from './pages/SearchPage';
import WritePlan from './pages/WritePlan';

const App = () => {
    return (
        <>
            <Route path="/" component={MainPage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/bookmarks" component={BookMarks} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/plan" component={Plan} />
            <Route path="/searchpage" component={SearchPage} />
            <Route path="/writeplan" component={WritePlan} />

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
