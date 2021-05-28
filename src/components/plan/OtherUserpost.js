import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import styled from "styled-components";
import PostLine from "./PostLine";
import Post from "./Post";
import Icon from "./Icon";
import Slider from "./Slider";

function OtherUserpost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setPosts(null);
        setLoading(true);
        const response = await axios.get("http://localhost:8080/post");
        setPosts(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;
  // const nameArray = posts.map((posts) => posts.title);

  // const newArray = posts.map((posts) => posts.day);
  // const dayMax = Math.max.apply(null, newArray);
  // const dayArray = [];

  // function Lineposts(e) {
  //   return posts.filter((k) => k.day === e);
  // }
  // console.log(Lineposts(1));

  // console.log(Lineposts(1).map((posts) => posts.title));

  // for (let i = 1; i <= dayMax; i++) {
  //   dayArray.push(i);
  // }
  const postTerm = posts.postForPlanResponseDtos;

  const dayMax = Math.max.apply(
    null,
    postTerm && postTerm.map((itme, i) => itme.day)
  );

  const dayArray = [];
  for (let i = 1; i <= dayMax + 1; i++) {
    dayArray.push(i);
  }

  return (
    <>
      <div className="dayInfo">
        {dayArray.map((num) => (
          <>
            <div className="dayBackground">
              <div className="dayName">{num}일차</div>
              <Icon picture="day" className="dayCircle" alt="날짜표시" />
              <div className="dayLine" />
              <div className="postlineContainer">
                <span className="hideDot" />
                <Slider day={num} />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default OtherUserpost;
