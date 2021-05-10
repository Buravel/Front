import React from "react";
import Appstyle from "./Appstyle.css";
import { day, dayLine } from "./image/iconimg";
import Post from "./Post";
import Postconnect from "./Postconnect";

const PostLine = (props) => {
  return (
    <>
      <div className="dayBackground">
        <div className="dayName">{props.day}일차</div>
        <img src={day} className="dayCircle" alt="날짜표시" />
        <div className="dayLine" />
        <div className="container">
          <span className="hideDot" />
          <Post transport="ktx" posttitle="이코노미" />
          <Post transport="ktx" posttitle="이코노미" />
          <Post transport="ktx" posttitle="이코노미" />
          <Post transport="ktx" posttitle="이코노미" />
          <Post transport="ktx" posttitle="이코노미" />
          <Post transport="ktx" posttitle="이코노미" />
        </div>
      </div>
    </>
  );
};

export default PostLine;
