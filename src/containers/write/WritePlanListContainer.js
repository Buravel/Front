import React from 'react';
import PlanList from '../../components/write/PlanList';
import Map from '../../components/common/Map';
import BookMarks from '../../components/write/BookMarks';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
    addDate,
    addPost,
    updatePost,
    removePost,
    removeDate,
} from '../../modules/write';

const getLocation = (plans) => {
    let loc = [];
    for (const plan of plans) {
        for (const post of plan) {
            loc.push({ lng: post.location.lng, lat: post.location.lat });
        }
    }
    return [...loc];
};
const WritePlanListContainer = () => {
    const dispatch = useDispatch();

    // plans 관련
    const plans = useSelector((state) => state.write.plans);
    const onClickAddBtn = () => dispatch(addDate());
    const onClickRemoveBtn = (day) => dispatch(removeDate(day));
    const onClickAddPost = (param) => dispatch(addPost(param));
    const onClickUpdatePost = (param) => dispatch(updatePost(param));
    const onClickRemovePost = (key, idx) => dispatch(removePost(key, idx));
    //map 관련
    const location = getLocation(plans);
    //bookmark
    const bookmarks = useSelector((state) => state.write.bookmarks);
    return (
        <DndProvider backend={HTML5Backend}>
            <PlanList
                plans={plans}
                onClickAddBtn={onClickAddBtn}
                onClickRemoveBtn={onClickRemoveBtn}
                onClickAddPost={onClickAddPost}
                onClickUpdatePost={onClickUpdatePost}
                onClickRemovePost={onClickRemovePost}
            />
            <Map location={location} />
            <BookMarks cards={bookmarks} />
        </DndProvider>
    );
};

export default WritePlanListContainer;
