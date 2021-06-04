import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Popup";
import Appstyle from "./Planstyle.scss";
import Postconnect from "./Postconnect";
import Icon from "./Icon";
import BookmarkPopup from "./BookmarkPopup";

function Post({ id, posts, bookmarks, bmark, setBmark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isbmarkOpen, setBmarkisOpen] = useState(false);
  const thisLink = window.location.href;
  const Linkid = thisLink.split("plan/")[1];
  // let token = localStorage.getItem("token");
  // token = token.replace(/"/g, "");
  // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // const corsOptions = {
  //   origin: "*",
  //   credentials: true,
  //   methods: ["GET", "POST", "OPTIONS"],
  //   allowedHeaders: ["Content-Type", "Authorization"],
  // };

  // middleware handle all request using cors options

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggleBmarkPopup = () => {
    setBmarkisOpen(!isbmarkOpen);
  };
  const postTerm = posts.postForPlanResponseDtos;

  const postId =
    postTerm !== null &&
    postTerm !== [] &&
    postTerm !== undefined &&
    postTerm.filter((k) => k.id === id);
  const category = postId && postId.map((k) => k.category)[0];
  const postImg = postId && postId.map((k) => k.postImage)[0];
  const price = postId && postId.map((k) => k.price)[0];
  const postTitle = postId && postId.map((k) => k.postTitle)[0];
  const rating = postId && postId.map((k) => k.rating)[0];
  const location = postId && postId.map((k) => k.location)[0];
  const memo = postId && postId.map((k) => k.memo)[0];
  const hashTag = postId && postId.map((k) => k.postTagResponseDtoList)[0];

  const tags = hashTag && hashTag.map((k) => k).length;
  const tagsLINE = hashTag && hashTag.map((k) => k.postTagTitle);

  return (
    <>
      <Postconnect />

      <div className="postBox">
        <input type="button" onClick={togglePopup} className="postButton" />
        {bookmarks !== null && (
          <div className="bmark">
            <input
              type="button"
              onClick={toggleBmarkPopup}
              className="bmarkButton"
            />
            <Icon picture="bookmark" className="postBookmarkIcon" />
          </div>
        )}

        <div className="postPicture">
          {postImg == "" ? (
            <img
              src={`/images/planImg/default${category}.png`}
              className="postPictureArray"
            />
          ) : (
            <img
              src={`data:image/png;base64,${postImg}`}
              className="postPictureArray"
            />
          )}
        </div>
        <div className="postContent">
          <span className="postName">{postTitle}</span>
          <Icon picture={category} className="postNameIcon" />
          <Icon picture="rating" className="postRateIcon" />
          <span className="rateValue">{rating}</span>
          <div className="moneyBox">
            <span className="money">{(String(price) / 10000).toFixed(1)}</span>
            <span className="moneyName">만원</span>
          </div>
          <span className="hashTagLine">
            {tagsLINE && tagsLINE[0] === ""
              ? ""
              : tagsLINE &&
                tagsLINE.map((num) => (
                  <span className="postHashTag">#{num}</span>
                ))}
            {/* 여기 주석은 풀지말것 */}
            {/* {hashTags.map((num) => (
              <span className="postHashTag">#{num}</span>
            ))} */}
          </span>
        </div>
        {isOpen && (
          <Popup
            category={category}
            iflogin={bookmarks}
            postTitle={postTitle}
            postPicture={postImg}
            star={rating}
            money={(String(price) / 10000).toFixed(1)}
            icon={category}
            handleClose={togglePopup}
            id={id}
            location={location}
            memo={memo}
            tags={tagsLINE}
            posts={posts}
            bookmarks={bookmarks}
            setBmark={setBmark}
            bmark={bmark}
          />
        )}
        {isbmarkOpen && (
          <BookmarkPopup
            bookmarks={bookmarks}
            postTitle={postTitle}
            postPicture={postImg}
            star={rating}
            money={String(price) / 10000}
            icon={category}
            id={id}
            thisplanId={Linkid}
            handleClose={toggleBmarkPopup}
            setBmark={setBmark}
            bmark={bmark}
          />
        )}
      </div>
    </>
  );
}

export default Post;
