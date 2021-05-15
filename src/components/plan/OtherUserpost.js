import React, { useState, useEffect } from "react";
import axios from "axios";
import PostLine from "./PostLine";
import Post from "./Post";
import Icon from "./Icon";

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
  function Lineposts(e) {
    return posts.filter((k) => k.day === e);
  }
  console.log(Lineposts(1));

  console.log(Lineposts(1).map((posts) => posts.title));

  for (let i = 1; i <= dayMax; i++) {
    dayArray.push(i);
  }

  return (
    <>
      <div>
        {dayArray.map((num) => (
          <>
            <div className="dayBackground">
              <div className="dayName">{num}일차</div>
              <Icon picture="day" className="dayCircle" alt="날짜표시" />
              <div className="dayLine" />
              <div className="container">
                <span className="hideDot" />
                {Lineposts(num).map((a) => (
                  <Post
                    postPicture={a.picture}
                    transport={a.transport}
                    postTitle={a.title}
                    nameIcon={a.nameicon}
                    rate={a.rate}
                    postMoney={a.money}
                    id={a.id}
                  />
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default OtherUserpost;
