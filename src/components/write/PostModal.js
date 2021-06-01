import React, { useState } from 'react';
import './postModal.scss';
import SearchPlace from './SearchPlace';
import { category_type } from '../../modules/write';
import { useMemo } from 'react';

const numToArr = (_num) => {
    const quotient = Math.floor(_num / 1);
    const remainder = _num % 1;
    let arr = new Array(5).fill(0);
    for (let i = 0; i < quotient; i++) {
        if (remainder === 0.5 && i === quotient - 1) {
            arr[i + 1] = 1;
        }
        arr[i] = 2;
    }
    if (quotient === 0 && remainder === 0.5) arr[0] = 1;
    return [...arr];
};
const PostModal = ({ card, closeModal, onSave, onClickRemove }) => {
    const { FLIGHT, DISH, SHOPPING, TRAFFIC, HOTEL, ETC } = category_type;
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
    const [rating, setRating] = useState(!card ? 0 : card.rating);
    const [hashTags, setHashTags] = useState(!card ? [] : [...card.hashTags]);
    const [memo, setMemo] = useState(!card ? '' : card.memo);
    const [category, setCategory] = useState(!card ? FLIGHT : card.category);
    const [imgBase64, setImgBase64] = useState(!card ? '' : card.postImage); // 파일 base64

    const [inputHash, setInputHash] = useState(false);
    const [textHash, setTextHash] = useState('');

    const ratingArr = useMemo(() => numToArr(rating), [rating]);
    const onClickSave = () => {
        if (
            !title1 ||
            !price.toString().length ||
            !rating ||
            !location.name ||
            !location.lat ||
            !location.lng
        ) {
            alert('필수값을 입력해주세요.');
            return null;
        }
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
            postImage: imgBase64,
        });
        closeModal();
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
        <div className="post-modal-container">
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
                        {/* <input
                            type="text"
                            placeholder="ex) 일반실"
                            className="input-gray"
                            value={title2}
                            onChange={(e) => {
                                setTitle2(e.target.value);
                            }}
                        /> */}
                        <select
                            value={category}
                            style={{ width: '50px' }}
                            onChange={onChangeCategory}
                        >
                            <option value={FLIGHT}>비행기</option>
                            <option value={DISH}>식사</option>
                            <option value={SHOPPING}>쇼핑</option>
                            <option value={TRAFFIC}>교통</option>
                            <option value={HOTEL}>숙소</option>
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
                        <SearchPlace
                            setLocation={setLocation}
                            location={location}
                        />
                    </label>
                    <label>
                        <span>
                            <span className="modal-star">*</span>평점
                        </span>
                        <div className="rating-container">
                            <div className="img-container">
                                {ratingArr.map((num, idx) => {
                                    const src =
                                        num === 0
                                            ? 'star_none'
                                            : num === 1
                                            ? 'star_harf'
                                            : 'star_full';
                                    return (
                                        <img
                                            src={`./images/write/${src}.png`}
                                            alt=""
                                            className="harf-star"
                                            key={'star' + idx}
                                        />
                                    );
                                })}
                            </div>
                            <div className="btn-container">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div
                                        className="btn-star-container"
                                        key={num}
                                    >
                                        <div
                                            className="select-star"
                                            data-num={num - 0.5}
                                            onClick={() => setRating(num - 0.5)}
                                        ></div>
                                        <div
                                            className="select-star"
                                            onClick={() => setRating(num)}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </div>
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
