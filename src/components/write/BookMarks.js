import React, { useState, useEffect, useRef } from 'react';
import './bookMarks.scss';
import PostCard from './PostCard';
const BookMarks = ({ cards }) => {
    const [on, setOn] = useState(false);
    const [curIdx, setCurIdx] = useState(0);
    const listEl = useRef(null);
    const onClickLeftArrow = () =>
        setCurIdx((state) => {
            const t = state - 5;
            return t < 0 ? 0 : t;
        });
    const onClickRightArrow = () =>
        setCurIdx((state) => {
            const t = state + 5;
            return t > cards ? cards.length - 1 : t;
        });
    useEffect(() => {
        listEl.current.scrollTo({
            top: 0,
            left: 1200 * (curIdx / 5),
            behavior: 'smooth',
        });
    }, [curIdx, listEl]);
    return (
        <>
            <div className={`${on ? 'bookmark-on' : 'bookmark-off'}`}></div>
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
                    {on ? '' : '사용하지 않은 북마크  '}
                    <img
                        src={`/images/write/${on ? 'down' : 'up'}-arrow.png`}
                        alt=""
                    />
                </div>
                <div className="bookmark-info">
                    <p>사용하지 않은 북마크</p>
                    <div className="bookmark-list" ref={listEl}>
                        {cards.map((card) => (
                            <PostCard card={card} key={card.id} bookmarks />
                        ))}
                    </div>
                    {curIdx !== 0 ? (
                        <div className="list-arrow left">
                            <button onClick={onClickLeftArrow}>
                                <img
                                    src="/images/write/left-arrow.png"
                                    alt=""
                                />
                            </button>
                        </div>
                    ) : null}
                    {cards.length > curIdx + 5 ? (
                        <div className="list-arrow right">
                            <button onClick={onClickRightArrow}>
                                <img
                                    src="/images/write/right-arrow.png"
                                    alt=""
                                />
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default BookMarks;
