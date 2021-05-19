import React from 'react';
import './postCard.scss';
const Tag = ({ hashTag }) => {
    return (
        <div className="card-tagbox">
            <span>#{hashTag}</span>
        </div>
    );
};
const PostCard = ({ card }) => {
    const { title1, title2, price, postImage, category, rating, hashTags } =
        card;

    return (
        <div className="card-container">
            <div className="card-thumbnail">
                <img src="" alt="" />
            </div>
            <div className="card-info">
                <div className="card-header-conatiner">
                    <div className="card-header left">
                        <span className="card-title">{`[${title1}] ${title2}`}</span>
                        <img
                            src={`./images/write/${category}.png`}
                            alt="1"
                            style={{ maxWidth: '14px' }}
                        />
                    </div>
                    <div className="card-header right">
                        <img src="./images/write/star.png" alt="rating" />
                        <span className="card-rating">{rating}</span>
                    </div>
                </div>
                <div className="card-price">
                    <span className="number">{price / 10000}</span>
                    <span className="man">만원</span>
                </div>
                <div className="card-tags">
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
