import React from "react";
import Appstyle from "./Appstyle.css";
import {
  Airplane,
  bed,
  bookmark,
  buravelIcon,
  bus,
  day,
  dayLine,
  etc,
  food,
  landmark,
  mapButton,
  menu,
  nextButton,
  rating,
  search,
  shopping,
} from "./image/iconimg";

function Post() {
  return (
    <>
      <div className="postBox">
        <div className="postPicture">
          <img src={bookmark} alt="북마크" className="postBookmarkIcon" />
        </div>
        <div className="postContent">
          <span className="postName">[루프트한자] 이코노미</span>
          <img src={Airplane} alt="교통" className="postNameIcon" />
          <img src={rating} alt="평점" className="postRateIcon" />
          <span className="rateValue">4.5</span>
          <span className="money">120</span>
          <span className="moneyName">만원</span>
          <span className="postHashTag">#KTX</span>
        </div>
      </div>
    </>
  );
}

export default Post;
