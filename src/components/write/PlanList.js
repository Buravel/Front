import React, { useState } from 'react';
import './planList.scss';
import PostList from './PostList';
const PlanList = ({ plans, onClickAddBtn, onClickAddPost }) => {
    return (
        <div className="plan-list-container">
            {plans.map((plan, idx) => (
                <PostList
                    key={`plan${idx}`}
                    plan={plan}
                    day={idx + 1}
                    onClickAddPost={onClickAddPost}
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