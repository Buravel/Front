import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from '../plan/Popup';
import Appstyle from '../plan/Planstyle.scss';
import './Bookmark.scss';
import Postconnect from '../plan/Postconnect';
import Icon from '../plan/Icon';
import Bicon from './Bicon';

function BookmarkPost(props) {
    const [isbmarkOpen, setBmarkisOpen] = useState(false);
    const bookmarkInfo = props.bookmarkInfo;
    const category =
        bookmarkInfo && bookmarkInfo.postBookmarkPostResponseDto.category;

    const postImg =
        bookmarkInfo && bookmarkInfo.postBookmarkPostResponseDto.postImage;
    const price =
        bookmarkInfo && bookmarkInfo.postBookmarkPostResponseDto.price;
    const postTitle =
        bookmarkInfo && bookmarkInfo.postBookmarkPostResponseDto.postTitle;
    const rating =
        bookmarkInfo && bookmarkInfo.postBookmarkPostResponseDto.rating;
    const tags =
        bookmarkInfo &&
        bookmarkInfo.postBookmarkPostResponseDto.postTagResponseDtoList;
    // console.log(tags);

    const toggleBmarkPopup = () => {
        setBmarkisOpen(!isbmarkOpen);
    };
    const clicklist = props.clicked && props.clicked.map((k) => k);

    // console.log('BookmarkPost');
    // console.log(props.bookmarkInfo);
    // let token = localStorage.getItem('token');
    // token = token.replace(/"/g, '');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // const [isbmarkOpen, setBmarkisOpen] = useState(false);
    // const [posts, setPosts] = useState([]);
    // const [hashtag, setHashtag] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [isOpen, setIsOpen] = useState(false);
    // const [isPrivate, setisPrivate] = useState(false);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             setError(null);
    //             setPosts(null);
    //             setLoading(true);
    //             const response = await axios.get(
    //                 `http://34.64.93.115/bookmark/${props.bmarkId}`,
    //             );
    //             setPosts(response.data._embedded.bookmarkPostResponseDtoList);
    //         } catch (e) {
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };

    //     fetchPosts();
    // }, []);
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             setError(null);
    //             setHashtag(null);
    //             setLoading(true);
    //             const response = await axios.get(
    //                 `${postit[0]._links.originPlan.href}`,
    //             );
    //             setHashtag(response.data.postForPlanResponseDtos);
    //         } catch (e) {
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };

    //     fetchPosts();
    // }, []);

    // const returning = axios
    //   .get(`http://34.64.93.115/bookmark/${props.bmarkId}`)
    //   .then((response) => {
    //     setPosts(response.data._embedded.bookmarkPostResponseDtoList);
    //   }, []);

    // const togglePopup = () => {
    //   setIsOpen(!isOpen);
    // };
    // const toggleBmarkPopup = () => {
    //     setBmarkisOpen(!isbmarkOpen);
    // };
    // const postTerm = props.bookmarkInfo.map((k) => k);
    // const postArray = [];
    // for (let i = 0; i < postTerm.length; i++) {
    //     postArray.push(postTerm[i]);
    // }
    // const postit =
    //     postArray !== undefined &&
    //     postArray.filter((k) => k.id == props.thisId);
    // const postId = postit && postit[0];

    // const returning2 = axios
    //   .get(`${postit[0]._links.originPlan.href}`)
    //   .then((response) => {
    //     setHashtag(response.data.postForPlanResponseDtos);
    //   }, []);

    // const category =
    //     bookmarkInfo && bookmarkInfo.postBookmarkPostResponseDto.category;

    // const postImg =
    //     bookmarkInfo && bookmarkInfo.postBookmarkPostResponseDto.postImage;
    // const price =
    //     bookmarkInfo && bookmarkInfo.postBookmarkPostResponseDto.price;
    // const postTitle =
    //     bookmarkInfo && bookmarkInfo.postBookmarkPostResponseDto.postTitle;
    // const rating =
    //     bookmarkInfo && bookmarkInfo.postBookmarkPostResponseDto.rating;
    // const tags =
    //     bookmarkInfo &&
    //     bookmarkInfo.postBookmarkPostResponseDto.postTagResponseDtoList;
    // console.log(tags);
    // const hashTag = hashtag && hashtag.map((k) => k.postTagResponseDtoList)[0];
    // const tagsLINE = hashTag && hashTag.map((k) => k.postTagTitle);

    // const tags = hashTag && hashTag.map((k) => k).length;
    // const tagsArray = [];
    // for (let i = 0; i <= tags; i++) {
    //   tagsArray.push(hashTag && hashTag.map((k) => k[i].postTagTitle));
    // }
    // const K = [];
    // for (let i = 0; i < tagsArray.length - 1; i++) {
    //     K.push(tagsArray && tagsArray.map((k) => k[i]));
    // }
    // const tagTitle = K[0];

    // const clicklist = props.clicked && props.clicked.map((k) => k);

    // function HashTagArray(a) {
    //   if (postTerm && postTerm.filter((k) => k.id === a)) {
    //     return postTerm.filter((k) => k.id === a);
    //   } else {
    //     return "";
    //   }
    // }

    // const hash = postTerm && HashTagArray(props.id).map((posts) => posts.hashtag);

    // const hashTags = hash.pop();
    // if (!hashTags) return null;

    // for (let i = 0; i < tId.length - 1; i++) {
    //   B.push(tId && tId.map((k) => k));
    // }
    // console.log(clicklist && clicklist.includes(props.thisId));
    // for()
    return (
        <>
            <div className="bkDtpostBox">
                {props.private === 'true' ? (
                    <>
                        <Bicon
                            picture="privatePost"
                            className="privatePostTitle"
                        />
                        <span className="privatePostBk" />
                    </>
                ) : (
                    ''
                )}
                <div className="bkpostBox">
                    <div className="bkDtmark">
                        <input
                            type="button"
                            onClick={toggleBmarkPopup}
                            className="bmarkBkButton"
                        />
                        {props.private === 'true' ? (
                            ''
                        ) : (
                            <Bicon
                                picture="bookamarkchiocebtn"
                                className="bookamarkchiocebtn"
                            />
                        )}
                    </div>

                    <div className="postPicture">
                        <img
                            src={
                                postImg
                                    ? `data:image/png;base64,${postImg}`
                                    : `/images/write/thumb_${category}.png`
                            }
                            className="postPictureArray"
                            alt=""
                        />
                    </div>
                    <div className="postContent">
                        <span className="postName">{postTitle}</span>
                        <Icon picture={category} className="postNameIcon" />
                        <Icon picture="rating" className="postRateIcon" />
                        <span className="rateValue">{rating}</span>
                        <div className="moneyBox">
                            <span className="money">
                                {String(price).substr(
                                    0,
                                    String(price).length - 4,
                                )}
                            </span>
                            <span className="moneyName">만원</span>
                        </div>
                        <span className="hashTagLine">
                            {tags.map((tag) => (
                                <span className="postHashTag">
                                    #{tag.postTagTitle}
                                </span>
                            ))}
                        </span>
                    </div>
                    {clicklist && clicklist.includes(props.thisId) && (
                        <>
                            <Bicon
                                picture="bookmarkClicked"
                                className="bookmarkClicked"
                                //이부분 도형으로 덮어씌울수 있도록 수정
                            />
                            <input
                                type="button"
                                onClick={toggleBmarkPopup}
                                className="bookmarkCheckedButton"
                            />
                            <Bicon
                                picture="bookmarkChecked"
                                className="bookmarkChecked"
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default BookmarkPost;
