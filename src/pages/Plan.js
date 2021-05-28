import React from "react";
import Responsive from "../components/common/Responsive";
import UserPostInfo from "../components/plan/UserPostInfo";
import OtherUserpost from "../components/plan/OtherUserpost";
import UserPost from "../components/plan/UserPost";

const Plan = () => {
  return (
    <Responsive>
      <UserPost />
      {/* <UserPostInfo /> */}
      <OtherUserpost />
    </Responsive>
  );
};

export default Plan;
