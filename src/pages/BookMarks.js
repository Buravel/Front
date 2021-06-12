import React from "react";
import Responsive from "../components/common/Responsive";
import BookmarkMain from "../components/bookmarks/BookmarkMain";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostResponsive from "../components/plan/PostResponsive";
const BookMarks = () => {
  return (
    <>
      <HeaderContainer />
      <PostResponsive>
        <Responsive>
          <BookmarkMain />
        </Responsive>
      </PostResponsive>
    </>
  );
};

export default BookMarks;
