import React from "react";
import UserPostInfo from "./UserPostInfo";
import HeaderBlock from "../src/header/HeaderBlock";
import Post from "./Post";

function App() {
  return (
    <>
      <HeaderBlock />
      <UserPostInfo UserName="사과" />
      <Post />
    </>
  );
}

export default App;
