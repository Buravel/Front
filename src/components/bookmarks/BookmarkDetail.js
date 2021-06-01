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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

  const deletepost = (k) => {
    for (let i = 0; i < checkedInputs.length; i++) {
      axios
        .delete(`http://34.64.93.115/bookmark/post/${checkedInputs[i]}`)
        .then((response) => {
          setCheckedInputs("");
        }, []);
    }
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
        setBookmarks(response.data._embedded);
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

  const bmarkListN =
    bookmarks == null ? [] : bookmarks.bookmarkPostResponseDtoList;

  const bmarknumber = [];
  // if (bmarkListN.length === undefined) {
  //   return "게시물이 없습니다";
  // } else {
  //   for (let i = 0; i <= bmarkListN.length; i++) {
  //     bmarknumber.push(bmarkListN && bmarkListN.map((k) => k));
  //   }
  // }

  console.log(bmarkListN);
  // const bmarkListNum = bmarkListN && bmarkListN.map((k) => k);

  // const bmarkArray = [];
  // for (let i = 0; i < bmarkListN.length; i++) {
  //   bmarkArray.push(bmarkListN[i]);
  // }
  // const bmarkIdArray = [];
  // for (let i = 0; i < bmarkListN.length; i++) {
  //   bmarkIdArray.push(bmarkListN[i].id);
  // }
  // const toggleBmarkPopup = () => {
  //   setBmarkisOpen(!isbmarkOpen);
  // };
  // const toggleEditPopup = () => {
  //   setEditisOpen(!isEditOpen);
  // };
  // const thisbookmarkID = match.params.id;

  // const handleSubmit = (event) => {
  //   axios
  //     .patch(`http://34.64.93.115/bookmark/${thisbookmarkID}`, {
  //       bookmarkTitle: title,
  //     })
  //     .then((res) => {
  //       setTitle("");
  //     }, []);
  // };
  return <div>hello world!</div>;
  // return (
  //   <div className="bkDtBackground">
  //     {isbmarkOpen && (
  //       <BookmarktoplanPopup
  //         checkedplan={checkedInputs}
  //         handleClose={toggleBmarkPopup}
  //       />
  //     )}
  //     <div className="btDTpage">
  //       <div className="bkDtName">
  //         <span className="bkDtNamefirst">{thisbmarktitleA}</span>
  //         <span className="bkDtNamesecond">({bmarkListN.length})</span>
  //         <span>
  //           <input type="button" onClick={toggleEditPopup} />
  //           <Bicon picture="nameEdit" className="bkDtNameEdit" />
  //         </span>
  //         {isEditOpen && (
  //           <>
  //             <input
  //               type="text"
  //               name="title"
  //               placeholder="북마크 이름"
  //               onChange={handleTitleChange}
  //             />
  //             <button onClick={handleSubmit}>확인</button>
  //           </>
  //         )}
  //       </div>

  //       <span className="bringtoplanbtnbackground">
  //         <input
  //           type="button"
  //           onClick={toggleBmarkPopup}
  //           className="bringtoplanbtn"
  //         />
  //         <Bicon picture="bringtoPlan" className="bkDtPlanEdit" />
  //       </span>
  //       <button onClick={deletepost}>
  //         <Bicon picture="BookmarkDeleteButton" className="bkDtDelete" />
  //       </button>
  //       <div className="bkDtpostBackground">
  //         {bmarkArray.map((item) => (
  //           <span className="bringbmarkClickbox">
  //             <label class="bmarkCheckcontainer">
  //               <input
  //                 className="checkInput"
  //                 type="checkbox"
  //                 id={item.id}
  //                 onChange={(e) => {
  //                   changeHandler(e.currentTarget.checked, item.id);
  //                 }}
  //                 checked={checkedInputs.includes(item.id) ? true : false}
  //               />
  //               <span class="checkmark"></span>
  //             </label>

  //             <button className="bringbmarkClick" />
  //             <BookmarkPost
  //               thisId={item.id}
  //               bmarkId={match.params.id}
  //               clicked={checkedInputs}
  //               bookmarkInfo={bookmarks}
  //             />
  //           </span>
  //         ))}
  //       </div>
  //       <div className="bkDtpostBackgroundbuttom" />
  //     </div>
  //   </div>
  // );
}
export default withRouter(BookmarkDetail);
