import React from "react";
import Responsive from "../components/common/Responsive";
import UserPostInfo from "../components/plan/UserPostInfo";
import OtherUserpost from "../components/plan/OtherUserpost";
import UserPost from "../components/plan/UserPost";
import HeaderContainer from "../containers/common/HeaderContainer";
import Planmap from "../components/plan/Planmap";
const Plan = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <UserPost />

        <OtherUserpost />
        <Planmap />
      </Responsive>
    </>
  );
};

export default Plan;
