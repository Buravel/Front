import React from 'react';
import BookMarks from '../../components/write/BookMarks';
import PlanList from '../../components/write/PlanList';
import Map from '../../components/common/Map';
import { useDispatch, useSelector } from 'react-redux';
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

    return (
        <>
            <PlanList
                plans={plans}
                onClickAddBtn={onClickAddBtn}
                onClickRemoveBtn={onClickRemoveBtn}
                onClickAddPost={onClickAddPost}
                onClickUpdatePost={onClickUpdatePost}
                onClickRemovePost={onClickRemovePost}
            />
            <Map location={location} />
        </>
    );
};

export default WritePlanListContainer;
