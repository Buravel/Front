import React, { useEffect, useState } from "react";
import OtherUserpost from "../../components/plan/OtherUserpost";
import UserPost from "../../components/plan/UserPost";
import Planmap from "../../components/plan/Planmap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setPlan, removePlan, initialize } from "../../modules/write";
import Loading from "../../components/common/Loading";
import PlanBackground from "../../components/plan/PlanBackground";
import Planstyle from "../../components/plan/Planstyle.scss";

const PlanContainer = () => {
  const [posts, setPosts] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [bmark, setBmark] = useState([]);
  const thisLink = window.location.href;
  const Linkid = thisLink.split("plan/")[1];

  const user = useSelector((state) => state.user.user);
  const loginId = user?.data?.account?.id;
  const writerId = posts?.accountResponseDto?.id;

  const remove = useSelector((state) => state.write.remove);
  const removeError = useSelector((state) => state.write.removeError);

  const dispatch = useDispatch();
  const history = useHistory();

  const onClickEditBtn = (plans, id) => {
    dispatch(setPlan(plans));
    history.push(`/editplan/${id}`);
  };
  const onRemove = (id) => {
    if (window.confirm("정말 삭제하시겠어요?")) {
      dispatch(removePlan(id));
    }
  };

  useEffect(() => {
    if (remove) {
      console.log("삭제 성공");
      dispatch(initialize());
      history.push(`/mypage`);
    }
    if (removeError) {
      alert("삭제 실패");
    }
  }, [history, removeError, remove, dispatch]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let token = localStorage.getItem("token");
        if (token == undefined) {
        } else {
          token = token && token.replace(/"/g, "");
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        setError(null);
        setPosts(null);
        setLoading(true);
        const response = await axios.get(`http://34.64.93.115/plans/${Linkid}`);
        setPosts(response.data);
      } catch (e) {
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
        let token = localStorage.getItem("token");
        if (token == undefined) {
        } else {
          token = token && token.replace(/"/g, "");
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        setBookmarks(null);
        const response = await axios.get(`http://34.64.93.115/bookmark`);

        setBmark(response.data._embedded.bookmarkResponseDtoList);

        setBookmarks(response.data);
      } catch (e) {
        const response = await axios.get(`http://34.64.93.115/bookmark`);

        setBmark(response?.data?._embedded?.bookmarkResponseDtoList);

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

  if (loading) return <Loading>로딩중..</Loading>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <>
      <UserPost
        posts={posts}
        onClickEditBtn={loginId === writerId ? onClickEditBtn : undefined}
        onRemove={loginId === writerId ? onRemove : undefined}
      />
      <OtherUserpost
        posts={posts}
        bookmarks={bookmarks}
        setBmark={setBmark}
        bmark={bmark}
      />
      <Planmap posts={posts} />
      <div className="planrestLine" />
    </>
  );
};

export default PlanContainer;
