import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Bookmark.scss";
import Icon from "./Bicon";

import ReactDOM, { createPortal } from "react-dom";
import ModalPortal from "./ModalPortal";

function AddBmark(props) {
  const [bookmarks, setBookmarks] = useState([]);
  const [title, setTitle] = useState("");
  const [deltitle, setDeltitle] = useState("");
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  useEffect(() => {
    const fetchBookmarks = async () => {
      const response = await axios("http://localhost:1000/bookmark");
      setBookmarks(response.data);
    };
    fetchBookmarks();
  }, []);
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDeltitleChange = (event) => {
    setDeltitle(event.target.value);
  };
  const AB = props.id;

  const handleSubmit = (event) => {
    axios.patch(`http://localhost:1000/bookmark/?id=${AB}`, {
      title: title,
    });
    // .then((res) => {
    //   setBookmarks([...bookmarks, res.data]);
    // });
    setTitle("");
  };
  console.log(title);
  const bkI = bookmarks.filter((k) => k.title === deltitle);
  const bkId = bkI.map((e) => e.id)[0];
  //map으로 한 다음 추출할것
  const handledelSubmit = (event) => {
    axios.delete(`http://localhost:1000/bookmark/${bkId}`);
    //   .then((res) => {
    //     setBookmarks([...bookmarks, res.data]);
    //   });
    setDeltitle("");
  };
  return (
    <>
      <ModalPortal>
        <meta charset="UTF-8" />
        <div className="popupbkBackground">
          <div className="popupbkBox">
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="북마크 이름"
                  onChange={handleTitleChange}
                  className="addBmarkText"
                />
                <button type="submit" className="addBmarkBtn">
                  이름 변경
                </button>
              </form>
              {/* <form onSubmit={handledelSubmit}>
                  <input
                    type="text"
                    name="title"
                    placeholder="북마크 이름"
                    onChange={handleDeltitleChange}
                  />
                  <button type="submit">북마크 제거</button>
                </form> */}
            </div>
          </div>
        </div>
      </ModalPortal>
    </>
  );
}

export default AddBmark;
