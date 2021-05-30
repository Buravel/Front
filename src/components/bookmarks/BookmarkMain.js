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
import BmarkNum from "./BmarkNum";

function BookmarkMain() {
  const [isOpen, setIsOpen] = useState(false);
  const [isdelOpen, setdelIsOpen] = useState(false);
  const [isdetailOpen, setdetailOpen] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarksdata, setBookmarksdata] = useState([]);

  const [title, setTitle] = useState("");
  const thisLink = window.location.href;
  const Linkid = thisLink.split("plan/")[1];
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const returning = axios
    .get("http://34.64.93.115/bookmark")
    .then((response) => {
      setBookmarks(response.data._embedded.bookmarkResponseDtoList);
    });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggledelPopup = () => {
    setdelIsOpen(!isdelOpen);
  };
  const toggledetailPopup = () => {
    setdetailOpen(!isdetailOpen);
  };

  const bmarkListN = bookmarks && bookmarks.map((k) => k);
  const bmarknumber = [];
  for (let i = 0; i <= bmarkListN.length; i++) {
    bmarknumber.push(bmarkListN && bmarkListN.map((k) => k));
  }
  const bmarkListNum = bmarkListN && bmarkListN.map((k) => k);

  const bmarkArray = [];
  for (let i = 0; i < bmarkListN.length; i++) {
    bmarkArray.push(bmarkListN[i].bookmarkTitle);
  }
  const bmarkIdArray = [];
  for (let i = 0; i < bmarkListN.length; i++) {
    bmarkIdArray.push(bmarkListN[i].id);
  }
  const ImgArray = bmarknumber[0].map((k) => k.bookmarkImages)[1];
  const delbmark = "654";

  // for (let i = 0; i < bmarkListN.length; i++) {
  //   axios
  //     .get(`http://34.64.93.115/bookmark/${bmarkIdArray[i]}`)
  //     .then((response) => {
  //       PPPPP.push(response);
  //     });
  // }
  // console.log(PPPPP);
  // for (let i = 0; i < bmarkListN.length; i++) {
  //   axios
  //     .get(`http://34.64.93.115/bookmark/${bmarkIdArray[i]}`)
  //     .then((response) => {
  //       setBookmarksdata([...bookmarksdata, response.data._embedded]);
  //     });

  //   if ((i = bmarkListN.length)) {
  //     break;
  //   }

  // using .then, create a new promise which extracts the data

  // axiosTest().then((data) => {
  //   return setBookmarksdata(data);
  // });
  // now we can use that data from the outside!

  // const OPPP = bookmarksdata.map((k) => k);
  // const K = [];
  // for (let i = 0; i < OPPP.length; i++) {
  //   K.push(OPPP[i].length);
  // }

  // const AK = bmarkIdArray.map((k) =>
  //   axios.get(`http://34.64.93.115/bookmark/${k}`).then((response) => {
  //     setBookmarksdata([...bookmarksdata, response.data._embedded]);
  //   })
  // );
  // console.log(bookmarksdata);

  // function bmarkAmount(id) {
  //   try{
  //     const res = axios.get()
  //     return res.data;
  // function axiosTest(id) {
  //   return axios.get().then((response) => response.data);
  // }

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
                <button
                  className="bookmarkAddbtn"
                  onClick={(event) => {
                    event.preventDefault();
                    axios
                      .post(`http://34.64.93.115/bookmark`, {
                        bookmarkTitle: "새 폴더",
                      })
                      .then((res) => {
                        setBookmarks([...bookmarks, res.data]);
                        alert(`파일이 생성되었습니다`);
                      })
                      .catch(function (error) {
                        alert("기존 '새 폴더'의 이름을 변경해 주세요");
                      });
                  }}
                >
                  <Bicon
                    picture="BookmarkAddbutton"
                    className="BookmarkAddbutton"
                  />
                </button>
                <button
                  className="bookmarkDelbtn"
                  onClick={(event) => {
                    event.preventDefault();
                    axios
                      .delete(`http://34.64.93.115/bookmark/471`)
                      .then((res) => {
                        setBookmarks([bookmarks]);
                        alert(`폴더가 삭제되었습니다`);
                      });
                  }}
                >
                  <Bicon
                    picture="BookmarkDeletebutton"
                    className="BookmarkDeletebutton"
                  />
                </button>
              </div>
              <div className="bmarkTitlebuttom" />
              <div className="bmarkPostBackground">
                {bmarknumber[0].reverse().map((item) => (
                  <Link to={"/" + item.id}>
                    <span className="bmarkptbk">
                      <span
                        className="bmarkPhotobk"
                        onClick={toggledetailPopup}
                      >
                        <span className="bptl">
                          {item.bookmarkImages[0] !== "" &&
                            item.bookmarkImages[0] !== undefined && (
                              <img
                                src={`data:image/png;base64,${item.bookmarkImages[0]}`}
                                className="bkimg1"
                              />
                            )}
                        </span>
                        <span className="bptr">
                          {item.bookmarkImages[1] !== "" &&
                            item.bookmarkImages[1] !== undefined && (
                              <img
                                src={`data:image/png;base64,${item.bookmarkImages[1]}`}
                                className="bkimg2"
                              />
                            )}
                        </span>
                        <span className="bpbl">
                          {item.bookmarkImages[2] !== "" &&
                            item.bookmarkImages[2] !== undefined && (
                              <img
                                src={`data:image/png;base64,${item.bookmarkImages[2]}`}
                                className="bkimg3"
                              />
                            )}
                        </span>
                        <span className="bpbr">
                          {item.bookmarkImages[3] !== "" &&
                            item.bookmarkImages[3] !== undefined && (
                              <img
                                src={`data:image/png;base64,${item.bookmarkImages[3]}`}
                                className="bkimg4"
                              />
                            )}
                        </span>
                        <span className="bkname">
                          {item.bookmarkTitle}
                          <BmarkNum id={item.id} />
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
