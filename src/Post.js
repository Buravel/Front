import React, { useState } from "react";
import Popup from "./Popup";
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
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="postBox" onClick={togglePopup}>
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
        {isOpen && (
          <Popup
            content={
              <>
                {/* <div>시범내용</div> */}
                {/* 여기에 변수내용 입력할 것 */}
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </>
  );
}

export default Post;
