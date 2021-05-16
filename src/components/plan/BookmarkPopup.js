import React, { useState, useEffect } from "react";
import axios from "axios";
import Icon from "./Icon";

function BookmarkPopup(props) {
  const [bmark, setBmark] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setBmark(null);
        setLoading(true);
        const response = await axios.get("http://localhost:4000/bookmark");
        setBmark(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (!bmark) return null;
  const bmarkArray = bmark.map((posts) => posts.title);
  const bmarkIdArray = bmark.map((posts) => posts.id);
  const bmarkIdMax = Math.max.apply(null, bmarkIdArray) + 1;

  return (
    <div className="popupBackground">
      <div className="bmarkpopupBox">
        <div className="bmarkHeader">
          <div className="BmarkHead">북마크로 가져가기</div>
        </div>
        <img
          src="/images/planImg/bmarkexit.svg"
          className="bmarkexit"
          onClick={props.handleClose}
        />
        <div className="blank"></div>
        <div className="bmarkChoice">
          {bmarkArray.map((num) => (
            <div className="bmarkName">
              <div className="bmarkNameText">{num}</div>
            </div>
          ))}
        </div>
        <div className="bmarklineone" />
        <input className="addBmark" placeholder="북마크 추가" />
        <Icon picture="addBmarkButton" className="addBmarkButton" />
        <div className="bmarklinetwo" />
        <button
          className="bamrkGet"
          onClick={() => {
            axios.post("http://localhost:4000/bookmark", {
              id: bmarkIdMax,
              title: "",
            });
          }}
        >
          <Icon picture="bmarkGet" />
        </button>
        <button className="bmarkCancel" onClick={props.handleClose}>
          <Icon picture="bmarkCancel" />
        </button>
      </div>
    </div>
  );
}
export default BookmarkPopup;
