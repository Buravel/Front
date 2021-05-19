import React, { useState } from 'react';
import PostCard from './PostCard';
import PostModal from './PostModal';
import './postList.scss';

const PostList = ({ plan, day, onClickAddPost }) => {
    const [postVisible, setPostVisible] = useState(false);
    const openPostModal = () => setPostVisible(true);
    const closePostModal = () => setPostVisible(false);
    const onClickAdd = ({
        title1,
        title2,
        price,
        location,
        rating,
        hashTags,
        memo,
        category,
    }) => {
        const param = {
            day: parseInt(day) - 1,
            title1,
            title2,
            price,
            location,
            rating,
            hashTags,
            memo,
            category,
        };
        onClickAddPost(param);
    };
    return (
        <>
            <div className="post-list-container">
                <div className="post-circle-line">
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <div className="post-list">
                    <p>{day}일차</p>
                    <div className="post-wrap">
                        {plan.length !== 0 &&
                            plan.map((post, idx) => (
                                <PostCard
                                    key={`post${idx}`}
                                    card={post}
                                    onClick={() => {
                                        console.log('a');
                                    }}
                                />
                            ))}
                        <div
                            className="add-post"
                            onClick={() => openPostModal()}
                        >
                            <span>+</span>
                        </div>
                    </div>
                </div>
            </div>
            {postVisible && (
                <PostModal closeModal={closePostModal} onSave={onClickAdd} />
            )}
        </>
    );
};

export default PostList;
