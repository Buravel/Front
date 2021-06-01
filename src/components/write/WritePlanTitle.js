import React, { useState } from 'react';
import './writePlanTitle.scss';
import { getNight } from '../../util/date';
import TitleModal from './TitleModal';
const PlanInfo = ({ startDate, endDate, planTitle, openModal }) => {
    const [sY, sM, sD] = startDate.split('-'); //splitDate(startDate);
    const [eY, eM, eD] = endDate.split('-'); //splitDate(endDate);
    const night = getNight(`${sY}-${sM}-${sD}`, `${eY}-${eM}-${eD}`);
    return (
        <div className="plan-info">
            <p className="plan-date">
                <span className="start-date">{`${sY}년 ${sM}월 ${sD}일`}</span>
                {` ~ ${eY}년 ${eM}월 ${eD}일`} ({parseInt(night)}박{' '}
                {parseInt(night + 1)}일)
            </p>
            <span className="plan-title">{planTitle}</span>
            <button onClick={openModal}>
                <img src="./images/write/modify.png" alt="" />
            </button>
        </div>
    );
};
const PlanRemote = ({ account, onSave }) => {
    let total = 0;
    for (const value of Object.values(account)) {
        total += value;
    }
    return (
        <div className="plan-remote">
            <div className="white-box">
                <div className="total">
                    <span className="blue-text">{total}</span>만원
                </div>
                <div className="individual">
                    <div>
                        <img src="./images/write/mini_FLIGHT.png" alt="1" />
                        {account.FLIGHT}
                    </div>
                    <div>
                        <img src="./images/write/mini_DISH.png" alt="1" />
                        {account.DISH}
                    </div>
                    <div>
                        <img src="./images/write/mini_SHOPPING.png" alt="1" />
                        {account.SHOPPING}
                    </div>
                    <div>
                        <img src="./images/write/mini_TRAFFIC.png" alt="1" />
                        {account.TRAFFIC}
                    </div>
                    <div>
                        <img src="./images/write/mini_HOTEL.png" alt="1" />
                        {account.HOTEL}
                    </div>
                    <div>
                        <img src="./images/write/mini_ETC.png" alt="1" />
                        {account.ETC}
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="plan-save" onClick={onSave}>
                    저장
                </button>
                <button className="plan-delete">삭제</button>
            </div>
        </div>
    );
};
const WritePlanTitle = ({
    published,
    startDate,
    endDate,
    planTitle,
    hashTag,
    account,
    planImage,
    onChangePlanInfo,
    onSave,
    loading,
}) => {
    // modal 관련
    const [titleVisible, setTitleVisible] = useState(true);
    const openTitleModal = () => setTitleVisible(true);
    const closeTitleModal = () => setTitleVisible(false);

    const onClickSave = () => {
        if (!planTitle || !startDate) {
            alert('필수값을 입력해주세요.');
            return;
        }
        onSave();
    };

    return (
        <>
            <div className="title-container">
                <PlanInfo
                    startDate={startDate}
                    endDate={endDate}
                    planTitle={planTitle}
                    openModal={openTitleModal}
                />
                <PlanRemote account={account} onSave={onClickSave} />
            </div>
            <div className="title-block"></div>
            {titleVisible && (
                <TitleModal
                    closeModal={closeTitleModal}
                    published={published}
                    startDate={startDate}
                    planTitle={planTitle}
                    planImage={planImage}
                    hashTag={hashTag}
                    onChangePlanInfo={onChangePlanInfo}
                />
            )}
        </>
    );
};

export default WritePlanTitle;
