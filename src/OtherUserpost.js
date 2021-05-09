import React, { useState, useEffect } from "react";
import axios from "axios";
import PostLine from "./PostLine";
import Post from "./Post";

function OtherUserpost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setPosts(null);
        setLoading(true);
        const response = await axios.get("http://localhost:4000/posts");
        setPosts(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;
  const nameArray = posts.map((posts) => posts.title);
  console.log(nameArray);

  const newArray = posts.map((posts) => posts.day);
  const dayMax = Math.max.apply(null, newArray);
  const dayArray = [];

  for (let i = 1; i <= dayMax; i++) {
    dayArray.push(i);
  }

  return dayArray.map((num) => <PostLine day={num} />);
}

export default OtherUserpost;
