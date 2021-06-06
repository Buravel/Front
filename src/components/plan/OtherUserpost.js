import React from "react";
import Icon from "./Icon";
import Slider from "./Slider";

function OtherUserpost({ posts, bookmarks, bmark, setBmark }) {
  const thisLink = window.location.href;
  const Linkid = thisLink.split("plan/")[1];

  if (!posts) return null;

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
          <div className="dayBackground">
            <div className="dayName">{num}일차</div>
            <Icon picture="day" className="dayCircle" alt="날짜표시" />
            <div className="dayLine" />
            <div className="postlineContainer">
              <span className="hideDot" />
              <Slider
                day={num}
                posts={posts}
                bookmarks={bookmarks}
                setBmark={setBmark}
                bmark={bmark}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OtherUserpost;
