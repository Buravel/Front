import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MyPage from "../../components/mypage/MyPage";
axios.defaults.baseURL = "http://34.64.93.115";
let token;
const MyPageForm = () => {
  const [username, setUsername] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailVerified, setEmailVerified] = useState(null);
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [boxes1, setBoxes1] = useState([]);
  const [boxes2, setBoxes2] = useState([]);
  const [page1, setPage1] = useState([]);
  const [page2, setPage2] = useState([]);
  const [pageNum1, setPageNum1] = useState("");
  const [pageNum2, setPageNum2] = useState("");
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);

  token = localStorage.getItem("token");
  if (token) token = token.replace(/\"/gi, "");
  axios.defaults.headers.common["Authorization"] = `${token}`;

  useEffect(() => {
    const myInfo = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/mypage");
        setNickname(response.data.nickname);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setProfile(response.data.profileImage);
        setEmailVerified(response.data.emailVerified);
      } catch (e) {
        console.log(e);
        return Promise.reject(e);
      }
      setLoading(false);
    };
    myInfo();
  }, []);

  useEffect(() => {
    const published = async () => {
      setLoading(true);
      await axios
        .get("/plans/mine/published?page=" + current1)
        .then((response) => {
          if (response.data.page.totalElements !== 0) {
            setBoxes1(response.data._embedded.planResponseDtoList);
            setPage1(response.data.page);
          }
        })
        .catch((error) => {
          return Promise.reject(error);
        });
      setLoading(false);
    };
    published();
  }, [current1]);

  useEffect(() => {
    const closed = async () => {
      setLoading(true);
      await axios
        .get("/plans/mine/closed?page=" + current2)
        .then((response) => {
          if (response.data.page.totalElements !== 0) {
            setBoxes2(response.data._embedded.planResponseDtoList);
            setPage2(response.data.page);
          }
        })
        .catch((error) => {
          return Promise.reject(error);
        });
      setLoading(false);
    };
    closed();
  }, [current2]);

  const onLogout = () => {
    localStorage.removeItem("token");
  };

  const prev1 = () => {
    if (current1 !== 0) setCurrent1(current1 - 1);
    console.log("current1:" + current1);
  };

  const next1 = () => {
    if (current1 !== page1.totalPages - 1) setCurrent1(current1 + 1);
    console.log("current1:" + current1);
  };

  const prev2 = () => {
    if (current2 !== 0) setCurrent2(current2 - 1);
    console.log("current2:" + current2);
  };

  const next2 = () => {
    if (current2 !== page2.totalPages - 1) setCurrent2(current2 + 1);
    console.log("current2:" + current2);
  };

  return (
    <>
      <MyPage
        type="mypage"
        nickname={nickname}
        username={username}
        email={email}
        emailVerified={emailVerified}
        profile={profile}
        onLogout={onLogout}
        boxes1={boxes1}
        boxes2={boxes2}
        prev1={prev1}
        next1={next1}
        prev2={prev2}
        next2={next2}
        elements1={page1.totalElements}
        elements2={page2.totalElements}
        pageNum1={page1.totalPages}
        pageNum2={page2.totalPages}
        current1={current1}
        current2={current2}
      ></MyPage>
    </>
  );
};
/*

      <Pagination
        pageNum={page.totalPages}
        elements={page.totalElements}
        current={current}
        setCurrent={setCurrent}
        prev={prev}
        next={next}
      ></Pagination>
*/
export default withRouter(MyPageForm);
