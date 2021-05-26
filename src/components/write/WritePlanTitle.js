import React, { useState } from 'react';
import './writePlanTitle.scss';
import { getNight, splitDate } from '../../util/date';
import TitleModal from './TitleModal';
import { category_type } from '../../modules/write';
const PlanInfo = ({ startDate, endDate, planTitle, openModal }) => {
    const [sY, sM, sD] = splitDate(startDate);
    const [eY, eM, eD] = splitDate(endDate);
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
                        <img src="./images/write/AIRPLANE.png" alt="1" />
                        {account.AIRPLANE}
                    </div>
                    <div>
                        <img src="./images/write/EAT.png" alt="1" />
                        {account.EAT}
                    </div>
                    <div>
                        <img src="./images/write/SHOPPING.png" alt="1" />
                        {account.SHOPPING}
                    </div>
                    <div>
                        <img src="./images/write/TRANSPORTAION.png" alt="1" />
                        {account.TRANSPORTAION}
                    </div>
                    <div>
                        <img src="./images/write/ROOMS.png" alt="1" />
                        {account.ROOMS}
                    </div>
                    <div>
                        <img src="./images/write/ETC.png" alt="1" />
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
    disclosure,
    startDate,
    endDate,
    planTitle,
    hashTag,
    account,
    onChangePlanInfo,
    onSave,
}) => {
    // modal 관련
    const [titleVisible, setTitleVisible] = useState(false);
    const openTitleModal = () => setTitleVisible(true);
    const closeTitleModal = () => setTitleVisible(false);

    return (
        <>
            <div className="title-container">
                <PlanInfo
                    startDate={startDate}
                    endDate={endDate}
                    planTitle={planTitle}
                    openModal={openTitleModal}
                />
                <PlanRemote account={account} onSave={onSave} />
            </div>
            <div className="title-block"></div>
            {titleVisible && (
                <TitleModal
                    closeModal={closeTitleModal}
                    disclosure={disclosure}
                    startDate={startDate}
                    planTitle={planTitle}
                    hashTag={hashTag}
                    onChangePlanInfo={onChangePlanInfo}
                />
            )}
        </>
    );
};

export default WritePlanTitle;
