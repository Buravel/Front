import React from "react";
import Appstyle from "./Appstyle.css";
import { day, dayLine } from "./image/iconimg";
import Post from "./Post";

const PostLine = (props) => {
  return (
    <>
      <div className="dayBackground">
        <div className="dayName">{props.day}일차</div>
        <img src={day} className="dayCircle" alt="날짜표시" />
        <div className="dayLine" />
        <div className="container">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
};

export default PostLine;
