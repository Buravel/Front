import React, { useState, useEffect } from "react";
import Bicon from "./Bicon";
import axios from "axios";
import BookmarkPost from "./BookmarkPost";

function BookmarkDetail() {
  const [state, setState] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [postClick, setpostClick] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const response = await axios("http://localhost:1000/bookmark");
      setBookmarks(response.data);
    };
    fetchBookmarks();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:8080/post");
      setPosts(response.data);
    };

    fetchPosts();
  }, []);
  if (!posts) return null;
  //나중에 필터로 한 북마크에 있는 id를 추출하게 해야함
  const handleChange = (selectedItem) => {
    if (state.includes(selectedItem)) {
      setState(state.filter((item) => item !== selectedItem));

      return;
    }
    setState([...state, selectedItem]);
  };

  const clickChange = () => setpostClick(!postClick);
  const bmarkID = bookmarks.map((k) => k.id);

  return (
    <div className="bkDtBackground">
      <div className="btDTpage">
        <div className="bkDtName">
          <span className="bkDtNamefirst">강릉</span>
          <span className="bkDtNamesecond">(12)</span>
          <Bicon picture="nameEdit" className="bkDtNameEdit" />
        </div>

        <Bicon picture="bringtoPlan" className="bkDtPlanEdit" />
        <Bicon picture="BookmarkDeleteButton" className="bkDtDelete" />
        <div className="bkDtpostBackground">
          {/* <BookmarkPost id="45" />
          <BookmarkPost id="45" />
          <BookmarkPost id="45" private="true" />
          <BookmarkPost id="45" />
          <BookmarkPost id="45" />
          <BookmarkPost id="45" />
          <BookmarkPost id="45" /> */}
          {bmarkID.map((item) => (
            <span className="bringbmarkClickbox">
              <button
                onClick={() => handleChange(item)}
                className="bringbmarkClick"
              />
              <BookmarkPost thisId={item} clicked={state} />
            </span>
          ))}
        </div>
        <div className="bkDtpostBackgroundbuttom" />
      </div>
    </div>
  );
}
export default BookmarkDetail;
