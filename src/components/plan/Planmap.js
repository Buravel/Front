import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import Map from "../common/Map";
import axios from "axios";

function Planmap() {
  const [posts, setPosts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const postinfo = posts && posts.postForPlanResponseDtos;
  const postcount = postinfo && postinfo.length;
  const getLocation = (plans) => {
    let loc = [];

    for (let i = 0; i < postcount; i++) {
      loc.push({ lng: postinfo[i].lng, lat: postinfo[i].lat });
    }

    return [...loc];
  };

  console.log(getLocation());
  return (
    <>
      <Map location={getLocation()} />
    </>
  );
}
export default Planmap;
