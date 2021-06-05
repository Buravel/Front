import React from 'react';
import './postCard.scss';
import { useDrag } from 'react-dnd';
const Tag = ({ hashTag }) => {
    return (
        <div className="postcard-tagbox">
            <span>#{hashTag}</span>
        </div>
    );
};
const PostCard = ({ card, onClick, bookmarks }) => {
    const { title1, price, postImage, category, rating, hashTags } = card;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'card',
        item: { ...card },
        dropEffect: 'copy',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            // end는 드래그가 끝날 때 실행되는 함수
            const didDrop = monitor.didDrop();
            //  drop이 가능한 엘리먼트(즉, 다른 카드)에 드롭되지 않고 드래그가 끝났으면 originalIndex로 다시 돌아간다.
            if (!didDrop) {
                console.log('not drop');
            }
        },
    }));

    return (
        <div
            className="postcard-container"
            onClick={bookmarks ? undefined : () => onClick(card)}
            style={
                bookmarks && { opacity: isDragging ? 0.5 : 1, cursor: 'move' }
            }
            ref={bookmarks && drag}
        >
            <div className="postcard-thumbnail">
                <img
                    src={
                        postImage === ''
                            ? `/images/write/thumb_${category}.png`
                            : `data:image/png;base64,${postImage}`
                    }
                    alt=""
                />
            </div>
            <div className="postcard-info">
                <div className="postcard-header-conatiner">
                    <div className="postcard-header left">
                        <span className="postcard-title">{title1}</span>
                        <img
                            src={`/images/write/mini_${category}_black.png`}
                            alt="1"
                            style={{ maxWidth: '19px' }}
                        />
                    </div>
                    <div className="postcard-header right">
                        <img src="/images/write/star.png" alt="rating" />
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
