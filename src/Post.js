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
import Postconnect from "./Postconnect";

function Post(props) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  console.log(props.handleClose);
  const Icon = props.nameIcon;
  console.log(Icon);
  return (
    <>
      <Postconnect />
      <div className="postBox">
        <input type="button" onClick={togglePopup} className="postButton" />

        <div className="postPicture">
          <img src={props.postpicture} className="postPictureArray" />
          <img src={bookmark} alt="북마크" className="postBookmarkIcon" />
        </div>
        <div className="postContent">
          <span className="postName">
            [{props.transport}] {props.posttitle}
          </span>
          <img src={Airplane} alt="교통" className="postNameIcon" />
          <img src={rating} alt="평점" className="postRateIcon" />
          <span className="rateValue">4.5</span>
          <span className="money">120</span>
          <span className="moneyName">만원</span>
          <span className="postHashTag">#KTX</span>
        </div>
        {isOpen && (
          <Popup posttitle={props.posttitle} handleClose={togglePopup} />
        )}
      </div>
    </>
  );
}

export default Post;
