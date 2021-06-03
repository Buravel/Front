import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    const history = useHistory();
    const [searchOn, setSearchOn] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [minNum, setMinNum] = useState('');
    const [maxNum, setMaxNum] = useState('');

    const onClickSearchBtn = () => {
        if (keyword.length < 2) {
            alert('검색어를 2글자 이상 입력해주세요.');
            return;
        }
        history.push(
            `/search?keyword=${keyword}&min=${minNum === '' ? 0 : minNum}&max=${
                maxNum === '' ? 0 : maxNum
            }`,
        );
    };
    const onClickTag = (tag) => {
        history.push(`/search?keyword=${tag}&min=0&max=0`);
    };
    return (
        <>
            <div className="header-container">
                <div className="search-container">
                    {!searchOn ? (
                        <>
                            <button
                                onClick={() => {
                                    setSearchOn((state) => !state);
                                    console.log(1);
                                }}
                            >
                                <img
                                    src="/images/header/search_button.png"
                                    alt="search"
                                />
                            </button>
                            {tagList.map((tag, idx) => (
                                <div
                                    key={idx}
                                    className="tagBox"
                                    onClick={() => onClickTag(tag)}
                                >
                                    #{tag}
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            <img src="" alt="" />
                            <input
                                type="text"
                                placeholder="검색어"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="최소금액"
                                value={minNum}
                                onChange={(e) => setMinNum(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="최대금액"
                                value={maxNum}
                                onChange={(e) => setMaxNum(e.target.value)}
                            />
                            <button
                                className="search-button"
                                onClick={onClickSearchBtn}
                            >
                                검색
                            </button>
                        </>
                    )}
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
