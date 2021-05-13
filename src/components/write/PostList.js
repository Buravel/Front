import React from 'react';
import PostCard from './PostCard';
import './postList.scss';

const PostList = ({ plan, day, openModal }) => {
    return (
        <div className="post-list-container">
            <div className="post-circle-line">
                <div className="circle"></div>
                <div className="line"></div>
            </div>
            <div className="post-list">
                <p>{day}일차</p>
                <div className="post-wrap">
                    {plan.length === 0 ??
                        plan.map((post) => <PostCard card={post} />)}
                    <div
                        className="add-post"
                        onClick={() => openModal(day - 1)}
                    >
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostList;
