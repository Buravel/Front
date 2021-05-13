import React, { useEffect, useState } from 'react';
import TitleModal from '../../components/write/TitleModal';
import BookMarks from '../../components/write/BookMarks';
import PlanList from '../../components/write/PlanList';
import WritePlanTitle from '../../components/write/WritePlanTitle';
import { getNight, splitDate, getToday, getNextDate } from '../../util/date';
import PostModal from '../../components/write/PostModal';
import Map from '../../components/common/Map';

const WritePlanContainer = () => {
    // title 플랜 입력 관련
    const [disclosure, setdisclosure] = useState(false);
    const [startDate, setStartDate] = useState(getToday().join(''));
    const [endDate, setEndDate] = useState(getToday().join(''));
    const [planTitle, setPlanTitle] = useState('강릉-해돋이보자!');
    const [titleVisible, setTitleVisible] = useState(false);
    const [postVisible, setPostVisible] = useState(false);

    const openTitleModal = () => setTitleVisible(true);
    const closeTitleModal = () => setTitleVisible(false);

    const openPostModal = (n) => setPostVisible(true);
    const closePostModal = () => setPostVisible(false);

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
    const addDate = () => {
        setEndDate(getNextDate(`${eY}-${eM}-${eD}`).join(''));
        setPlans([...plans, []]);
    };
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
    //map
    const [mapVisible, setMapVisible] = useState(false);
    const onMap = () => setMapVisible(!mapVisible);
    return (
        <>
            <WritePlanTitle
                disclosure={disclosure}
                startDate={startDate}
                endDate={endDate}
                planTitle={planTitle}
                account={account}
                openModal={openTitleModal}
            />
            <PlanList
                plans={plans}
                endDate={endDate}
                startDate={startDate}
                addDate={addDate}
                openModal={openPostModal}
            />
            <BookMarks cards={bookmarks} />
            <Map visible={mapVisible} onMap={onMap} />
            <TitleModal visible={titleVisible} closeModal={closeTitleModal} />
            <PostModal visible={postVisible} closeModal={closePostModal} />
        </>
    );
};

export default WritePlanContainer;
