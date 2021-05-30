import React from "react";
import Responsive from "../components/common/Responsive";
import BookmarkMain from "../components/bookmarks/BookmarkMain";
import HeaderContainer from "../containers/common/HeaderContainer";
const BookMarks = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <BookmarkMain />
      </Responsive>
    </>
  );
};

export default BookMarks;
