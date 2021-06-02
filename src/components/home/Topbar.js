import React /* useState, map*/ from 'react';
import './topbar.scss';

const Topbar = ({ keyword }) => {
    const onChange = () => {};
    return (
        <>
            <div className="home-topbar">
                <span className="home-title">
                    <b>
                        {keyword ? (
                            <>
                                <span className="search-keyword">
                                    {keyword}{' '}
                                </span>
                                <span>검색결과</span>
                            </>
                        ) : (
                            '다른 사람들의 여행을 둘러보세요'
                        )}
                    </b>
                </span>
                <select value={0} onChange={onChange}>
                    <option value="0">최신순</option>
                    <option value="1">오래된순</option>
                    <option value="2">낮은가격순</option>
                    <option value="3">높은가격순</option>
                </select>
            </div>
        </>
    );
};
export default Topbar;
