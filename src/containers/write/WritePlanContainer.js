import React, { useEffect, useState } from 'react';
import BookMarks from '../../components/write/BookMarks';
import PlanList from '../../components/write/PlanList';
import WritePlanTitle from '../../components/write/WritePlanTitle';
import Map from '../../components/common/Map';
import { useDispatch, useSelector } from 'react-redux';
import { addDate, changePlanInfo, addPost } from '../../modules/write';

const WritePlanContainer = () => {
    const dispatch = useDispatch();

    // title 플랜 입력 관련
    const planTitle = useSelector((state) => state.write.planTitle);
    const startDate = useSelector((state) => state.write.startDate);
    const endDate = useSelector((state) => state.write.endDate);
    const disclosure = useSelector((state) => state.write.disclosure);
    const hashTag = useSelector((state) => state.write.hashTag);

    // plan 정보 저장
    const onChangePlanInfo = ({ planTitle, startDate, disclosure, hashTag }) =>
        dispatch(changePlanInfo({ planTitle, startDate, disclosure, hashTag }));

    // plans 관련
    const plans = useSelector((state) => state.write.plans);
    const onClickAddBtn = () => dispatch(addDate());
    const onClickAddPost = (param) => dispatch(addPost(param));

    // bookmarks 관련
    const bookmarks = useSelector((state) => state.write.bookmarks);
    // title 금액관련
    const [account, setAccount] = useState({
        type1: 0,
        type2: 0,
        type3: 0,
        type4: 0,
        type5: 0,
        type6: 0,
    });

    return (
        <>
            <WritePlanTitle
                disclosure={disclosure}
                startDate={startDate}
                endDate={endDate}
                planTitle={planTitle}
                hashTag={hashTag}
                account={account}
                onChangePlanInfo={onChangePlanInfo}
            />
            <PlanList
                plans={plans}
                endDate={endDate}
                startDate={startDate}
                onClickAddBtn={onClickAddBtn}
                onClickAddPost={onClickAddPost}
            />
            <BookMarks cards={bookmarks} />
            <Map />
        </>
    );
};

export default WritePlanContainer;
