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

function BkPostArray(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isdelOpen, setdelIsOpen] = useState(false);
  const [isdetailOpen, setdetailOpen] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarksdata, setBookmarksdata] = useState([]);
  const [bookmarkcount, setbookmarkcount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const thisLink = window.location.href;
  const Linkid = thisLink.split("plan/")[1];
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       setError(null);
  //       setBookmarks(null);
  //       setLoading(true);
  //       const response = await axios.get("http://34.64.93.115/bookmark");
  //       setBookmarks(response.data._embedded.bookmarkResponseDtoList);
  //     } catch (e) {
  //       setError(e);
  //     }
  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  // const bmarkListN =
  //   bookmarks !== null && bookmarks !== [] && bookmarks.map((k) => k);

  // const bmarknumber = [];
  // for (let i = 0; i <= bmarkListN.length; i++) {
  //   bmarknumber.push(bmarkListN && bmarkListN.map((k) => k));
  // }
  // const bkId =
  //   bmarknumber[0] !== undefined &&
  //   bmarknumber[0] !== [] &&
  //   bmarknumber[0].map((k) => k.id);

  // useEffect(() => {
  //   const fetchbmark = async () => {
  //     setBookmarksdata([]);
  //     for (let i = 0; i < bkId && bkId.length; i++) {
  //       const response = axios.get(`http://34.64.93.115/bookmark/${bkId[i]}}`);
  //       setBookmarksdata(response);

  //     }
  //   };

  //   fetchbmark();
  // }, []);

  const kAry = props.map((k) => k);

  const BkpostNum = (k) => {
    const result = Promise.all(
      k.map((k) => {
        return axios
          .get(`http://34.64.93.115/bookmark/${k}`)
          .then((res) => (res.data._embedded == undefined ? 0 : 1));
      })
    );
    return result;
  };

  useEffect(() => {
    BkpostNum(kAry).then((k) => {
      setbookmarkcount(k);
    });
  }, []);
  return bookmarkcount[0];
}
export default BkPostArray;
