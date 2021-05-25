import React, { useState } from 'react';
import './postModal.scss';
import SearchPlace from './SearchPlace';
import { category_type } from '../../modules/write';

const PostModal = ({ card, closeModal, onSave, onClickRemove }) => {
    const { AIRPLANE, EAT, SHOPPING, TRANSPORTAION, ROOMS, ETC } =
        category_type;
    const [title1, setTitle1] = useState(!card ? '' : card.title1);
    const [title2, setTitle2] = useState(!card ? '' : card.title2);
    const [price, setPrice] = useState(!card ? 0 : card.price);
    const [location, setLocation] = useState(
        !card
            ? {
                  name: '',
                  lng: '',
                  lat: '',
              }
            : {
                  name: card.location.name,
                  lng: card.location.lng,
                  lat: card.location.lat,
              },
    );
    const [rating, setRating] = useState(!card ? '' : card.rating);
    const [hashTags, setHashTags] = useState(!card ? [] : [...card.hashTags]);
    const [memo, setMemo] = useState(!card ? '' : card.memo);
    const [category, setCategory] = useState(!card ? AIRPLANE : card.category);
    const [inputHash, setInputHash] = useState(false);

    const [textHash, setTextHash] = useState('');

    const onClickSave = () => {
        onSave({
            idx: card?.idx,
            title1,
            title2,
            price,
            location,
            rating,
            hashTags,
            memo,
            category,
        });
        closeModal();
    };
    const addPlace = ({ name, lng, lat }) => {
        setLocation({ name, lng, lat });
    };
    const onClickAddHashBtn = () => setInputHash(true);

    const onClickAddHash = () => {
        setHashTags([...hashTags, textHash]);
        setTextHash('');
        setInputHash(false);
    };
    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    };
    return (
        <div className="post-modal-container">
            <div className="modal-white-box">
                <div className="modal-thumbnail">
                    <p>+</p>
                </div>
                <div className="modal-input-form">
                    <label>
                        <span>
                            <span className="modal-star">*</span>제목
                        </span>
                        <input
                            type="text"
                            placeholder="ex) KTX"
                            className="input-gray"
                            value={title1}
                            onChange={(e) => {
                                setTitle1(e.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="ex) 일반실"
                            className="input-gray"
                            value={title2}
                            onChange={(e) => {
                                setTitle2(e.target.value);
                            }}
                        />
                        <select
                            value={category}
                            style={{ width: '50px' }}
                            onChange={onChangeCategory}
                        >
                            <option value={AIRPLANE}>비행기</option>
                            <option value={EAT}>식사</option>
                            <option value={SHOPPING}>쇼핑</option>
                            <option value={TRANSPORTAION}>교통</option>
                            <option value={ROOMS}>숙소</option>
                            <option value={ETC}>기타</option>
                        </select>
                    </label>
                    <label>
                        <span>
                            <span className="modal-star">*</span>비용
                        </span>
                        <input
                            type="text"
                            className="input-blue input-price"
                            placeholder="50000"
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                        />
                        원
                    </label>
                    <label>
                        <span>
                            <span className="modal-star">*</span>위치
                        </span>
                        <SearchPlace addPlace={addPlace} location={location} />
                    </label>
                    <label>
                        <span>
                            <span className="modal-star">*</span>평점
                        </span>
                        <input
                            type="text"
                            placeholder=""
                            className="input-blue input-location"
                            value={rating}
                            onChange={(e) => {
                                setRating(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        <span className="modal-hash-label">해시태그</span>
                        {inputHash ? (
                            <>
                                <input
                                    type="text"
                                    value={textHash}
                                    className="input-gray"
                                    onChange={(e) =>
                                        setTextHash(e.target.value)
                                    }
                                />
                                <div
                                    className="add-hash"
                                    onClick={onClickAddHash}
                                >
                                    <img
                                        src="./images/write/check.png"
                                        alt="check"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                {hashTags.length < 3 ? (
                                    <div
                                        className="add-hash-btn"
                                        onClick={onClickAddHashBtn}
                                    >
                                        +
                                    </div>
                                ) : null}
                                {hashTags?.map((hashTag, idx) => (
                                    <div className="hash-btn-close" key={idx}>
                                        <span className="hash-text">{`#${hashTag}`}</span>
                                        <span
                                            className="hash-close"
                                            onClick={() => {
                                                setHashTags(
                                                    hashTags.filter(
                                                        (hash, i) => idx !== i,
                                                    ),
                                                );
                                            }}
                                        >
                                            ×
                                        </span>
                                    </div>
                                ))}
                            </>
                        )}
                    </label>
                    <label>
                        <span>메모</span>
                        <input
                            type="textarea"
                            cols="20"
                            value={memo}
                            onChange={(e) => {
                                setMemo(e.target.value);
                            }}
                        />
                    </label>
                </div>
            </div>
            <div
                className={`modal-btn-container ${
                    card ? 'update-modal' : 'add-modal'
                }`}
            >
                <button className="modal-save" onClick={onClickSave}>
                    {card ? '수정' : '저장'}
                </button>
                {card && (
                    <button
                        className="modal-remove"
                        onClick={() => {
                            onClickRemove(card?.idx);
                            closeModal();
                        }}
                    >
                        삭제
                    </button>
                )}
                <button className="modal-cancel" onClick={closeModal}>
                    취소
                </button>
            </div>
        </div>
    );
};

export default PostModal;
