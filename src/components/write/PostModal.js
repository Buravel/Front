import React from 'react';
import './postModal.scss';
import SearchPlace from './SearchPlace';
const PostModal = ({ visible, closeModal }) => {
    if (!visible) return null;
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
                        />
                        <input
                            type="text"
                            placeholder="ex) 일반실"
                            className="input-gray"
                        />
                    </label>
                    <label>
                        <span>
                            <span className="modal-star">*</span>비용
                        </span>
                        <input
                            type="text"
                            className="input-blue input-price"
                            placeholder="53,000"
                        />
                        원
                    </label>
                    <label>
                        <span>
                            <span className="modal-star">*</span>위치
                        </span>
                        <SearchPlace />
                        {/* <button>
                            <img src="./images/write/search.png" alt="search" />
                        </button> */}
                    </label>
                    <label>
                        <span>
                            <span className="modal-star">*</span>평점
                        </span>
                        <input
                            type="text"
                            placeholder=""
                            className="input-blue input-location"
                        />
                    </label>
                    <label>
                        <span className="modal-hash-label">해시태그</span>
                        <button className="modal-hashtag">+</button>
                    </label>
                    <label>
                        <span>메모</span>
                        <input type="textarea" cols="20" />
                    </label>
                </div>
            </div>
            <div className="modal-btn-container">
                <button className="modal-save">저장</button>
                <button className="modal-cancel" onClick={closeModal}>
                    취소
                </button>
            </div>
        </div>
    );
};

export default PostModal;
