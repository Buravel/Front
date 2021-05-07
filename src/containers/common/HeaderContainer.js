import React, { useCallback, useState } from 'react';
import Header from '../../components/common/Header';

const HeaderContainer = () => {
    // 로그인 유무
    const [loginCheck, setLoginCheck] = useState(false);
    // 프로필사진 유무
    const [profilePicture, setProfilePicture] = useState(null);
    // 추천검색어
    const [tagList, setTagList] = useState([
        '강릉',
        '호캉스',
        '가성비',
        '스위스',
    ]);

    // 퀵버튼 활성화 여부
    const [quickCheck, setQuickCheck] = useState(false);

    // 퀵버튼 눌렀을때
    const onClick = useCallback(() => setQuickCheck(!quickCheck), [quickCheck]);

    const onLogout = useCallback(() => setLoginCheck(!loginCheck));
    return (
        <Header
            loginCheck={loginCheck}
            picture={profilePicture}
            tagList={tagList}
            quickCheck={quickCheck}
            onClick={onClick}
            onLogout={onLogout}
        />
    );
};

export default HeaderContainer;
