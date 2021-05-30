import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Bookmark.scss";
import Icon from "./Bicon";

import ReactDOM, { createPortal } from "react-dom";
import ModalPortal from "./ModalPortal";

function DelBmark(props) {
  const [bookmarks, setBookmarks] = useState([]);
  const [title, setTitle] = useState("");
  const [deltitle, setDeltitle] = useState("");

  const url = "http://localhost:1000";
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

  const handleSubmit = (event) => {
    axios
      .post("http://localhost:1000/bookmark", { id: null, title: title })
      .then((res) => {
        setBookmarks([...bookmarks, res.data]);
      });
    setTitle("");
  };

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

  // idList = { handleDeltitleChange };
  return (
    <>
      {/* <ModalPortal> */}
      <meta charset="UTF-8" />
      <div className="popupbkdelBackground">
        <div className="popupbkBox">
          <div>
            {/* <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="title"
                    placeholder="북마크 이름"
                    onChange={handleTitleChange}
                  />
                  <button type="submit">북마크 추가</button>
                </form> */}
            {/* <form onSubmit={handledelSubmit}>
              <input
                type="text"
                name="title"
                placeholder="북마크 이름"
                onChange={handleDeltitleChange}
                className="addBmarkText"
              ></input> */}

            {/* onChange가 할당받은 값으로 바뀌어야함 */}
            <button
              type="submit"
              className="delBmarkBtn"
              onClick={handledelSubmit}
            >
              삭제
            </button>
            {/* </form> */}
          </div>
        </div>

        {props.content}
      </div>
      {/* </ModalPortal> */}
    </>
  );
}

export default DelBmark;
