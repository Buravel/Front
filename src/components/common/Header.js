import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import QuickBox from './QuickBox';
import SearchBar from './SearchBar';

const Header = ({ user, tagList, onLogout, border }) => {
    // 퀵버튼 활성화 여부
    const [quickCheck, setQuickCheck] = useState(false);
    const profileImage = user?.data?.account?.profileImage;
    // 퀵버튼 눌렀을때
    const onClick = useCallback(() => setQuickCheck(!quickCheck), [quickCheck]);
    return (
        <>
            <div
                className="header-container"
                style={border ? { border: 'none' } : undefined}
            >
                <SearchBar tagList={tagList} />
                <div className="logo-container">
                    <Link to="/">
                        <img src="/images/header/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="quick-container">
                    {!!user ? (
                        <>
                            <div className="profile-ficture">
                                <img
                                    src={
                                        profileImage
                                            ? `data:image/png;base64,${profileImage}`
                                            : '/images/header/default_profile.png'
                                    }
                                    alt="profile"
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
                        <Link className="login-button" to="/login">
                            로그인
                        </Link>
                    )}
                </div>
                {quickCheck && (
                    <QuickBox
                        onLogout={onLogout}
                        onClick={onClick}
                        profileImage={profileImage}
                    />
                )}
            </div>
            <div className="spacer" />
        </>
    );
};

export default React.memo(Header);
