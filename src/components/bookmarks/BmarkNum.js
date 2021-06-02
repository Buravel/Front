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

function BmarkNum(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isdelOpen, setdelIsOpen] = useState(false);
  const [isdetailOpen, setdetailOpen] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarksdata, setBookmarksdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
        const response = await axios.get(
          `http://34.64.93.115/bookmark/${props.id}`
        );
        setBookmarks(response.data._embedded.bookmarkPostResponseDtoList);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);
  // const returning = axios
  //   .get(`http://34.64.93.115/bookmark/${props.id}`)
  //   .then((response) => {
  //     setBookmarks(response.data._embedded.bookmarkPostResponseDtoList);
  //   }, []);

  const Bmarklt =
    bookmarks !== null &&
    bookmarks !== [] &&
    bookmarks.length !== undefined &&
    bookmarks;

  const BmarkltN = Bmarklt && Bmarklt.map((k) => k).length;

  return <span>({BmarkltN == [] ? "0" : BmarkltN})</span>;
}
export default BmarkNum;
