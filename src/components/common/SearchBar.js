import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './searchBar.scss';
const SearchBar = ({ tagList }) => {
    const history = useHistory();
    const [searchOn, setSearchOn] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [minNum, setMinNum] = useState('');
    const [maxNum, setMaxNum] = useState('');
    const [searchPriceOn, setSearchPriceOn] = useState(false);

    const onClickSearchBtn = () => {
        history.push(
            `/search?keyword=${keyword}&min=${
                minNum === '' ? 0 : parseInt(minNum) * 10000
            }&max=${
                maxNum === '' ? 0 : parseInt(maxNum) * 10000
            }&sort=lastModified,desc&page=0`,
        );
    };

    const onClickTag = (tag) => {
        history.push(
            `/search?keyword=${tag}&min=0&max=0&sort=lastModified,desc&page=0`,
        );
    };

    return (
        <div className="search-container">
            {!searchOn ? (
                <>
                    <button
                        onClick={() => {
                            setSearchOn((state) => !state);
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
                    <div className="text-search-container">
                        <img
                            src="/images/header/search-icon.png"
                            alt=""
                            onClick={() => {
                                setSearchOn((state) => !state);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="?????????"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') onClickSearchBtn();
                            }}
                        />
                    </div>
                    <button
                        className="price-search-btn"
                        onClick={() => setSearchPriceOn((state) => !state)}
                    >
                        ?????? ??????
                        <img
                            src={`/images/header/${
                                !searchPriceOn ? 'arrow-down' : 'arrow-up'
                            }.png`}
                            alt=""
                        />
                    </button>
                    {!searchPriceOn ? undefined : (
                        <div className="price-search-container">
                            <p>
                                <b>????????????</b>
                            </p>
                            <div className="input-container">
                                <input
                                    type="number"
                                    placeholder="????????????"
                                    value={minNum}
                                    onChange={(e) => setMinNum(e.target.value)}
                                />
                                <span>~</span>
                                <input
                                    type="number"
                                    placeholder="????????????"
                                    value={maxNum}
                                    onChange={(e) => setMaxNum(e.target.value)}
                                />
                                <span>??????</span>
                                <button
                                    className="search-button"
                                    onClick={onClickSearchBtn}
                                >
                                    ??????
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default SearchBar;
