import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/Header";
import { logout } from "../../modules/user";

const HeaderContainer = ({ border }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.user);
  // 추천검색어
  const [tagList, setTagList] = useState([
    "강릉",
    "호캉스",
    "가성비",
    "스위스",
  ]);

  const onLogout = useCallback(() => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, [dispatch]);
  return (
    <Header user={user} tagList={tagList} onLogout={onLogout} border={border} />
  );
};

export default HeaderContainer;
