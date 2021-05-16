import React, { useState, useEffect } from "react";
import axios from "axios";
import HalfStar from "./HalfStar";
import Icon from "./Icon";
import BookmarkPopup from "./BookmarkPopup";

function Popup(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isbmarkOpen, setBmarkisOpen] = useState(false);
  const toggleBmarkPopup = () => {
    setBmarkisOpen(!isbmarkOpen);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setPosts(null);
        setLoading(true);
        const response = await axios.get("http://localhost:4000/posts");
        setPosts(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);
  if (!posts) return null;

  function HashTagArray(a) {
    return posts.filter((k) => k.id === a);
  }
  const hash = HashTagArray(props.id).map((posts) => posts.hashtag);

  const hashTags = hash.pop();
  if (!hashTags) return null;
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
    <>
      <div className="popupbmarkpopup">
        {isbmarkOpen && (
          <BookmarkPopup
            postTitle={props.postTitle}
            star={props.rate}
            handleClose={toggleBmarkPopup}
          />
        )}
      </div>
      <div className="popupBackground">
        <div className="popupBox">
          <div className="pupbmark">
            <input
              type="button"
              onClick={toggleBmarkPopup}
              className="popupBookmarkbutton"
            />
            <img src="/images/planImg/bookmark.svg" className="popupBookmark" />
          </div>
          <img src={props.postPicture} className="popupPicture" />

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
            <span className="popConTag">
              {hashTags.map((num) => (
                <span className="popConTagText">#{num}</span>
              ))}
            </span>
            <span className="popConMemo">{props.memo} </span>
          </span>
          {props.content}
        </div>
        <img
          src="/images/planImg/closeButton.svg"
          className="exit"
          onClick={props.handleClose}
        />
      </div>
    </>
  );
}

export default Popup;
