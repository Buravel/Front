import React, { useState, useEffect } from "react";
import axios from "axios";
import HalfStar from "./HalfStar";
import Icon from "./Icon";
import BookmarkPopup from "./BookmarkPopup";
import ReactDOM, { createPortal } from "react-dom";
import ModalPortal from "./ModalPortal";
import { Link } from "react-router-dom";

function Popup({
  category,
  iflogin,
  postTitle,
  postPicture,
  star,
  money,
  icon,
  handleClose,
  id,
  location,
  memo,
  tags,
  posts,
  bookmarks,
  setBmark,
  bmark,
}) {
  const [isbmarkOpen, setBmarkisOpen] = useState(false);
  const thisLink = window.location.href;
  const Linkid = thisLink.split("plan/")[1];
  const toggleBmarkPopup = () => {
    setBmarkisOpen(!isbmarkOpen);
  };

  const starArray = [];

  // const postTerm = posts && posts.postForPlanResponseDtos;
  // const postId = postTerm && postTerm.filter((k) => k.id === props.id);
  // const hashTag = postId && postId.map((k) => k.postTagResponseDtoList)[0];
  // const postImg = postId && postId.map((k) => k.postImage)[0];
  // const category = postId && postId.map((k) => k.category)[0];

  // const tags = tags;
  // const postMemo = postId && postId.map((k) => k.memo)[0];

  if (star % 1 === 0) {
    for (let i = 0; i < star; i++) {
      starArray.push(i);
    }
  } else {
    for (let i = 0; i < star - 1; i++) {
      starArray.push(i);
    }
  }
  const modalRoot = document.getElementById("root");
  function NumComma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <ModalPortal>
        <div className="popupbmarkpopup">
          {isbmarkOpen && (
            <>
              {/* <Link to="/bookmark"> */}
              <BookmarkPopup
                bookmarks={bookmarks}
                postTitle={postTitle}
                postPicture={postPicture}
                star={star}
                money={money}
                icon={category}
                id={id}
                thisplanId={Linkid}
                handleClose={toggleBmarkPopup}
                setBmark={setBmark}
                bmark={bmark}
              />
              {/* </Link> */}
            </>
          )}
        </div>

        <div className="popupBackground">
          <div className="popupBox">
            {iflogin !== null && (
              <div className="pupbmark">
                <input
                  type="button"
                  onClick={toggleBmarkPopup}
                  className="popupBookmarkbutton"
                />
                <img
                  src="/images/planImg/bookmark.svg"
                  className="popupBookmark"
                />
              </div>
            )}
            {postPicture == "" ? (
              <img
                src={`/images/planImg/default${category}.png`}
                className="popupPicture"
              />
            ) : (
              <img
                src={`data:image/png;base64,${postPicture}`}
                className="popupPicture"
              />
            )}

            <span className="popupList">
              <span className="popupTitle">??????</span>
              <span className="popupCost">??????</span>
              <span className="popupLocation">??????</span>
              <span className="popupvalue">??????</span>
              <span className="popupTag">????????????</span>
              <span className="popupMemo">??????</span>
            </span>
            <span className="popupContent">
              <span className="thispopupTitle">
                <span className="popConTitle">{postTitle}</span>
                <Icon picture={icon} className="popConIcon" />
              </span>
              <span className="popConCostAll">
                <span className="popConCost">{NumComma(money * 10000)}</span>
                <span className="popConCostname">???</span>
              </span>
              <span className="popConLocation">{location}</span>
              <span className="popConLocationLine"></span>
              <span className="popConStar">
                {starArray.map(() => (
                  <>
                    <Icon picture="rating" className="popupStar" />
                  </>
                ))}

                {star % 1 !== 0 && <HalfStar />}
              </span>
              <span className="popConTag">
                {tags &&
                  tags.map((num) => (
                    <span className="popConTagText">#{num}</span>
                  ))}
              </span>
              <span className="popConMemo">{memo} </span>
            </span>
          </div>
          <img
            src="/images/planImg/closeButton.svg"
            className="exit"
            onClick={handleClose}
          />
        </div>
      </ModalPortal>
    </>
  );
}

export default Popup;
