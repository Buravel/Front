import React, { useState } from 'react';
import './header.scss';
import QuickBox from './QuickBox';

const Header = ({
    loginCheck,
    picture,
    tagList,
    quickCheck,
    onClick,
    onLogout,
}) => {
    return (
        <>
            <div className="header-container">
                <div className="search-container">
                    <button>
                        <img
                            src="/images/header/search_button.png"
                            alt="search"
                        />
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
                            <div className="profile-ficture" onClick={onLogout}>
                                <img
                                    src={
                                        picture
                                            ? ''
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
                        <button className="login-button" onClick={onLogout}>
                            로그인
                        </button>
                    )}
                </div>
                {quickCheck && <QuickBox />}
            </div>
            <div className="spacer" />
        </>
    );
};

export default React.memo(Header);
