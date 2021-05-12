import React, { useState } from 'react';
import BookMarks from '../../components/write/BookMarks';
import PlanList from '../../components/write/PlanList';
import WritePlanTitle from '../../components/write/WritePlanTitle';
import { getNight, splitDate, getToday } from '../../util/date';

const WritePlanContainer = () => {
    // title 플랜 입력 관련
    const [disclosure, setdisclosure] = useState(false);
    const [startDate, setStartDate] = useState(getToday().join(''));
    const [endDate, setEndDate] = useState(getToday().join(''));
    const [planTitle, setPlanTitle] = useState('지수님의 강릉');

    // title 금액관련
    const [account, setAccount] = useState({
        type1: 0,
        type2: 0,
        type3: 0,
        type4: 0,
        type5: 0,
        type6: 0,
    });
    // posts
    const [sY, sM, sD] = splitDate(startDate);
    const [eY, eM, eD] = splitDate(endDate);
    const night = getNight(`${sY}-${sM}-${sD}`, `${eY}-${eM}-${eD}`);
    const [plans, setPlans] = useState([new Array(night + 1).fill([])]);
    console.log(new Date('2021-05-32'));
    // bookmark
    const [bookmarks, setBookmarks] = useState([
        {
            id: 0,
            postTitle: '[루프트한자] 이코노미',
            price: 1200000,
            postImage: null,
            category: '비행기',
            rating: 4.5,
            lat: 0,
            lng: 0,
            memo: '111',
            tags: ['ktx', 'ktx', 'ktx'],
        },
        {
            id: 1,
            postTitle: '[루프트한자] 이코노미',
            price: 1200000,
            postImage: null,
            category: '비행기',
            rating: 4.5,
            lat: 0,
            lng: 0,
            memo: '111',
            tags: ['ktx', 'ktx', 'ktx'],
        },
        {
            id: 2,
            postTitle: '[루프트한자] 이코노미',
            price: 1200000,
            postImage: null,
            category: '비행기',
            rating: 4.5,
            lat: 0,
            lng: 0,
            memo: '111',
            tags: ['ktx', 'ktx', 'ktx'],
        },
        {
            id: 3,
            postTitle: '[루프트한자] 이코노미',
            price: 1200000,
            postImage: null,
            category: '비행기',
            rating: 4.5,
            lat: 0,
            lng: 0,
            memo: '111',
            tags: ['ktx', 'ktx', 'ktx'],
        },
        {
            id: 4,
            postTitle: '[루프트한자] 이코노미',
            price: 1200000,
            postImage: null,
            category: '비행기',
            rating: 4.5,
            lat: 0,
            lng: 0,
            memo: '111',
            tags: ['ktx', 'ktx', 'ktx'],
        },
        {
            id: 5,
            postTitle: '[루프트한자] 이코노미',
            price: 1200000,
            postImage: null,
            category: '비행기',
            rating: 4.5,
            lat: 0,
            lng: 0,
            memo: '111',
            tags: ['ktx', 'ktx', 'ktx'],
        },
    ]);
    return (
        <>
            <WritePlanTitle
                disclosure={disclosure}
                startDate={startDate}
                endDate={endDate}
                planTitle={planTitle}
                account={account}
            />
            <PlanList plans={plans} endDate={endDate} startDate={startDate} />
            <BookMarks cards={bookmarks} />
        </>
    );
};

export default WritePlanContainer;
