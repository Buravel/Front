import React, { useState, useEffect } from "react";
import Bicon from "./Bicon";
import axios from "axios";
import BookmarkPost from "./BookmarkPost";

function BookmarkDetail() {
  const [state, setState] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [postClick, setpostClick] = useState(false);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const response = await axios("http://localhost:1000/bookmark");
      setBookmarks(response.data);
    };
    fetchBookmarks();
  }, []);

  const handleChange = (selectedItem) => {
    if (state.includes(selectedItem)) {
      setState(state.filter((item) => item !== selectedItem));

      return;
    }
    setState([...state, selectedItem]);
  };
  const bmarkID = bookmarks.map((k) => k.id);
  console.log(state);
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
          <BookmarkPost id="45" />
          <BookmarkPost id="45" />
          <BookmarkPost id="45" private="true" />
          <BookmarkPost id="45" />
          <BookmarkPost id="45" />
          <BookmarkPost id="45" />
          <BookmarkPost id="45" />
          {bmarkID.map((item) => (
            <>
              <li onClick={() => handleChange(item)}>
                <BookmarkPost ifClick={postClick} thisid={item} />
              </li>
            </>
          ))}
        </div>
        <div className="bkDtpostBackgroundbuttom" />
      </div>
    </div>
  );
}
export default BookmarkDetail;
