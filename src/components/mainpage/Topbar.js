import React /* useState, map*/ from 'react';
import './Topbar.scss';
import SelectBox from './SelectBox';

const Topbar = () => {
    return (
        <>
            <span className="topbar-title">
                다른 사람들의 여행을 둘러보세요
            </span>
            <span className="product-topbar">
                <SelectBox />
            </span>
        </>
    );
};
export default Topbar;