import React, { useState, useEffect } from "react";
import Bicon from "./Bicon";
import axios from "axios";
import BookmarkPost from "./BookmarkPost";
import { Redirect, withRouter } from "react-router-dom";
import BookmarktoplanPopup from "./BookmarktoplanPopup";
import { render } from "react-dom";
import BmarkCount from "./BmarkCount";
import BkPostArray from "./BkPostArray";

function BookmarkDetail({ match }) {
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [state, setState] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkstitle, setBookmarkstitle] = useState([]);
  const [postClick, setpostClick] = useState(false);
  const [posts, setPosts] = useState([]);
  const [checkedInputs, setCheckedInputs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isbmarkOpen, setBmarkisOpen] = useState(false);
  const [isEditOpen, setEditisOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [nowstate, setnowstate] = useState("");

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

  const deletepost = (k) => {
    for (let i = 0; i < checkedInputs.length; i++) {
      axios.delete(`http://34.64.93.115/bookmark/post/${checkedInputs[i]}`);
    }
    alert("포스트가 삭제되었습니다");
    setBookmarks(
      bookmarks && bookmarks.filter((k) => !checkedInputs.includes(k.id))
    );

    setCheckedInputs("");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setBookmarkstitle(null);
        setLoading(true);
        const response = await axios.get(`http://34.64.93.115/bookmark`);

        setBookmarkstitle(response.data._embedded.bookmarkResponseDtoList);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);
  // const returning = axios
  //   .get(`http://34.64.93.115/bookmark/${match.params.id}`)
  //   .then((response) => {
  //     setBookmarks(response.data._embedded);
  //   }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setBookmarks(null);
        setLoading(true);
        const response = await axios.get(
          `http://34.64.93.115/bookmark/${match.params.id}`
        );

        setBookmarks(response.data._embedded.bookmarkPostResponseDtoList);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const bmarktitleA =
    bookmarkstitle !== null &&
    bookmarkstitle.filter((k) => k.id == match.params.id);
  const thisbmarktitle = bmarktitleA && bmarktitleA[0];
  const thisbmarktitleA = thisbmarktitle && thisbmarktitle.bookmarkTitle;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://34.64.93.115/plans");
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  const bmarkListN = bookmarks && bookmarks.map((k) => k);
  // const bmarknumber = [];
  // for (let i = 0; i <= bmarkListN.length; i++) {
  //   bmarknumber.push(bmarkListN && bmarkListN.map((k) => k));
  // }
  // const bmarkListNum = bmarkListN && bmarkListN.map((k) => k);

  // const bmarkArray = [];
  // for (let i = 0; i < bmarkListN.length; i++) {
  //   bmarkArray.push(bmarkListN[i]);
  // }
  // const bmarkIdArray = [];
  // for (let i = 0; i < bmarkListN.length; i++) {
  //   bmarkIdArray.push(bmarkListN[i].id);
  // }

  // bookmarks == null ? [] : bookmarks.bookmarkPostResponseDtoList;
  // function empty(bookmarks) {
  //   if (BmarkCount(bookmarks) == 0) {
  //     alert("경고창 문구");

  //     window.location = "/bookmarks";
  //   } else {
  //     return <div>hello</div>;
  //   }
  // }

  // if (bmarkListN.length === undefined) {
  //   return "게시물이 없습니다";
  // } else {
  //   for (let i = 0; i <= bmarkListN.length; i++) {
  //     bmarknumber.push(bmarkListN && bmarkListN.map((k) => k));
  //   }
  // }

  const toggleBmarkPopup = () => {
    setBmarkisOpen(!isbmarkOpen);
  };
  const toggleEditPopup = () => {
    setEditisOpen(!isEditOpen);
  };

  const handleSubmit = (event) => {
    axios
      .patch(`http://34.64.93.115/bookmark/${match.params.id}`, {
        bookmarkTitle: title,
      })
      .then((res) => {
        setTitle("");
        window.location.reload(false);
      }, []);
  };

  return (
    <>
      {/* <div>{bmarkListN == null && alert("빈 북마크입니다")}</div> */}
      <div className="bkDtBackground">
        {/* {isbmarkOpen && (
          <BookmarktoplanPopup
            checkedplan={checkedInputs}
            handleClose={toggleBmarkPopup}
          />
        )} */}
        <div className="btDTpage">
          <div className="bkDtName">
            <span className="bkDtNamefirst">{thisbmarktitleA}</span>
            <span className="bkDtNamesecond">
              ({bmarkListN && bmarkListN.length})
            </span>
            <span className="thisBmarkNameEdit">
              <input
                type="button"
                onClick={toggleEditPopup}
                className="editbtn"
              />
              <Bicon picture="nameEdit" className="bkDtNameEdit" />
            </span>
            {isEditOpen && (
              <>
                <input
                  type="text"
                  name="title"
                  placeholder="북마크 이름"
                  onChange={handleTitleChange}
                  className="bkDtNameEdittext"
                />
                <button onClick={handleSubmit} className="bkDtNameEdittext">
                  확인
                </button>
              </>
            )}
          </div>

          {/* <span className="bringtoplanbtnbackground">
            <input
              type="button"
              onClick={toggleBmarkPopup}
              className="bringtoplanbtn"
            />
            <Bicon picture="bringtoPlan" className="bkDtPlanEdit" />
          </span> */}
          <button onClick={deletepost}>
            <Bicon picture="BookmarkDeleteButton" className="bkDtDelete" />
          </button>
          <div className="bkDtpostBackground">
            {bmarkListN &&
              bmarkListN.map((item) => (
                <span className="bringbmarkClickbox">
                  <label class="bmarkCheckcontainer">
                    <input
                      className="checkInput"
                      type="checkbox"
                      id={item.id}
                      onChange={(e) => {
                        changeHandler(e.currentTarget.checked, item.id);
                      }}
                      checked={checkedInputs.includes(item.id) ? true : false}
                    />
                    <span class="checkmark"></span>
                  </label>

                  <button className="bringbmarkClick" />
                  <BookmarkPost
                    thisId={item.id}
                    bmarkId={match.params.id}
                    clicked={checkedInputs}
                    bookmarkInfo={bookmarks}
                  />
                </span>
              ))}
          </div>
          <div className="bkDtpostBackgroundbuttom" />
        </div>
      </div>
    </>
  );
}
export default withRouter(BookmarkDetail);
