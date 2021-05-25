import React, { useEffect, useState } from 'react';
import './postCard.scss';
import PostModal from './PostModal';
const Tag = ({ hashTag }) => {
    return (
        <div className="postcard-tagbox">
            <span>#{hashTag}</span>
        </div>
    );
};
const PostCard = ({ card, onClick }) => {
    const { title1, title2, price, postImage, category, rating, hashTags } =
        card;

    return (
        <div className="postcard-container" onClick={() => onClick(card)}>
            <div className="postcard-thumbnail">
                <img src="" alt="" />
            </div>
            <div className="postcard-info">
                <div className="postcard-header-conatiner">
                    <div className="postcard-header left">
                        <span className="postcard-title">{`[${title1}] ${title2}`}</span>
                        <img
                            src={`./images/write/${category}.png`}
                            alt="1"
                            style={{ maxWidth: '14px' }}
                        />
                    </div>
                    <div className="postcard-header right">
                        <img src="./images/write/star.png" alt="rating" />
                        <span className="postcard-rating">{rating}</span>
                    </div>
                </div>
                <div className="postcard-price">
                    <span className="number">{price / 10000}</span>
                    <span className="man">만원</span>
                </div>
                <div className="postcard-tags">
                    {hashTags.length !== 0 &&
                        hashTags.map((hashTag, idx) => (
                            <Tag hashTag={hashTag} key={`hashTag${idx}`} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default PostCard;
