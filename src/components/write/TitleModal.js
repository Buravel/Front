import React from 'react';
import './titleModal.scss';
const TitleModal = ({ visible, closeModal }) => {
    if (!visible) return null;
    return (
        <div className="title-modal-container">
            <div className="modal-white-box">
                <div className="modal-thumbnail">
                    <p>+</p>
                </div>
                <div className="modal-input-form">
                    <label>
                        <span>제목</span>
                        <input
                            type="text"
                            placeholder="여행 제목을 입력해주세요."
                        />
                    </label>
                    <label>
                        <span>출발일</span>
                        <input type="date" />
                    </label>
                    <label>
                        <span>공개설정</span>
                        <div className="modal-public-input">
                            <div className="modal-public-btn">
                                <div className="modal-public-circle"></div>
                            </div>
                            <div className="modal-public-icon">
                                <img src={`./images/write/unlock.png`} />
                                공개
                            </div>
                        </div>
                    </label>
                    <label>
                        <span>해시태그</span>
                        <button>+</button>
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

export default TitleModal;
