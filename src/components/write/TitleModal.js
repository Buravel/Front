import React, { useState } from 'react';
import './titleModal.scss';
const TitleModal = ({
    closeModal,
    published,
    startDate,
    planTitle,
    hashTag,
    planImage,
    onChangePlanInfo,
}) => {
    const [title, setTitle] = useState(planTitle);
    const [date, setDate] = useState(startDate);
    const [closure, setClosure] = useState(published);
    const [hash, setHash] = useState(hashTag);
    const [imgBase64, setImgBase64] = useState(planImage); // 파일 base64
    // const [imgFile, setImgFile] = useState(null); //파일
    const [inputHash, setInputHash] = useState(false);
    const [textHash, setTextHash] = useState(hashTag);
    // 저장
    const onChange = () => {
        if (!title || !date) {
            alert('플랜제목, 출발일은 필수입력값 입니다.');
            return;
        }
        onChangePlanInfo({
            planImage: imgBase64,
            planTitle: title,
            startDate: date,
            published: closure,
            hashTag: hash,
        });
        closeModal();
    };

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeDate = (e) => setDate(e.target.value);
    const onChangeClosure = () => setClosure(!closure);

    const onClickAddHashBtn = () => setInputHash(true);

    const onClickAddHash = () => {
        setHash(textHash);
        setTextHash('');
        setInputHash(false);
    };

    const onChangeFile = (event) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            // 2. 읽기가 완료되면 아래코드가 실행됩니다.
            const base64 = reader.result;
            if (base64) {
                setImgBase64(base64.toString().split(',')[1]); // 파일 base64 상태 업데이트
            }
        };
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
            // setImgFile(event.target.files[0]); // 파일 상태 업데이트
        }
    };

    return (
        <div className="title-modal-container">
            <div className="modal-white-box">
                <label>
                    <div className="modal-thumbnail">
                        {imgBase64 ? (
                            <img
                                src={`data:image/png;base64,${imgBase64}`}
                                alt=""
                            />
                        ) : (
                            <p>+</p>
                        )}
                    </div>
                    <input
                        type="file"
                        hidden
                        onChange={onChangeFile}
                        accept=".png"
                    />
                </label>
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
                            value={date}
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
                                            src={`/images/write/unlock.png`}
                                            alt=""
                                        />
                                        <span className="blue">공개</span>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={`/images/write/lock.png`}
                                            alt=""
                                        />
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
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') onClickAddHash();
                                    }}
                                />
                                <div
                                    className="add-hash"
                                    onClick={onClickAddHash}
                                >
                                    <img
                                        src="/images/write/check.png"
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
