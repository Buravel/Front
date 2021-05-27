import React from "react";
import Responsive from "../components/common/Responsive";
import MyPageForm from "../containers/mypage/MyPageForm";
import HeaderContainer from "../containers/common/HeaderContainer";

const MyPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <MyPageForm />
      </Responsive>
    </>
  );
};

export default MyPage;
