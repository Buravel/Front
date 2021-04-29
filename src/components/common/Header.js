import React, { useState } from 'react';
import './header.scss';
import QuickBox from './QuickBox';

const Header = () => {
    // 로그인 유무
    const [loginCheck, setLoginCheck] = useState(true);
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
    const onClick = () => setQuickCheck(!quickCheck);

    return (
        <>
            <div className="header-container">
                <div className="search-container">
                    <button>
                        <img src="/images/header/search_button.png" />
                    </button>
                    {tagList.map((tag, idx) => (
                        <div key={idx} className="tagBox">
                            #{tag}
                        </div>
                    ))}
                </div>
                <div className="logo-container">
                    <button>
                        <img src="/images/header/logo.png" alt="logo" />
                    </button>
                </div>
                <div className="quick-container">
                    {loginCheck ? (
                        <>
                            <div className="profile-ficture">
                                <img
                                    src={
                                        profilePicture
                                            ? ''
                                            : '/images/header/default_profile.png'
                                    }
                                />
                            </div>
                            <button onClick={onClick}>
                                <img
                                    src="/images/header/quick_button.png"
                                    alt="quick"
                                />
                            </button>
                        </>
                    ) : (
                        <button className="login-button">로그인</button>
                    )}
                </div>
                {quickCheck && <QuickBox />}
            </div>
            <div className="spacer" />
        </>
    );
};

export default Header;
