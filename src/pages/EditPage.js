import React from "react";
//import SetupForm from "../containers/mypage/SetupForm";
import EditPage1 from "../components/mypage/EditPage";
import Responsive from "../components/common/Responsive";
import HeaderContainer from "../containers/common/HeaderContainer";

const EditPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <EditPage1 />
      </Responsive>
    </>
  );
};

export default EditPage;
