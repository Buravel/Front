import React /* useState, map*/ from 'react';
import './Search_topbar.scss';
import SelectBox from './SelectBox';

const Search_topbar = (props) => {
    const length = props.product; //최신 작성글 개수

    if (!props.product) return null;
    return (
        <>
            <span className="topbar-title">
                검색결과({length})
            </span>
            <span className="product-topbar">
                <SelectBox />
            </span>
        </>
    );
};
export default Search_topbar;
