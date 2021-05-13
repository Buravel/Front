import React from 'react';
import './planList.scss';
import PostList from './PostList';
const PlanList = ({ plans, addDate, openModal }) => {
    return (
        <div className="plan-list-container">
            {plans.map((plan, idx) => (
                <PostList
                    key={`plan${idx}`}
                    plan={plan}
                    day={idx + 1}
                    openModal={openModal}
                />
            ))}
            <div className="add-btn" onClick={addDate}>
                <span className="icon">+</span>
                <span className="text">추가하기</span>
            </div>
        </div>
    );
};

export default PlanList;
