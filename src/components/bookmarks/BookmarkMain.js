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
  const [state, setState] = useState([]);
  const [statebk, setStatebk] = useState([]);
  const [deltitle, setDeltitle] = useState("");

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
  const handleChange = (selectedItem) => {
    if (state.includes(selectedItem)) {
      setState(state.filter((item) => item !== selectedItem));

      return;
    }
    setState([...state, selectedItem]);
  };

  const nameChange = (sel) => {
    setStatebk([sel]);
    setIsOpen(!isOpen);
  };

  const A = state;
  console.log(A.length);
  const handledelSubmit = (event) => {
    for (let i = 0; i < A.length; i++) {
      axios.delete(`http://localhost:1000/bookmark/${A[i]}`);
    }
    //   .then((res) => {
    //     setBookmarks([...bookmarks, res.data]);
    //   });
    setState([...state]);
    setDeltitle("");
    window.location.reload();
  };

  const handleSubmit = (event) => {
    axios
      .post("http://localhost:1000/bookmark", { id: null, title: "새 폴더" })
      .then((res) => {
        setBookmarks([...bookmarks, res.data]);
      });
    setTitle("");
  };
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
  console.log(statebk[0]);
  return (
    <>
      <HashRouter basename="">
        <div>
          {!isOpen && (
            <Switch>
              <Route path="/:id" children={<Child />} />
            </Switch>
          )}
          {isdetailOpen && (
            <div>
              <div className="bookmarkbackground">
                <span className="bookmarkTitle">
                  <span className="bookmarkMaintitle">북마크</span>
                  <span className="bookmarkSubtitle">({bookmarks.length})</span>
                </span>
                {!isdelOpen && (
                  <>
                    <button className="bookmarkAddbtn" onClick={handleSubmit}>
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
                  </>
                )}
                {isdelOpen && (
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
                          <button
                            onClick={toggledelPopup}
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
                          {/* </form> */}
                        </div>
                      </div>
                    </div>
                    {/* </ModalPortal> */}
                  </>
                )}
              </div>
              <div className="bmarkTitlebuttom" />
              <div className="bmarkPostBackground">
                {bmarkListN.map((item) => (
                  <>
                    {isdelOpen && (
                      <>
                        <span className="bmarkptbkdel">
                          <button
                            onClick={() => handleChange(item.id)}
                            className="bringbmarkdelClickbox"
                          />
                          {state && state.includes(item.id) && (
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
                          // className="bmarkPhotobk"
                          // onClick={toggledetailPopup}
                          >
                            <Bicon
                              picture="bookamarkchiocebtn"
                              className="bkmainbookamarkchiocebtn"
                              idlist={state}
                            />

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
                      </>
                    )}
                    {!isdelOpen && isdetailOpen && (
                      <Link to={"/" + item.id}>
                        <span className="bmarkptbk">
                          <button
                            className="bkname"
                            onClick={() => {
                              nameChange(item.id);
                            }}
                          >
                            {item.title}({})
                          </button>
                          <>
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
                              {/* <span className="bkname">
                              <button
                                className="bkname"
                                onClick={togglePopup}
                              />
                              {item.title}({})
                            </span> */}
                            </span>
                          </>
                        </span>
                      </Link>
                    )}
                  </>
                ))}
              </div>
              {isOpen && <AddBmark handleClose={togglePopup} id={statebk[0]} />}
            </div>
          )}
        </div>
      </HashRouter>
    </>
  );
}
export default BookmarkMain;
