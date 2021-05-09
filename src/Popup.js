import React from "react";
import { exit } from "./image/iconimg";
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

const Popup = (props) => {
  return (
    <div className="popupBackground">
      <div className="popupBox">
        <div className="popupPicture"></div>
        <img src={exit} className="exit" onClick={props.handleClose} />
        <span className="popupList">
          <span className="popupTitle">제목</span>
          <span className="popupCost">비용</span>
          <span className="popupLocation">위치</span>
          <span className="popupvalue">평점</span>
          <span className="popupTag">해시태그</span>
          <span className="popupMemo">메모</span>
        </span>
        <span className="popupContent">
          <span className="popConTitle">[루프트한자] 이코노미</span>
          <img src={Airplane} alt="교통수단" className="popConIcon" />
          <span className="popConCost">120</span>
          <span className="popConCostname">만원</span>
          <span className="popConLocation">
            235 경기도 성남시 분당구 서현동
          </span>
          <span className="popConLocationLine"></span>
          <span className="popConStar">별 아이콘</span>
          <span className="popConTag">
            <span className="popConTagText">#루프트한자</span>
          </span>
          <span className="popConMemo">
            일주일 전에 구함ㅋㅋ..생각보다 편했다
          </span>
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
