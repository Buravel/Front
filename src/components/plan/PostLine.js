import React, { useState, useEffect } from "react";
import Appstyle from "./Planstyle.scss";
import Post from "./Post";
import Icon from "./Icon";

const PostLine = (props) => {
  return (
    <>
      <div className="dayBackground">
        <div className="dayName">{props.day}일차</div>
        <Icon picture="day" className="dayCircle" alt="날짜표시" />
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
