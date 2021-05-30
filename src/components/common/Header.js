import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/">
                        <img src="/images/header/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="quick-container">
                    {loginCheck ? (
                        <>
                            <div className="profile-ficture">
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
                        <Link className="login-button" to="/login">
                            로그인
                        </Link>
                    )}
                </div>
                {quickCheck && (
                    <QuickBox onLogout={onLogout} onClick={onClick} />
                )}
            </div>
            <div className="spacer" />
        </>
    );
};

export default React.memo(Header);
