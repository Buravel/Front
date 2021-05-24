import React, { useState, useEffect } from "react";
import axios from "axios";
import Appstyle from "./Appstyle.scss";
import Icon from "./Icon";

function UserPostInfo(props) {
  const [posts, setPosts] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setPosts(null);
        setLoading(true);
        const response = await axios.get("http://localhost:8080/post");
        setPosts(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        setError(null);
        setInfo(null);
        setLoading(true);
        const response = await axios.get("http://localhost:8080/post");
        setInfo(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchInfo();
  }, []);
  console.log(posts);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;
  if (!info) return null;

  const Year = info.map((posts) => posts.year);
  const Month = info.map((posts) => posts.month);
  const Title = info.map((posts) => posts.title);

  const newArray = posts.map((posts) => posts.day);
  const dayMax = Math.max.apply(null, newArray);
  const sortArray = posts.map((posts) => posts.sorts);
  const moneyArray = posts.map((posts) => posts.money);
  const moneySum = moneyArray.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  function sortMoney(e) {
    return posts
      .filter((k) => k.sorts === e)
      .map((posts) => posts.money)
      .reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0);
  }

  console.log(sortArray);
  return (
    <div className="InfoBackground">
      <span className="PostDay">
        <span className="PostDate">
          {Year[0]}년 {Month[0]}월
        </span>
        <span className="PostTerm">
          ({Number(dayMax) - 1}박 {dayMax}일)
        </span>
      </span>
      <span className="UserPostName">
        <span className="UserPlace">{Title[0]}</span>
      </span>
      <span className="CostBackground">
        <span className="TotalCost">
          <span className="TotalMoney">{moneySum}</span>
          <span className="TotalMoneyname">만원</span>
        </span>
        <span className="TotalImg">
          <Icon
            picture="Airplane"
            className="TotalAirplane"
            alt="budget icon"
          />
          <Icon picture="food" className="Totalfood" alt="budget icon" />
          <Icon
            picture="shopping"
            className="Totalshopping"
            alt="budget icon"
          />
          <Icon picture="bus" className="Totalbus" alt="budget icon" />
          <Icon picture="bed" className="Totalbed" alt="budget icon" />
        </span>
        <span className="TotalMoneylist">
          <span className="TotalAirplaneCost">{sortMoney("Airplane")}</span>
          <span className="TotalfoodCost">{sortMoney("food")}</span>
          <span className="TotalshoppingCost">{sortMoney("shopping")}</span>
          <span className="TotalbusCost">{sortMoney("bus")}</span>
          <span className="TotalbedCost">{sortMoney("bed")}</span>
        </span>
      </span>
    </div>
  );
}

export default UserPostInfo;
