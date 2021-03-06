import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bookmark.scss';
import Bicon from './Bicon';
import AddBmark from './AddBmark';
import DelBmark from './DelBmark';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    HashRouter,
} from 'react-router-dom';
import BookmarkDetail from './BookmarkDetail';
import BmarkNum from './BmarkNum';
import BkPostArray from './BkPostArray';

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
    const [bmarknum, setbmarknum] = useState([]);
    const [thisbmarkid, setthisbmarkid] = useState('');

    const [title, setTitle] = useState('');
    const thisLink = window.location.href;
    const Linkid = thisLink.split('plan/')[1];
    let token = localStorage.getItem('token');
    token = token.replace(/"/g, '');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // function Thisbmarkcount(props) {
    //   const [postcount, setpostcount] = useState([]);
    //   useEffect(() => {
    //     const fetchCount = async () => {
    //       try {
    //         setpostcount(null);
    //         const response = await axios.get(
    //           `http://34.64.93.115/bookmark/${props}`
    //         );
    //         setpostcount(response.data._embedded.bookmarkPostResponseDtoList);
    //       } catch (e) {
    //         setError(e);
    //       }
    //       setLoading(false);
    //     };
    //     fetchCount();
    //   }, []);
    //   const Bmarklt =
    //     bookmarks !== null &&
    //     bookmarks !== [] &&
    //     bookmarks.length !== undefined &&
    //     bookmarks;

    //   const BmarkltN = Bmarklt && Bmarklt.map((k) => k).length;
    //   return BmarkltN == [] ? "0" : BmarkltN;
    // }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setError(null);
                setBookmarks(null);
                setLoading(true);
                const response = await axios.get(
                    'http://34.64.93.115/bookmark',
                );
                setBookmarks(response.data._embedded.bookmarkResponseDtoList);
            } catch (e) {}
            setLoading(false);
        };

        fetchPosts();
    }, []);

    const deletebmark = (k) => {
        for (let i = 0; i < checkedInputs.length; i++) {
            axios.delete(`http://34.64.93.115/bookmark/${checkedInputs[i]}`);
        }
        alert('???????????? ?????????????????????');
        setBookmarks(
            bookmarks && bookmarks.filter((k) => !checkedInputs.includes(k.id)),
        );

        setCheckedInputs('');
        setdelIsOpen(!isdelOpen);
    };
    // console.log(bookmarks && bookmarks.filter((k) => ![360, 385].includes(k.id)));

    // alert("???????????? ?????????????????????");

    // axios
    //   .get("http://34.64.93.115/bookmark")
    //   .then((res) => setBookmarks(res.data._embedded.bookmarkResponseDtoList));

    // window.location.href = `/bookmarks`;

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
    //????????? undefind??? ???????????????
    const bmarkListN =
        bookmarks !== null && bookmarks !== [] && bookmarks.map((k) => k);

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
            // ?????? ??????
            setCheckedInputs(checkedInputs.filter((el) => el !== id));
        }
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const NewFold = bmarkArray.filter((el) => el.includes('??? ??????'));
    const NewFolde = NewFold.map((k) => Number(k.replace('??? ??????', '')));
    const folderMax =
        NewFolde == '' || NewFolde == undefined
            ? 1
            : Math.max.apply(null, NewFolde) + 1;
    const handleSubmit = (event) => {
        axios
            .patch(`http://34.64.93.115/bookmark/${thisbmarkid}`, {
                bookmarkTitle: title,
            })
            .then((res) => {
                setTitle('');
            }, []);
    };

    return (
        <div>
            {/* {isdetailOpen && ( */}
            <div>
                <div className="bookmarkbackground">
                    <span className="bookmarkTitle">
                        <span className="bookmarkMaintitle">?????????</span>

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
                                            ??????
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
                                                ??????
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <button
                        className="bookmarkAddbtn"
                        onClick={(event) => {
                            event.preventDefault();
                            axios
                                .post(`http://34.64.93.115/bookmark`, {
                                    bookmarkTitle: `??? ??????${
                                        folderMax !== -Infinity && folderMax
                                    }`,
                                })
                                .then((res) => {
                                    setBookmarks(
                                        bookmarks == '' ||
                                            bookmarks == undefined
                                            ? [res.data]
                                            : [...bookmarks, res.data],
                                    );
                                    alert(`????????? ?????????????????????`);
                                }, [])
                                .catch(function (error) {
                                    alert(
                                        '????????? ???????????????. ?????? ????????? ?????????',
                                    );
                                }, []);
                        }}
                    >
                        {/* <Bicon
                        picture="BookmarkAddbutton"
                        className="BookmarkAddbutton"
                      /> */}
                        ?????????
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
                                                            e.currentTarget
                                                                .checked,
                                                            item.id,
                                                        );
                                                    }}
                                                    checked={
                                                        checkedInputs.includes(
                                                            item.id,
                                                        )
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                <span class="checktitlemark"></span>
                                            </label>
                                            {checkedInputs &&
                                                checkedInputs.includes(
                                                    item.id,
                                                ) && (
                                                    <span
                                                        className="bookmarkdelClicked"
                                                        //????????? ???????????? ??????????????? ????????? ??????
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
                                                    {item.bookmarkImages[0] !==
                                                        '' &&
                                                        item
                                                            .bookmarkImages[0] !==
                                                            undefined && (
                                                            <img
                                                                src={`data:image/png;base64,${item.bookmarkImages[0]}`}
                                                                className="bkimg1"
                                                            />
                                                        )}
                                                </span>
                                                <span className="bptr">
                                                    {item.bookmarkImages[1] !==
                                                        '' &&
                                                        item
                                                            .bookmarkImages[1] !==
                                                            undefined && (
                                                            <img
                                                                src={`data:image/png;base64,${item.bookmarkImages[1]}`}
                                                                className="bkimg2"
                                                            />
                                                        )}
                                                </span>
                                                <span className="bpbl">
                                                    {item.bookmarkImages[2] !==
                                                        '' &&
                                                        item
                                                            .bookmarkImages[2] !==
                                                            undefined && (
                                                            <img
                                                                src={`data:image/png;base64,${item.bookmarkImages[2]}`}
                                                                className="bkimg3"
                                                            />
                                                        )}
                                                </span>
                                                <span className="bpbr">
                                                    {item.bookmarkImages[3] !==
                                                        '' &&
                                                        item
                                                            .bookmarkImages[3] !==
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
                                    </>
                                )}
                                {!isdelOpen && (
                                    <span classname="thisbmarkbackground">
                                        <Link to={'bookmarks/' + item.id}>
                                            <span className="bmarkptbk">
                                                <span
                                                    className="bmarkPhotobk"
                                                    onClick={toggledetailPopup}
                                                >
                                                    <span className="bptl">
                                                        {item
                                                            .bookmarkImages[0] !==
                                                            '' &&
                                                            item
                                                                .bookmarkImages[0] !==
                                                                undefined && (
                                                                <img
                                                                    src={`data:image/png;base64,${item.bookmarkImages[0]}`}
                                                                    className="bkimg1"
                                                                />
                                                            )}
                                                    </span>
                                                    <span className="bptr">
                                                        {item
                                                            .bookmarkImages[1] !==
                                                            '' &&
                                                            item
                                                                .bookmarkImages[1] !==
                                                                undefined && (
                                                                <img
                                                                    src={`data:image/png;base64,${item.bookmarkImages[1]}`}
                                                                    className="bkimg2"
                                                                />
                                                            )}
                                                    </span>
                                                    <span className="bpbl">
                                                        {item
                                                            .bookmarkImages[2] !==
                                                            '' &&
                                                            item
                                                                .bookmarkImages[2] !==
                                                                undefined && (
                                                                <img
                                                                    src={`data:image/png;base64,${item.bookmarkImages[2]}`}
                                                                    className="bkimg3"
                                                                />
                                                            )}
                                                    </span>
                                                    <span className="bpbr">
                                                        {item
                                                            .bookmarkImages[3] !==
                                                            '' &&
                                                            item
                                                                .bookmarkImages[3] !==
                                                                undefined && (
                                                                <img
                                                                    src={`data:image/png;base64,${item.bookmarkImages[3]}`}
                                                                    className="bkimg4"
                                                                />
                                                            )}
                                                    </span>
                                                    <span className="bkname">
                                                        {item.bookmarkTitle}

                                                        <BmarkNum
                                                            id={item.id}
                                                        />
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
            {/* )} */}
        </div>
    );
}
export default BookmarkMain;
