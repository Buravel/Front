import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "./Popup";
import Appstyle from "./Planstyle.scss";
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
        const response = await axios.get("http://localhost:8080/post");
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
  const postTerm = posts.postForPlanResponseDtos;
  const postId = postTerm && postTerm.filter((k) => k.id === props.id);
  const category = postId && postId.map((k) => k.category)[0];
  const postImg = postId && postId.map((k) => k.postImage)[0];
  const price = postId && postId.map((k) => k.price)[0];
  const postTitle = postId && postId.map((k) => k.postTitle)[0];
  const rating = postId && postId.map((k) => k.rating)[0];
  const hashTag = postId && postId.map((k) => k.postTagResponseDtoList);
  const tags = hashTag && hashTag.map((k) => k).length;
  const tagsArray = [];
  for (let i = 0; i <= tags; i++) {
    tagsArray.push(hashTag && hashTag.map((k) => k[i].postTagTitle));
  }
  const K = [];
  for (let i = 0; i < tagsArray.length - 1; i++) {
    K.push(tagsArray && tagsArray.map((k) => k[i]));
  }
  const tagTitle = K[0];
  console.log(tagTitle);

  // function HashTagArray(a) {
  //   if (postTerm && postTerm.filter((k) => k.id === a)) {
  //     return postTerm.filter((k) => k.id === a);
  //   } else {
  //     return "";
  //   }
  // }

  // const hash = postTerm && HashTagArray(props.id).map((posts) => posts.hashtag);

  // const hashTags = hash.pop();
  // if (!hashTags) return null;

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
          <img src={postImg} className="postPictureArray" />
        </div>
        <div className="postContent">
          <span className="postName">{postTitle}</span>
          <Icon picture={category} className="postNameIcon" />
          <Icon picture="rating" className="postRateIcon" />
          <span className="rateValue">{rating}</span>
          <div className="moneyBox">
            <span className="money">
              {String(price).substr(0, String(price).length - 4)}
            </span>
            <span className="moneyName">만원</span>
          </div>
          <span className="hashTagLine">
            {tagTitle &&
              tagTitle.map((num) => (
                <span className="postHashTag">#{num}</span>
              ))}
            {/* {hashTags.map((num) => (
              <span className="postHashTag">#{num}</span>
            ))} */}
          </span>
        </div>
        {isOpen && (
          <Popup
            postTitle={postTitle}
            postPicture={postImg}
            star={rating}
            // transport={category}
            money={String(price).substr(0, String(price).length - 4)}
            icon={category}
            handleClose={togglePopup}
            id={props.id}
          />
        )}
        {isbmarkOpen && (
          <BookmarkPopup
            postTitle={postTitle}
            postPicture={postImg}
            star={rating}
            // transport={props.transport}
            money={String(price).substr(0, String(price).length - 4)}
            icon={category}
            id={props.id}
            handleClose={toggleBmarkPopup}
          />
        )}
      </div>
    </>
  );
}

export default Post;
