import React from 'react';
import { /*useDispatch,*/ useSelector } from 'react-redux';
import BookMarks from '../../components/write/BookMarks';

const WritePlanBookmarkContainer = () => {
    // const dispatch = useDispatch();
    const bookmarks = useSelector((state) => state.write.bookmarks);

    return <BookMarks cards={bookmarks} />;
};

export default WritePlanBookmarkContainer;
