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
  const [isnameEditOpen, setisnameEditOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarksdata, setBookmarksdata] = useState([]);
  const [checkedInputs, setCheckedInputs] = useState([]);
  const [thisbmarkid, setthisbmarkid] = useState("");

  const [title, setTitle] = useState("");
  const thisLink = window.location.href;
  const Linkid = thisLink.split("plan/")[1];
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setBookmarks(null);
        setLoading(true);
        const response = await axios.get("http://34.64.93.115/bookmark");
        setBookmarks(response.data._embedded.bookmarkResponseDtoList);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const deletebmark = (k) => {
    for (let i = 0; i < checkedInputs.length; i++) {
      axios
        .delete(`http://34.64.93.115/bookmark/${checkedInputs[i]}`)
        .then((response) => {
          setCheckedInputs("");
          setdelIsOpen(!isdelOpen);
        }, []);
    }

    alert("북마크가 삭제되었습니다");
  };
  // const returning = axios
  //   .get("http://34.64.93.115/bookmark")
  //   .then((response) => {
  //     setBookmarks(response.data._embedded.bookmarkResponseDtoList);
  //   }, []);
  const toggledelPopupcancel = () => {
    setdelIsOpen(!isdelOpen);
    setCheckedInputs([]);
  };
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggledelPopup = () => {
    setdelIsOpen(!isdelOpen);
  };
  const toggledetailPopup = () => {
    setdetailOpen(!isdetailOpen);
  };
  const toggleisnameEditPopup = () => {
    setisnameEditOpen(!isnameEditOpen);
  };
  //처음에 undefind를 생각해야함
  const bmarkListN =
    bookmarks !== null &&
    bookmarks !== [] &&
    bookmarks.length !== undefined &&
    bookmarks.map((k) => k);

  // // if (!bmarkListN) return [];
  const bmarknumber = [];
  for (let i = 0; i <= bmarkListN.length; i++) {
    bmarknumber.push(bmarkListN && bmarkListN.map((k) => k));
  }
  const bmarkListNum = bmarkListN !== false && bmarkListN.map((k) => k);

  const bmarkArray = [];
  for (let i = 0; i < bmarkListN.length; i++) {
    bmarkArray.push(bmarkListN[i].bookmarkTitle);
  }
  const bmarkIdArray = [];
  for (let i = 0; i < bmarkListN.length; i++) {
    bmarkIdArray.push(bmarkListN[i].id);
  }
  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const NewFold = bmarkArray.filter((el) => el.includes("새 폴더"));
  const NewFolde = NewFold.map((k) => Number(k.replace("새 폴더", "")));
  const folderMax = NewFolde == "" ? 1 : Math.max.apply(null, NewFolde) + 1;
  const handleSubmit = (event) => {
    axios
      .patch(`http://34.64.93.115/bookmark/${thisbmarkid}`, {
        bookmarkTitle: title,
      })
      .then((res) => {
        setTitle("");
      }, []);
  };

  return (
    <>
      <>
        <div>
          <Router>
            <Route path="/bookmarks/:id" component={BookmarkDetail} />

            <Route exact path="/bookmarks">
              {isdetailOpen && (
                <div>
                  <div className="bookmarkbackground">
                    <span className="bookmarkTitle">
                      <span className="bookmarkMaintitle">북마크</span>
                      <span className="bookmarkSubtitle">
                        ({bmarkListN.length})
                      </span>
                    </span>

                    {isdelOpen && (
                      <>
                        <meta charset="UTF-8" />
                        <div className="popupbkdelBackground">
                          <div className="popupbkBox">
                            <div>
                              <button
                                type="submit"
                                className="delBmarkBtn"
                                onClick={deletebmark}
                              >
                                삭제
                              </button>
                              <button
                                onClick={toggledelPopupcancel}
                                className="BookmarkDeletecancelbuttonbg"
                              >
                                <Bicon
                                  picture="BookmarkDeletebutton"
                                  className="BookmarkDeletecancelbutton"
                                />
                                <span className="BookmarkDeletebuttonName">
                                  취소
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {/* {isdelOpen && <DelBmark />} */}
                    <button
                      className="bookmarkAddbtn"
                      onClick={(event) => {
                        event.preventDefault();
                        axios
                          .post(`http://34.64.93.115/bookmark`, {
                            bookmarkTitle: `새 폴더${
                              folderMax !== -Infinity && folderMax
                            }`,
                          })
                          .then((res) => {
                            setBookmarks([...bookmarks, res.data]);
                            alert(`파일이 생성되었습니다`);
                          }, [])
                          .catch(function (error) {
                            alert("오류가 생겼습니다. 다시 시도해 주세요");
                          }, []);
                      }}
                    >
                      <Bicon
                        picture="BookmarkAddbutton"
                        className="BookmarkAddbutton"
                      />
                    </button>
                    <button
                      className="bookmarkDelbtn"
                      onClick={toggledelPopup}
                      // onClick={(event) => {
                      //   event.preventDefault();
                      //   axios
                      //     .delete(`http://34.64.93.115/bookmark/803`)
                      //     .then((res) => {
                      //       setBookmarks([bookmarks]);
                      //       alert(`폴더가 삭제되었습니다`);
                      //     }, [])
                      //     .catch(function (error) {
                      //       alert("삭제되었거나 없는 폴더입니다");
                      //     }, []);
                      // }}
                    >
                      <Bicon
                        picture="BookmarkDeletebutton"
                        className="BookmarkDeletebutton"
                      />
                    </button>
                  </div>
                  <div className="bmarkTitlebuttom" />
                  <div className="bmarkPostBackground">
                    {bmarknumber[0] &&
                      bmarknumber[0].reverse().map((item) => (
                        <>
                          {isdelOpen && (
                            <>
                              <span className="bmarkptbkdel">
                                <label class="bmarktitleCheckcontainer">
                                  <input
                                    className="checkInput"
                                    type="checkbox"
                                    id={item.id}
                                    onChange={(e) => {
                                      changeHandler(
                                        e.currentTarget.checked,
                                        item.id
                                      );
                                    }}
                                    checked={
                                      checkedInputs.includes(item.id)
                                        ? true
                                        : false
                                    }
                                  />
                                  <span class="checktitlemark"></span>
                                </label>
                                {checkedInputs &&
                                  checkedInputs.includes(item.id) && (
                                    <span
                                      className="bookmarkdelClicked"
                                      //이부분 도형으로 덮어씌울수 있도록 수정
                                    >
                                      <Bicon
                                        picture="bookmarkChecked"
                                        className="bookmarkdelChecked"
                                      />
                                    </span>
                                  )}

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
                            </>
                          )}
                          {!isdelOpen && (
                            <span classname="thisbmarkbackground">
                              <Link to={"bookmarks/" + item.id}>
                                <span className="bmarkptbk">
                                  <span
                                    className="bmarkPhotobk"
                                    onClick={toggledetailPopup}
                                  >
                                    <span className="bptl">
                                      {item.bookmarkImages[0] !== "" &&
                                        item.bookmarkImages[0] !==
                                          undefined && (
                                          <img
                                            src={`data:image/png;base64,${item.bookmarkImages[0]}`}
                                            className="bkimg1"
                                          />
                                        )}
                                    </span>
                                    <span className="bptr">
                                      {item.bookmarkImages[1] !== "" &&
                                        item.bookmarkImages[1] !==
                                          undefined && (
                                          <img
                                            src={`data:image/png;base64,${item.bookmarkImages[1]}`}
                                            className="bkimg2"
                                          />
                                        )}
                                    </span>
                                    <span className="bpbl">
                                      {item.bookmarkImages[2] !== "" &&
                                        item.bookmarkImages[2] !==
                                          undefined && (
                                          <img
                                            src={`data:image/png;base64,${item.bookmarkImages[2]}`}
                                            className="bkimg3"
                                          />
                                        )}
                                    </span>
                                    <span className="bpbr">
                                      {item.bookmarkImages[3] !== "" &&
                                        item.bookmarkImages[3] !==
                                          undefined && (
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
                              <></>
                            </span>
                          )}
                        </>
                      ))}

                    {/* {isOpen && <AddBmark handleClose={togglePopup} />} */}
                  </div>
                </div>
              )}
            </Route>
          </Router>
        </div>
      </>
    </>
  );
}
export default BookmarkMain;
