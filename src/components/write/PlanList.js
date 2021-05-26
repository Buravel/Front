import React, { useState } from 'react';
import './planList.scss';
import PostList from './PostList';
const PlanList = ({
    plans,
    onClickAddBtn,
    onClickRemoveBtn,
    onClickAddPost,
    onClickUpdatePost,
    onClickRemovePost,
}) => {
    return (
        <div className="plan-list-container">
            {plans.map((plan, idx) => (
                <PostList
                    key={`plan${idx}`}
                    plan={plan}
                    day={idx + 1}
                    onClickRemoveBtn={onClickRemoveBtn}
                    onClickAddPost={onClickAddPost}
                    onClickUpdatePost={onClickUpdatePost}
                    onClickRemovePost={onClickRemovePost}
                />
            ))}
            <div className="add-btn" onClick={onClickAddBtn}>
                <span className="icon">+</span>
                <span className="text">추가하기</span>
            </div>
        </div>
    );
};

export default PlanList;
