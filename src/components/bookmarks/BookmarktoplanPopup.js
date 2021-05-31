import React, { useState, useEffect } from "react";
import axios from "axios";
import Icon from "../plan/Icon";
import ModalPortal from "./ModalPortal";
import { withRouter } from "react-router-dom";
axios.defaults.baseURL = "http://34.64.93.115";
// axios.defaults.baseURL = "http://34.64.93.115";

function BookmarktoplanPopup(props) {
  const [bmark, setBmark] = useState([]);
  const [bmarkclosed, setBmarkclosed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [bmarkinputValue, setBmarkinputValue] = useState(`내 계획`);
  const [posts, setPosts] = useState([]);
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const returning = axios.get("/plans/mine/published").then((response) => {
    setBmark(response.data._embedded.planResponseDtoList);
  });
  const returning2 = axios.get("/plans/mine/closed").then((response) => {
    setBmarkclosed(response.data._embedded.planResponseDtoList);
  });
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;

  if (!bmark) return null;

  const bmarkList = bmark && bmark.map((k) => k);
  const bmarkNum = bmark && bmark.length;
  const bmarkclosedList = bmarkclosed && bmarkclosed.map((k) => k);

  const totalbmarklist = bmarkList.concat(bmarkclosedList);

  const bmarkclosedNum = bmarkclosed && bmarkclosed.length;
  // const bmarkList = bmarkLi && bmarkLi.map((k) => k);
  // const bmarkNum = bmarkLi && bmarkLi.map((k) => k).length;
  const bmarkArray = [];
  for (let i = 0; i < bmarkNum; i++) {
    bmarkArray.push(bmarkList[i].planTitle);
  }

  const bmarkIdArray = [];
  for (let i = 0; i < bmarkNum; i++) {
    bmarkIdArray.push(bmarkList[i].id);
  }
  const bmarkclosedArray = [];
  for (let i = 0; i < bmarkclosedNum; i++) {
    bmarkclosedArray.push(bmarkclosedList[i].planTitle);
  }

  const bmarkclosedIdArray = [];
  for (let i = 0; i < bmarkclosedNum; i++) {
    bmarkclosedIdArray.push(bmarkclosedList[i].id);
  }
  const totalArray = bmarkArray.concat(bmarkclosedArray);
  const totalIdArray = bmarkIdArray.concat(bmarkclosedIdArray);

  const thisBmark =
    totalArray && totalArray.filter((k) => k === bmarkinputValue);
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
  const checkdeplans = props.checkedplan;
  console.log(bmarkinputValue.id);

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

  const bringtoMyplan = (k) => {
    for (let i = 0; i < checkdeplans.length; i++) {
      axios.post(
        `http://34.64.93.115/bookmark/post/${checkdeplans[i]}/${bmarkinputValue.id}/checking`
      );
    }
  };

  return (
    <ModalPortal>
      <div className="toplanpopupBackground">
        <div className="bmarktoplanpopupBox">
          <div className="bmarkHeader">
            <div className="BmarktoplanHead">
              {bmarkinputValue.planTitle}(으)로 가져가기
            </div>
          </div>
          <img
            src="/images/planImg/bmarkexit.svg"
            className="bmarkexit"
            onClick={props.handleClose}
          />
          <div className="blank"></div>
          <div className="bmarkChoice">
            {totalbmarklist.map((num) => (
              <button
                className="bmarkName"
                onClick={() => setBmarkinputValue(num)}
              >
                <div className="bmarkNameText">{num.planTitle}</div>
              </button>
            ))}
          </div>
          <div className="bmarklineone" />
          <form onSubmit={handleSubmit}>
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
          {/* <div className="bmarklinetwo" /> */}
          <button className="bamrkGet" onClick={bringtoMyplan}>
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
export default withRouter(BookmarktoplanPopup);
