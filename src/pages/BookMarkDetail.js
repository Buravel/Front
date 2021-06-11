import React from "react";
import Responsive from "../components/common/Responsive";
import BookmarkMain from "../components/bookmarks/BookmarkMain";
import HeaderContainer from "../containers/common/HeaderContainer";
import BookmarkDetail from "../components/bookmarks/BookmarkDetail";
import PostResponsive from "../components/plan/PostResponsive";

const BookMarkDetail = () => {
  return (
    <>
      <HeaderContainer />
      <PostResponsive>
        <Responsive>
          <BookmarkDetail />
        </Responsive>
      </PostResponsive>
    </>
  );
};

export default BookMarkDetail;
