import React, { useState, useEffect } from "react";
import axios from "axios";
import HalfStar from "./HalfStar";
import Icon from "./Icon";

const Popup = (props) => {
  const starArray = [];

  if (props.star % 1 === 0) {
    for (let i = 0; i < props.star; i++) {
      starArray.push(i);
    }
  } else {
    for (let i = 0; i < props.star - 1; i++) {
      starArray.push(i);
    }
  }

  return (
    <div className="popupBackground">
      <div className="popupBox">
        <img src={props.postPicture} className="popupPicture" />
        <img
          src="/images/planImg/exit.svg"
          className="exit"
          onClick={props.handleClose}
        />
        <span className="popupList">
          <span className="popupTitle">제목</span>
          <span className="popupCost">비용</span>
          <span className="popupLocation">위치</span>
          <span className="popupvalue">평점</span>
          <span className="popupTag">해시태그</span>
          <span className="popupMemo">메모</span>
        </span>
        <span className="popupContent">
          <span className="popConTitle">
            [{props.transport}] {props.postTitle}
          </span>
          <Icon picture={props.icon} className="popConIcon" />
          <span className="popConCost">{props.money}</span>
          <span className="popConCostname">만원</span>
          <span className="popConLocation">{props.location}</span>
          <span className="popConLocationLine"></span>
          <span className="popConStar">
            {starArray.map(() => (
              <>
                <Icon picture="rating" className="popupStar" />
              </>
            ))}

            {props.star % 1 !== 0 && <HalfStar />}
          </span>
          <span className="popConTag"></span>
          <span className="popConMemo">{props.memo} </span>
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
