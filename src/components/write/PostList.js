import React, { useEffect, useRef, useState } from 'react';
import PostCard from './PostCard';
import PostModal from './PostModal';
import { useDrop } from 'react-dnd';
import './postList.scss';

const PostList = ({
    plan,
    day,
    onClickRemoveBtn,
    onClickAddPost,
    onClickUpdatePost,
    onClickRemovePost,
}) => {
    const [card, setCard] = useState(null);
    const [postVisible, setPostVisible] = useState(false);

    const listEl = useRef(null);
    const [curIdx, setCurIdx] = useState(0);

    const openPostModal = () => setPostVisible(true);
    const closePostModal = () => {
        setPostVisible(false);
        setCard(null);
    };
    const onClickAdd = ({
        title1,
        title2,
        price,
        location,
        rating,
        hashTags,
        memo,
        category,
        postImage,
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
            postImage,
        };
        onClickAddPost(param);
    };
    const onClickUpdate = ({
        idx,
        title1,
        title2,
        price,
        location,
        rating,
        hashTags,
        memo,
        category,
        postImage,
    }) => {
        const param = {
            day: parseInt(day) - 1,
            idx,
            title1,
            title2,
            price,
            location,
            rating,
            hashTags,
            memo,
            category,
            postImage,
        };
        onClickUpdatePost(param);
    };
    const openEditPostModal = (card) => {
        setCard(card);
        openPostModal();
    };
    const onClickRemove = (idx) => onClickRemovePost(day - 1, idx);

    const onClickRightArrow = () =>
        setCurIdx((state) => {
            const t = state + 5;
            return t > plan ? plan.length - 1 : t;
        });
    const onClickLeftArrow = () =>
        setCurIdx((state) => {
            const t = state - 5;
            return t < 0 ? 0 : t;
        });

    useEffect(() => {
        setCurIdx(Math.floor(plan.length / 5) * 5);
        listEl.current.scrollTo({
            top: 0,
            left: 1124 * plan.length,
            behavior: 'smooth',
        });
    }, [plan]);
    useEffect(() => {
        listEl.current.scrollTo({
            top: 0,
            left: 1124 * (curIdx / 5),
            behavior: 'smooth',
        });
    }, [curIdx, listEl]);

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: 'card',
            drop: (selectItem) => {
                onClickAdd({
                    ...selectItem,
                });
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            }),
        }),
        [],
    );
    const style = {
        backgroundColor: '#0070ef',
        opacity: '0.2',
    };
    return (
        <div ref={drop} style={isOver ? style : undefined}>
            <div className="post-list-container">
                <div className="post-circle-line">
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <div className="post-list">
                    <p>
                        {day}일차
                        <button
                            onClick={() => onClickRemoveBtn(parseInt(day) - 1)}
                        >
                            ×
                        </button>
                    </p>
                    <div className="post-wrap">
                        <div className="list" ref={listEl}>
                            {plan.length !== 0 &&
                                plan.map((post, idx) => (
                                    <PostCard
                                        key={`post${idx}`}
                                        card={{ ...post, idx }}
                                        onClick={openEditPostModal}
                                    />
                                ))}
                            <div
                                className="add-post"
                                onClick={() => openPostModal()}
                            >
                                <span>+</span>
                            </div>
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

                        {plan.length >= curIdx + 5 ? (
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
            </div>
            {postVisible && (
                <PostModal
                    closeModal={closePostModal}
                    onSave={card ? onClickUpdate : onClickAdd}
                    card={card}
                    onClickRemove={onClickRemove}
                />
            )}
        </div>
    );
};

export default PostList;
