import React, { useState } from 'react';
import './postModal.scss';
import SearchPlace from './SearchPlace';
const PostModal = ({ closeModal, onSave }) => {
    const [title1, setTitle1] = useState('');
    const [title2, setTitle2] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState({
        name: '',
        lng: '',
        lat: '',
    });
    const [rating, setRating] = useState('');
    const [hashTags, setHashTags] = useState([]);
    const [memo, setMemo] = useState('');

    const [inputHash, setInputHash] = useState(false);

    const [textHash, setTextHash] = useState('');

    const onClickSave = () => {
        onSave({ title1, title2, price, location, rating, hashTags, memo });
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
                        <SearchPlace addPlace={addPlace} />
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
            <div className="modal-btn-container">
                <button className="modal-save" onClick={onClickSave}>
                    저장
                </button>
                <button className="modal-cancel" onClick={closeModal}>
                    취소
                </button>
            </div>
        </div>
    );
};

export default PostModal;
