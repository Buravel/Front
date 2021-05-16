import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Popup";
import Appstyle from "./Appstyle.css";
import Postconnect from "./Postconnect";
import Icon from "./Icon";
import BookmarkPopup from "./BookmarkPopup";

function Post(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isbmarkOpen, setBmarkisOpen] = useState(false);
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

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggleBmarkPopup = () => {
    setBmarkisOpen(!isbmarkOpen);
  };

  function HashTagArray(a) {
    return posts.filter((k) => k.id === a);
  }
  const hash = HashTagArray(props.id).map((posts) => posts.hashtag);

  const hashTags = hash.pop();
  if (!hashTags) return null;

  console.log(isOpen);
  return (
    <>
      <Postconnect />

      <div className="postBox">
        <input type="button" onClick={togglePopup} className="postButton" />
        <div className="bmark">
          <input
            type="button"
            onClick={toggleBmarkPopup}
            className="bmarkButton"
          />
          <Icon picture="bookmark" className="postBookmarkIcon" />
        </div>

        <div className="postPicture">
          <img src={props.postPicture} className="postPictureArray" />
        </div>
        <div className="postContent">
          <span className="postName">
            [{props.transport}] {props.postTitle}
          </span>
          <Icon picture={props.nameIcon} className="postNameIcon" />
          <Icon picture="rating" className="postRateIcon" />
          <span className="rateValue">{props.rate}</span>
          <span className="money">{props.postMoney}</span>
          <span className="moneyName">만원</span>
          <span className="hashTagLine">
            {hashTags.map((num) => (
              <span className="postHashTag">#{num}</span>
            ))}
          </span>
        </div>
        {isOpen && (
          <Popup
            postTitle={props.postTitle}
            postPicture={props.postPicture}
            star={props.rate}
            transport={props.transport}
            money={props.postMoney}
            icon={props.nameIcon}
            handleClose={togglePopup}
            id={props.id}
          />
        )}
        {isbmarkOpen && (
          <BookmarkPopup
            postTitle={props.postTitle}
            star={props.rate}
            handleClose={toggleBmarkPopup}
          />
        )}
      </div>
    </>
  );
}

export default Post;
