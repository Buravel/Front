import React, { useState, useEffect } from "react";
import axios from "axios";
import Icon from "./Icon";
import ModalPortal from "./ModalPortal";
import { withRouter } from "react-router-dom";
axios.defaults.baseURL = "http://34.64.93.115";
// axios.defaults.baseURL = "http://34.64.93.115";

function BookmarkPopup({
  bookmarks,
  postTitle,
  postPicture,
  star,
  money,
  icon,
  id,
  thisplanId,
  handleClose,
  bmark,
  setBmark,
}) {
  // const [currentbmark, setcurrentbmark] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [bmarkinputValue, setBmarkinputValue] = useState("북마크");
  const [posts, setPosts] = useState([]);
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const bmarkList = bmark && bmark.map((k) => k);
  const bmarkNum = bmark && bmark.length;
  // const bmarkList = bmarkLi && bmarkLi.map((k) => k);
  // const bmarkNum = bmarkLi && bmarkLi.map((k) => k).length;
  const bmarkArray = [];
  for (let i = 0; i < bmarkNum; i++) {
    bmarkArray.push(bmarkList[i].bookmarkTitle);
  }
  const bmarkIdArray = [];
  for (let i = 0; i < bmarkNum; i++) {
    bmarkIdArray.push(bmarkList[i].id);
  }

  const thisBmark =
    bmarkList && bmarkList.filter((k) => k.bookmarkTitle === bmarkinputValue);

  const thisBmarkId = thisBmark && thisBmark.map((k) => k.id)[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://34.64.93.115/bookmark`, {
        bookmarkTitle: searchValue,
      })
      .then((res) => {
        setBmark(
          bmark == undefined || bmark == "" ? [res.data] : [...bmark, res.data]
        );
      });
    setSearchValue("");
  };

  return (
    <ModalPortal>
      <div className="popupBackground">
        <div className="bmarkpopupBox">
          <div className="bmarkHeader">
            <div className="BmarkHead">{bmarkinputValue}(으)로 가져가기</div>
          </div>
          <img
            src="/images/planImg/bmarkexit.svg"
            className="bmarkexit"
            onClick={handleClose}
          />
          <div className="blank"></div>
          <div className="bmarkChoice">
            {bmarkArray.map((num) => (
              <button
                className="bmarkName"
                onClick={() => setBmarkinputValue(num)}
              >
                <div className="bmarkNameText">{num}</div>
              </button>
            ))}
          </div>
          <div className="bmarklineone" />
          <form onSubmit={handleSubmit}>
            <input
              className="addBmark"
              placeholder="북마크 추가"
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <Icon picture="addBmarkButton" className="addBmarkButton" />
            <button className="addBmarkButtonClick" type="submit" />
          </form>
          <div className="bmarklinetwo" />
          <button
            className="bamrkGet"
            onClick={() => {
              axios.post(
                `http://34.64.93.115/bookmark/post/${thisBmarkId}/${id}`
              );

              alert(`북마크에 추가되었습니다`);
            }}
          >
            <Icon picture="bmarkGet" />
          </button>
          <button className="bmarkCancel" onClick={handleClose}>
            <Icon picture="bmarkCancel" />
          </button>
        </div>
      </div>
    </ModalPortal>
  );
}
export default withRouter(BookmarkPopup);
