import React, { useState, useEffect } from "react";
import axios from "axios";
import Icon from "./Icon";
import ModalPortal from "./ModalPortal";
import { withRouter } from "react-router-dom";
axios.defaults.baseURL = "http://34.64.93.115";
// axios.defaults.baseURL = "http://34.64.93.115";

function BookmarkPopup(props) {
  const [bmark, setBmark] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [bmarkinputValue, setBmarkinputValue] = useState("북마크");
  const [posts, setPosts] = useState([]);
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const returning = axios.get("/bookmark").then((response) => {
    setBmark(response.data._embedded.bookmarkResponseDtoList);
  });
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;

  if (!bmark) return null;

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

  const thisBmarkId = thisBmark.map((k) => k.id)[0];

  // const bmarkArray = bmark.map((posts) => posts.title);
  // const bmarkIdArray = bmark.map((posts) => posts.id);
  const bmarkIdMax = Math.max.apply(null, bmarkIdArray) + 1;
  const inMyBookmark =
    "http://localhost:8000/bookmark/mybookmark" + bmarkinputValue;
  // const styleValue = { background: "orange" };

  // console.log(inMyBookmark);

  const postTerm = posts.postForPlanResponseDtos;
  const postId = postTerm && postTerm.filter((k) => k.id === props.id);
  const thisPost = postId && postId[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("bookmark", {
        bookmarkTitle: searchValue,
      })
      .then((res) => {
        setBmark([...bmark, res.data]);
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
          <form onSubmit={handleSubmit}>
            <input
              className="addBmark"
              placeholder="북마크 추가"
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <Icon picture="addBmarkButton" className="addBmarkButton" />
            <button
              className="addBmarkButtonClick"
              type="submit"
              // onClick={() => {
              //   axios.post(
              //     `http://34.64.93.115/bookmark/post/${thisBmarkId}/${props.id}`
              //   );
              // }}
              //     {
              //       id: bmarkIdMax,
              //       bookmarkTitle: searchValue,
              //     }
              //   accountResponseDto: {
              //     id: props.id,
              //     username: props.username,
              //     profileImage: props.profileImage,
              //     email: props.email,
              //     emailVerified: props.emailVerified,
              //   },
              //   bookmarkPostResponseDtos: props.bookmarkPostResponseDtos,
              //   bookmarkImages: props.bookmarkImages,
              //   _links: {
              //     self: {
              //       href: `http://localhost:8080/bookmark/${bmarkIdMax}`,
              //     },
              //   },
              // });
              // );
              // }}
            />
          </form>
          <div className="bmarklinetwo" />
          <button
            className="bamrkGet"
            onClick={() => {
              axios.post(
                `http://34.64.93.115/bookmark/post/${thisBmarkId}/${props.id}`,
                alert(`북마크에 추가되었습니다`)
              );
            }}
          >
            <Icon picture="bmarkGet" />
          </button>
          <button className="bmarkCancel" onClick={props.handleClose}>
            <Icon picture="bmarkCancel" />
          </button>
        </div>
      </div>
    </ModalPortal>
  );
}
export default withRouter(BookmarkPopup);
