import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import styled from "styled-components";
import Post from "./Post";

function Slider({ day, posts, bookmarks, bmark, setBmark }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);
  const thisLink = window.location.href;
  const Linkid = thisLink.split("plan/")[1];

  useEffect(() => {
    slideRef.current.style.transition = "all 0.4s ease-in-out";
    slideRef.current.style.transform = `translateX(-${
      currentSlide * 210 + currentSlide * 24
    }px)`;
  }, [currentSlide]);

  const postTerm = posts.postForPlanResponseDtos;

  const dayMax =
    postTerm !== undefined &&
    postTerm.filter((k) => k.day === day - 1).map((item, i) => item.id).length;

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
        {postTerm && postTerm.filter((k) => k.day === day - 1).length >= 6 && (
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
            (postTerm && postTerm.filter((k) => k.day === day - 1)).length -
              5 ? (
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
              .filter((k) => k.day === day - 1)
              .map((item, i) => (
                <Post
                  id={item.id}
                  posts={posts}
                  bookmarks={bookmarks}
                  setBmark={setBmark}
                  bmark={bmark}
                />
              ))}
          {/* 여기서 받는 day는 실제 날짜와 같음 */}
        </div>
      </div>
    </>
  );
}
export default Slider;
