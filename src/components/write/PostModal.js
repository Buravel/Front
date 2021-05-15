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

    const onClickSave = () => {
        onSave({ title1, title2, price, location, rating, hashTags, memo });
        closeModal();
    };
    const addPlace = ({ name, lng, lat }) => {
        setLocation({ name, lng, lat });
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
                        <button className="modal-hashtag">+</button>
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
