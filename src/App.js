import React from "react";
import UserPostInfo from "./UserPostInfo";
import HeaderBlock from "../src/header/HeaderBlock";
import Post from "./Post";
import PostLine from "./PostLine";
import OtherUserpost from "./OtherUserpost";
function App() {
  return (
    <>
      <HeaderBlock />
      <UserPostInfo UserName="사과" date="8" />
      <OtherUserpost />
    </>
  );
}

export default App;
