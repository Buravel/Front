import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Bookmark.scss";
import Bicon from "./Bicon";
import AddBmark from "./AddBmark";
import DelBmark from "./DelBmark";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  HashRouter,
} from "react-router-dom";
import BookmarkDetail from "./BookmarkDetail";

function BookmarkMain() {
  const [isOpen, setIsOpen] = useState(false);
  const [isdelOpen, setdelIsOpen] = useState(false);
  const [isdetailOpen, setdetailOpen] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);
  const [title, setTitle] = useState("");

  const url = "http://localhost:1000";
  useEffect(() => {
    const fetchBookmarks = async () => {
      const response = await axios("http://localhost:1000/bookmark");
      setBookmarks(response.data);
    };
    fetchBookmarks();
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggledelPopup = () => {
    setdelIsOpen(!isdelOpen);
  };
  const toggledetailPopup = () => {
    setdetailOpen(!isdetailOpen);
  };
  const bmarkList = bookmarks.bookmarkplan;
  const bmarkListN = bookmarks.map((k) => k);
  const bmarknumber = [];
  for (let i = 0; i <= bmarkListN.length; i++) {
    bmarknumber.push(bmarkList && bmarkList.map((k) => k));
  }
  const bmarkListNum = bmarkList && bmarkList.map((k) => k);

  console.log(bmarkList);
  function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    return (
      <>
        <BookmarkDetail />
      </>
    );
  }

  return (
    <>
      <HashRouter basename="">
        <div>
          <Switch>
            <Route path="/:id" children={<Child />} />
          </Switch>
          {isdetailOpen && (
            <div>
              <div className="bookmarkbackground">
                <span className="bookmarkTitle">
                  <span className="bookmarkMaintitle">북마크</span>
                  <span className="bookmarkSubtitle">({bookmarks.length})</span>
                </span>
                <button className="bookmarkAddbtn" onClick={togglePopup}>
                  <Bicon
                    picture="BookmarkAddbutton"
                    className="BookmarkAddbutton"
                  />
                </button>
                <button className="bookmarkDelbtn" onClick={toggledelPopup}>
                  <Bicon
                    picture="BookmarkDeletebutton"
                    className="BookmarkDeletebutton"
                  />
                </button>
              </div>
              <div className="bmarkTitlebuttom" />
              <div className="bmarkPostBackground">
                {bmarkListN.map((item) => (
                  <Link to={"/" + item.id}>
                    <span className="bmarkptbk">
                      <span
                        className="bmarkPhotobk"
                        onClick={toggledetailPopup}
                      >
                        <span className="bptl">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVRuHiPl5TVXtmxi1RvHyczQglb9OosvC5Q&usqp=CAU"
                            className="bkimg1"
                          />
                        </span>
                        <span className="bptr">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVRuHiPl5TVXtmxi1RvHyczQglb9OosvC5Q&usqp=CAU"
                            className="bkimg2"
                          />
                        </span>
                        <span className="bpbl">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVRuHiPl5TVXtmxi1RvHyczQglb9OosvC5Q&usqp=CAU"
                            className="bkimg3"
                          />
                        </span>
                        <span className="bpbr">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVRuHiPl5TVXtmxi1RvHyczQglb9OosvC5Q&usqp=CAU"
                            className="bkimg4"
                          />
                        </span>
                        <span className="bkname">
                          {item.title}({})
                        </span>
                      </span>
                    </span>
                  </Link>
                ))}

                {isOpen && <AddBmark handleClose={togglePopup} />}
                {isdelOpen && <DelBmark handleClose={toggledelPopup} />}
              </div>
            </div>
          )}
        </div>
      </HashRouter>
    </>
  );
}
export default BookmarkMain;
