import React from "react";
import Responsive from "../components/common/Responsive";
import UserPostInfo from "../components/plan/UserPostInfo";
import OtherUserpost from "../components/plan/OtherUserpost";
import UserPost from "../components/plan/UserPost";
import HeaderContainer from "../containers/common/HeaderContainer";

const Plan = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <UserPost />
        {/* <UserPostInfo /> */}
        <OtherUserpost />
      </Responsive>
    </>
  );
};

export default Plan;
