import React, { useState, useEffect } from "react";
import axios from "axios";
import Icon from "./Icon";
import ModalPortal from "./ModalPortal";

function BookmarkPopup(props) {
  const [bmark, setBmark] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [bmarkinputValue, setBmarkinputValue] = useState("북마크");
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setBmark(null);
        setLoading(true);
        const response = await axios.get(
          // `http://34.64.93.115/plans/${props.id}`
          "http://localhost:8000/bookmark"
        );
        setBmark(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (!bmark) return null;

  const bmarklist = bmark.bookmarkResponseDtoList.length;
  console.log(bmarklist);
  // const bmarkArray = bmark.map((posts) => posts.title);
  // const bmarkIdArray = bmark.map((posts) => posts.id);
  // const bmarkIdMax = Math.max.apply(null, bmarkIdArray) + 1;
  // const inMyBookmark = "http://localhost:4000/bookmark/" + bmarkinputValue;
  // const styleValue = { background: "orange" };

  // console.log(inMyBookmark);
  return (
    <ModalPortal>
      {/* <div className="popupBackground">
        <div className="bmarkpopupBox">
          <div className="bmarkHeader">
            <div className="BmarkHead">{bmarkinputValue}(으)로 가져가기</div>
          </div>
          <img
            src="/images/planImg/bmarkexit.svg"
            className="bmarkexit"
            onClick={props.handleClose}
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
          <input
            className="addBmark"
            placeholder="북마크 추가"
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <Icon picture="addBmarkButton" className="addBmarkButton" />
          <button
            className="addBmarkButtonClick"
            onClick={() => {
              axios.post("http://localhost:4000/bookmark", {
                id: bmarkIdMax,
                title: searchValue,
              });
            }}
          />
          <div className="bmarklinetwo" />
          <button
            className="bamrkGet"
            onClick={() => {
              axios.post(inMyBookmark, {
                postTitle: props.postTitle,
                postPicture: props.postPicture,
                star: props.star,
                transport: props.transport,
                money: props.money,
                icon: props.icon,
                id: props.id,
              });
            }}
          >
            <Icon picture="bmarkGet" />
          </button>
          <button className="bmarkCancel" onClick={props.handleClose}>
            <Icon picture="bmarkCancel" />
          </button>
        </div>
      </div> */}
    </ModalPortal>
  );
}
export default BookmarkPopup;
