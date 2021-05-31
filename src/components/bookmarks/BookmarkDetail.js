import React, { useState, useEffect } from "react";
import Bicon from "./Bicon";
import axios from "axios";
import BookmarkPost from "./BookmarkPost";
import { withRouter } from "react-router-dom";
import BookmarktoplanPopup from "./BookmarktoplanPopup";

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
  const [isbmarkOpen, setBmarkisOpen] = useState(false);
  const [isEditOpen, setEditisOpen] = useState(false);
  const [title, setTitle] = useState("");

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

  // const handleChange = (selectedItem) => {
  //   if (state.includes(selectedItem)) {
  //     setState(state.filter((item) => item !== selectedItem));
  //     return;
  //   }
  //   setState([...state, selectedItem]);
  //   return;
  // };
  const deletepost = (k) => {
    for (let i = 0; i < checkedInputs.length; i++) {
      axios.delete(`http://34.64.93.115/bookmark/post/${checkedInputs[i]}`);
    }
  };

  //이부분 플랜 가져오는 팝업 생성후 다시 작성할 것

  const returning = axios
    .get(`http://34.64.93.115/bookmark/${match.params.id}`)
    .then((response) => {
      setBookmarks(response.data._embedded.bookmarkPostResponseDtoList);
    });

  const returningtitle = axios
    .get(`http://34.64.93.115/bookmark`)
    .then((response) => {
      setBookmarkstitle(response.data._embedded.bookmarkResponseDtoList);
    });
  const bmarktitleA = bookmarkstitle.filter((k) => k.id == match.params.id);
  const thisbmarktitle = bmarktitleA && bmarktitleA[0];
  const thisbmarktitleA = thisbmarktitle && thisbmarktitle.bookmarkTitle;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://34.64.93.115/plans");
      setPosts(response.data);
    };

    fetchPosts();
  }, []);
  if (!posts) return null;

  //나중에 필터로 한 북마크에 있는 id를 추출하게 해야함

  const clickChange = () => setpostClick(!postClick);

  const bmarkListN = bookmarks && bookmarks.map((k) => k);

  const bmarknumber = [];
  for (let i = 0; i <= bmarkListN.length; i++) {
    bmarknumber.push(bmarkListN && bmarkListN.map((k) => k));
  }
  const bmarkListNum = bmarkListN && bmarkListN.map((k) => k);

  const bmarkArray = [];
  for (let i = 0; i < bmarkListN.length; i++) {
    bmarkArray.push(bmarkListN[i]);
  }
  const bmarkIdArray = [];
  for (let i = 0; i < bmarkListN.length; i++) {
    bmarkIdArray.push(bmarkListN[i].id);
  }
  const toggleBmarkPopup = () => {
    setBmarkisOpen(!isbmarkOpen);
  };
  const toggleEditPopup = () => {
    setEditisOpen(!isEditOpen);
  };
  const thisbookmarkID = match.params.id;

  const handleSubmit = (event) => {
    axios
      .patch(`http://34.64.93.115/bookmark/${thisbookmarkID}`, [
        {
          bookmarkTitle: title,
        },
      ])
      .then((res) => {
        setTitle("");
      });
  };

  return (
    <div className="bkDtBackground">
      {isbmarkOpen && (
        <BookmarktoplanPopup
          checkedplan={checkedInputs}
          handleClose={toggleBmarkPopup}
        />
      )}
      <div className="btDTpage">
        <div className="bkDtName">
          <span className="bkDtNamefirst">{thisbmarktitleA}</span>
          <span className="bkDtNamesecond">({bmarkListN.length})</span>
          <span>
            <input type="button" onClick={toggleEditPopup} />
            <Bicon picture="nameEdit" className="bkDtNameEdit" />
          </span>
          {isEditOpen && (
            <>
              {/* <form onSubmit={handleSubmit}> */}
              <input
                type="text"
                name="title"
                placeholder="북마크 이름"
                onChange={handleTitleChange}
              />
              <button
                onClick={() => {
                  axios
                    .patch(`http://34.64.93.115/bookmark/200`, [
                      {
                        bookmarkTitle: "부산역",
                      },
                    ])

                    .then((res) => {
                      setTitle("");
                    });
                }}
              >
                확인
              </button>
              {/* </form> */}
            </>
          )}
        </div>

        <span className="bringtoplanbtnbackground">
          <input
            type="button"
            onClick={toggleBmarkPopup}
            className="bringtoplanbtn"
          />
          <Bicon picture="bringtoPlan" className="bkDtPlanEdit" />
        </span>
        <button onClick={deletepost}>
          <Bicon picture="BookmarkDeleteButton" className="bkDtDelete" />
        </button>
        <div className="bkDtpostBackground">
          {bmarkArray.map((item) => (
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
  );
}
export default withRouter(BookmarkDetail);
