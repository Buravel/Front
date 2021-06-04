import React, { useEffect, useState } from "react";
import OtherUserpost from "../../components/plan/OtherUserpost";
import UserPost from "../../components/plan/UserPost";
import Planmap from "../../components/plan/Planmap";
import axios from "axios";

const PlanContainer = () => {
  const [posts, setPosts] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [bmark, setBmark] = useState([]);
  const thisLink = window.location.href;
  const Linkid = thisLink.split("plan/")[1];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setPosts(null);
        setLoading(true);
        const response = await axios.get(`http://34.64.93.115/plans/${Linkid}`);
        setPosts(response.data);
      } catch (e) {
        let token = localStorage.getItem("token");
        token = token && token.replace(/"/g, "");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get(`http://34.64.93.115/plans/${Linkid}`);
        setPosts(response.data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [Linkid]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        setBookmarks(null);
        const response = await axios.get(`http://34.64.93.115/bookmark`);

        setBmark(response.data._embedded.bookmarkResponseDtoList);

        setBookmarks(response.data);
      } catch (e) {
        let token = localStorage.getItem("token");
        token = token && token.replace(/"/g, "");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get(`http://34.64.93.115/bookmark`);

        setBmark(response.data._embedded.bookmarkResponseDtoList);

        setBookmarks(response.data);
      }
    };

    fetchBookmarks();
  }, []);

  //   const returning = axios
  //     .get(`http://34.64.93.115/bookmark`)
  //     .then((response) => {
  //       setBmark(response.data._embedded.bookmarkResponseDtoList);
  //     });

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <>
      <UserPost posts={posts} />
      <OtherUserpost
        posts={posts}
        bookmarks={bookmarks}
        setBmark={setBmark}
        bmark={bmark}
      />
      <Planmap posts={posts} />
    </>
  );
};

export default PlanContainer;
