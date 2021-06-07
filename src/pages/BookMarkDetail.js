import React from 'react';
import Responsive from '../components/common/Responsive';
import BookmarkMain from '../components/bookmarks/BookmarkMain';
import HeaderContainer from '../containers/common/HeaderContainer';
import BookmarkDetail from '../components/bookmarks/BookmarkDetail';

const BookMarkDetail = () => {
    return (
        <>
            <HeaderContainer />
            <Responsive>
                <BookmarkDetail />
            </Responsive>
        </>
    );
};

export default BookMarkDetail;
