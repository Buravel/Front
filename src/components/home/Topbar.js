import React from 'react';
import './topbar.scss';

const Topbar = ({ keyword, sort, setSort }) => {
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
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="lastModified,desc">최신순</option>
                    <option value="lastModified,asc">오래된순</option>
                    <option value="totalPrice,asc">낮은가격순</option>
                    <option value="totalPrice,desc">높은가격순</option>
                </select>
            </div>
        </>
    );
};
export default Topbar;
