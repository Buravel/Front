import React from "react";
import UserPostInfo from "./UserPostInfo";
import HeaderBlock from "../src/header/HeaderBlock";
import Post from "./Post";
import PostLine from "./PostLine";
import ServerMock from "./ServerMock";
function App() {
  return (
    <>
      <HeaderBlock />
      <UserPostInfo UserName="사과" date="8" />
      <ServerMock />
    </>
  );
}

export default App;
