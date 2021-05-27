import React, { useEffect, useMemo, useState } from 'react';
import BookMarks from '../../components/write/BookMarks';
import PlanList from '../../components/write/PlanList';
import WritePlanTitle from '../../components/write/WritePlanTitle';
import Map from '../../components/common/Map';
import { useDispatch, useSelector } from 'react-redux';
import {
    category_type,
    addDate,
    changePlanInfo,
    addPost,
    updatePost,
    removePost,
    writePlan,
    removeDate,
} from '../../modules/write';

const getAccount = (arr) => {
    let account = {
        [category_type.FLIGHT]: 0,
        [category_type.DISH]: 0,
        [category_type.ETC]: 0,
        [category_type.HOTEL]: 0,
        [category_type.SHOPPING]: 0,
        [category_type.TRAFFIC]: 0,
    };
    for (const arr1 of arr) {
        for (const arr2 of arr1) {
            account[arr2.category] =
                account[arr2.category] + parseInt(arr2.price) / 10000;
        }
    }
    return { ...account };
};
const getLocation = (plans) => {
    let loc = [];
    for (const plan of plans) {
        for (const post of plan) {
            loc.push({ lng: post.location.lng, lat: post.location.lat });
        }
    }
    return [...loc];
};
const WritePlanContainer = () => {
    const dispatch = useDispatch();

    // title 플랜 입력 관련
    const planTitle = useSelector((state) => state.write.planTitle);
    const startDate = useSelector((state) => state.write.startDate);
    const endDate = useSelector((state) => state.write.endDate);
    const published = useSelector((state) => state.write.published);
    const hashTag = useSelector((state) => state.write.hashTag);
    const planImage = useSelector((state) => state.write.planImage);

    // plan 정보 저장
    const onChangePlanInfo = ({
        planTitle,
        startDate,
        published,
        hashTag,
        planImage,
    }) =>
        dispatch(
            changePlanInfo({
                planTitle,
                startDate,
                published,
                hashTag,
                planImage,
            }),
        );
    // plans 관련
    const plans = useSelector((state) => state.write.plans);
    const onClickAddBtn = () => dispatch(addDate());
    const onClickRemoveBtn = (day) => dispatch(removeDate(day));
    const onClickAddPost = (param) => dispatch(addPost(param));
    const onClickUpdatePost = (param) => dispatch(updatePost(param));
    const onClickRemovePost = (key, idx) => dispatch(removePost(key, idx));
    // bookmarks 관련
    const bookmarks = useSelector((state) => state.write.bookmarks);
    // title 금액관련
    const account = useMemo(() => getAccount(plans), [plans]);
    //map 관련
    const location = getLocation(plans);

    const onSave = () =>
        dispatch(
            writePlan({
                planTitle,
                published,
                startDate,
                endDate,
                planImage,
                planTag: hashTag,
                postDtos: [...plans],
            }),
        );

    return (
        <>
            <WritePlanTitle
                published={published}
                startDate={startDate}
                endDate={endDate}
                planTitle={planTitle}
                hashTag={hashTag}
                planImage={planImage}
                account={account}
                onChangePlanInfo={onChangePlanInfo}
                onSave={onSave}
            />
            <PlanList
                plans={plans}
                onClickAddBtn={onClickAddBtn}
                onClickRemoveBtn={onClickRemoveBtn}
                onClickAddPost={onClickAddPost}
                onClickUpdatePost={onClickUpdatePost}
                onClickRemovePost={onClickRemovePost}
            />
            <BookMarks cards={bookmarks} />
            <Map location={location} />
        </>
    );
};

export default WritePlanContainer;
