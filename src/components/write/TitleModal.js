import React, { useEffect, useState } from 'react';
import { splitDate } from '../../util/date';
import './titleModal.scss';
const TitleModal = ({
    closeModal,
    disclosure,
    startDate,
    planTitle,
    hashTag,
    onChangePlanInfo,
}) => {
    const [title, setTitle] = useState(planTitle);
    const [date, setDate] = useState(startDate);
    const [closure, setClosure] = useState(disclosure);
    const [hash, setHash] = useState(hashTag);

    const [inputHash, setInputHash] = useState(false);
    const [textHash, setTextHash] = useState(hashTag);
    // 저장
    const onChange = () => {
        onChangePlanInfo({
            planTitle: title,
            startDate: date,
            disclosure: closure,
            hashTag: hash,
        });
        closeModal();
    };

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeDate = (e) => setDate(e.target.value.split('-').join(''));
    const onChangeClosure = () => setClosure(!closure);

    const onClickAddHashBtn = () => setInputHash(true);

    const onClickAddHash = () => {
        setHash(textHash);
        setTextHash('');
        setInputHash(false);
    };

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
                            value={title}
                            onChange={onChangeTitle}
                        />
                    </label>
                    <label>
                        <span>출발일</span>
                        <input
                            type="date"
                            value={splitDate(date).join('-')}
                            onChange={onChangeDate}
                        />
                    </label>
                    <label>
                        <span>공개설정</span>
                        <div className="modal-public-input">
                            <div
                                className={`modal-public-box ${
                                    closure
                                        ? 'modal-public-btn'
                                        : 'modal-private-btn'
                                }`}
                                onClick={onChangeClosure}
                            >
                                <div className="modal-public-circle"></div>
                            </div>
                            <div className="modal-public-icon">
                                {closure ? (
                                    <>
                                        <img
                                            src={`./images/write/unlock.png`}
                                        />
                                        <span className="blue">공개</span>
                                    </>
                                ) : (
                                    <>
                                        <img src={`./images/write/lock.png`} />
                                        <span className="gray">비공개</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </label>
                    <label>
                        <span>해시태그</span>
                        {inputHash ? (
                            <>
                                <input
                                    type="text"
                                    value={textHash}
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
                        ) : hash.length === 0 ? (
                            <div
                                className="add-hash-btn"
                                onClick={onClickAddHashBtn}
                            >
                                +
                            </div>
                        ) : (
                            <div className="hash-btn-close">
                                #{hash}
                                <span
                                    onClick={() => {
                                        setHash('');
                                    }}
                                >
                                    ×
                                </span>
                            </div>
                        )}
                    </label>
                </div>
            </div>
            <div className="modal-btn-container">
                <button className="modal-save" onClick={onChange}>
                    저장
                </button>
                <button className="modal-cancel" onClick={closeModal}>
                    취소
                </button>
            </div>
        </div>
    );
};

export default TitleModal;
