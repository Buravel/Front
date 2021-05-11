import React, { useState } from 'react';
import './bookMarks.scss';
import PostCard from './PostCard';
const BookMarks = ({ cards }) => {
    const [on, setOn] = useState(true);
    return (
        <div
            className={`bookmark-container ${
                on ? 'bookmark-activation' : 'bookmark-deactivation'
            }`}
        >
            <div
                className={`bookmark-arrow ${
                    on
                        ? 'bookmark-activation-color'
                        : 'bookmark-deactivation-color'
                }`}
                onClick={() => setOn(!on)}
            >
                {on ? '^' : '사용하지 않은 북마크 ^'}
            </div>
            <div className="bookmark-info">
                <p>사용하지 않은 북마크</p>
                <div className="bookmark-list">
                    {cards.map((card) => (
                        <PostCard card={card} key={card.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookMarks;
