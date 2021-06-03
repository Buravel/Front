import React, { useState, useEffect } from "react";
import axios from "axios";
import Appstyle from "./Planstyle.scss";
import Icon from "./Icon";
import Planmap from "./Planmap";

function UserPost(props) {
  const [posts, setPosts] = useState([]);
  const [info, setInfo] = useState([]);
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
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;

  //   const handleTitleChange = (event) => {
  //     setTitle(event.target.value);
  //   };

  //   const handleBodyChange = (event) => {
  //     setBody(event.target.value);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     axios.post(`${url}posts`, { title: title, body: body }).then((res) => {
  //       console.log(res.data);
  //       // save the new post to posts
  //       setPosts([...posts, res.data]);
  //     });
  //     console.log(posts);
  //     // alert("Post added!");

  //     setTitle("");
  //     setBody("");
  //   };

  const postDate = String(posts.startDate).split("-");
  const Year = postDate[0];
  const Month = postDate[1];
  const Day = postDate[2];

  const postTerm = posts.postForPlanResponseDtos;

  //   const Year = info.map((posts) => posts.year);
  //   const Month = info.map((posts) => posts.month);
  //   const Title = info.map((posts) => posts.title);

  //   const newArray = posts.map((posts) => posts.day);
  //   const dayMax = Math.max.apply(null, newArray);
  //   const sortArray = posts.map((posts) => posts.sorts);
  //   const moneyArray = posts.map((posts) => posts.money);
  //   const moneySum = moneyArray.reduce(function add(sum, currValue) {
  //     return sum + currValue;
  //   }, 0);
  //   function sortMoney(e) {
  //     return posts
  //       .filter((k) => k.sorts === e)
  //       .map((posts) => posts.money)
  //       .reduce(function add(sum, currValue) {
  //         return sum + currValue;
  //       }, 0);
  //   }

  return (
    //     <>
    //       <div></div>
    //       <div>{postTerm && postTerm.map((itme, i) => itme.day)}</div>
    //       {console.log(
    //         Math.max.apply(null, postTerm && postTerm.map((itme, i) => itme.day))
    //       )}
    //     </>
    <div className="PostInfo">
      <div className="InfoBackground">
        <span className="PostDay">
          <span className="PostDate">
            {Year}년 {Month}월
          </span>
          <span className="PostTerm">
            (
            {Math.max.apply(
              null,
              postTerm && postTerm.map((item, i) => item.day)
            )}
            박
            {Math.max.apply(
              null,
              postTerm && postTerm.map((item, i) => item.day)
            ) + 1}
            일)
          </span>
        </span>
        <span className="UserPostName">
          <span className="UserPlace">{posts.planTitle}</span>
        </span>
        <span className="CostBackground">
          <span className="TotalCost">
            <span className="TotalMoney">
              {String(posts.totalPrice) / 10000}
            </span>
            <span className="TotalMoneyname">만원</span>
          </span>
          <span className="TotalImg">
            <Icon
              picture="FLIGHT"
              className="TotalAirplane"
              alt="budget icon"
            />
            <Icon picture="DISH" className="Totalfood" alt="budget icon" />
            <Icon
              picture="shopping"
              className="Totalshopping"
              alt="budget icon"
            />
            <Icon picture="TRAFFIC" className="Totalbus" alt="budget icon" />
            <Icon picture="HOTEL" className="Totalbed" alt="budget icon" />
            <Icon picture="ETC" className="Totaletc" alt="budget icon" />
          </span>
          <span className="TotalMoneylist">
            <span className="TotalAirplaneCost">
              {String(posts.flightTotalPrice) / 10000}
            </span>
            <span className="TotalfoodCost">
              {String(posts.dishTotalPrice) / 10000}
            </span>
            <span className="TotalshoppingCost">
              {String(posts.shoppingTotalPrice) / 10000}
            </span>
            <span className="TotalbusCost">
              {String(posts.trafficTotalPrice) / 10000}
            </span>
            <span className="TotalbedCost">
              {String(posts.hotelTotalPrice) / 10000}
            </span>
            <span className="TotaletcCost">
              {String(posts.etcTotalPrice) / 10000}
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default UserPost;
