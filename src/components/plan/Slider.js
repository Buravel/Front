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
        const response = await axios.get("http://localhost:4000/posts");
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

  const newArray = posts.map((posts) => posts.day);
  const dayMax = Math.max.apply(null, newArray);

  function daycountArray(a) {
    return posts.filter((k) => k.day === a);
  }
  function Lineposts(e) {
    return posts.filter((k) => k.day === e);
  }
  const dayArray = [];
  for (let i = 1; i <= dayMax; i++) {
    dayArray.push(i);
  }
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
  console.log(currentSlide);
  function Lineposts(e) {
    return posts.filter((k) => k.day === e);
  }

  return (
    <>
      <div className="BContainer">
        {daycountArray(1).length >= 6 && (
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
            {currentSlide === daycountArray(props.day).length - 5 ? (
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
          {Lineposts(props.day).map((a) => (
            <Post
              postPicture={a.picture}
              transport={a.body}
              postTitle={a.title}
              nameIcon={a.sorts}
              rate={a.rate}
              postMoney={a.money}
              id={a.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Slider;
