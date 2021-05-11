import React from 'react';
import './postCard.scss';
const Tag = ({ tag }) => {
    return (
        <div className="card-tagbox">
            <span>#{tag}</span>
        </div>
    );
};
const PostCard = ({ card }) => {
    return (
        <div className="card-container">
            <div className="card-thumbnail">
                <img src="" alt="" />
            </div>
            <div className="card-info">
                <div className="card-header left">
                    <span className="card-title">{card.postTitle}</span>
                    <img src="./images/write/plane_icon.png" alt="1" />
                </div>
                <div className="card-header right">
                    <img src="./images/write/star.png" alt="rating" />
                    <span className="card-rating">{card.rating}</span>
                </div>
                <div className="card-price">
                    <span className="number">{card.price / 10000}</span>
                    <span className="man">만원</span>
                </div>
                <div className="card-tags">
                    {card.tags.map((tag, idx) => (
                        <Tag tag={tag} key={`tag${idx}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostCard;
