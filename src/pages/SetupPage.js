import React from "react";
import SetupForm from "../containers/mypage/SetupForm";
import Responsive from "../components/common/Responsive";
import HeaderContainer from "../containers/common/HeaderContainer";

const SetUpPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <SetupForm />
      </Responsive>
    </>
  );
};

export default SetUpPage;
