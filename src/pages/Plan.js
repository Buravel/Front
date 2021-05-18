import React from "react";
import Responsive from "../components/common/Responsive";
import UserPostInfo from "../components/plan/UserPostInfo";
import OtherUserpost from "../components/plan/OtherUserpost";
import Slider from "../components/plan/Slider";
const Plan = () => {
  return (
    <Responsive>
      <UserPostInfo />
      <Slider />
    </Responsive>
  );
};

export default Plan;
