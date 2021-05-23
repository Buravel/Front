import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import Post from "./Post";

function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const slideRef = useRef(null);

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

  useEffect(() => {
    slideRef.current.style.transition = "all 0.4s ease-in-out";
    slideRef.current.style.transform = `translateX(-${
      currentSlide * 200 + currentSlide * 24
    }px)`;
  }, [currentSlide]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;

  // const newArray = posts.map((posts) => posts.day);
  // const dayMax = Math.max.apply(null, newArray);

  // function daycountArray(a) {
  //   return posts.filter((k) => k.day === a);
  // }
  // function Lineposts(e) {
  //   return posts.filter((k) => k.day === e);
  // }
  // const dayArray = [];
  // for (let i = 1; i <= dayMax; i++) {
  //   dayArray.push(i);
  // }

  const postTerm = posts.postForPlanResponseDtos;

  const dayMax =
    postTerm &&
    postTerm.filter((k) => k.day === props.day - 1).map((item, i) => item.id)
      .length;

  const nextSlide = () => {
    if (currentSlide >= dayMax) {
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  // console.log(currentSlide);
  // function Lineposts(e) {
  //   return posts.filter((k) => k.day === e);
  // }

  return (
    <>
      <div className="BContainer">
        {/* <div>
          {console.log(
            postTerm && postTerm.filter((k) => k.day === props.day - 1)
          )}
        </div> */}
        {postTerm &&
          postTerm.filter((k) => k.day === props.day - 1).length >= 6 && (
            <>
              {currentSlide === 0 ? (
                ""
              ) : (
                <span className="prevButton">
                  <button onClick={prevSlide} className="prevbtn">
                    <img
                      src="/images/planImg/nextButton.svg"
                      className="prebtn"
                    />
                  </button>
                </span>
              )}
              {currentSlide ===
              (postTerm && postTerm.filter((k) => k.day === props.day - 1))
                .length -
                4 ? (
                ""
              ) : (
                <span className="nextButton">
                  <button onClick={nextSlide} className="nextbtn">
                    <img
                      src="/images/planImg/nextButton.svg"
                      className="nxtbtn"
                    />
                  </button>
                </span>
              )}
            </>
          )}
        <div className="SliderContainer" ref={slideRef}>
          {postTerm &&
            postTerm
              .filter((k) => k.day === props.day - 1)
              .map((item, i) => <Post id={item.id} />)}
          {/* 여기서 받는 day는 실제 날짜와 같음 */}
        </div>
      </div>
    </>
  );
}
export default Slider;
