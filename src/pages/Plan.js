import React from "react";
import Responsive from "../components/common/Responsive";
import UserPostInfo from "../components/plan/UserPostInfo";
import OtherUserpost from "../components/plan/OtherUserpost";

const Plan = () => {
  return (
    <Responsive>
      <UserPostInfo />
      <OtherUserpost />
    </Responsive>
  );
};

export default Plan;
