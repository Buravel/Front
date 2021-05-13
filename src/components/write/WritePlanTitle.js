import React from 'react';
import './writePlanTitle.scss';
import { getNight, splitDate } from '../../util/date';
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
const PlanRemote = ({ account }) => {
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
                        <img src="./images/write/plane_icon.png" alt="1" />
                        {account.type1}
                    </div>
                    <div>
                        <img src="./images/write/plane_icon.png" alt="1" />
                        {account.type2}
                    </div>
                    <div>
                        <img src="./images/write/plane_icon.png" alt="1" />
                        {account.type3}
                    </div>
                    <div>
                        <img src="./images/write/plane_icon.png" alt="1" />
                        {account.type4}
                    </div>
                    <div>
                        <img src="./images/write/plane_icon.png" alt="1" />
                        {account.type5}
                    </div>
                    <div>
                        <img src="./images/write/plane_icon.png" alt="1" />
                        {account.type6}
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="plan-save">저장</button>
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
    account,
    openModal,
}) => {
    return (
        <>
            <div className="title-container">
                <PlanInfo
                    startDate={startDate}
                    endDate={endDate}
                    planTitle={planTitle}
                    openModal={openModal}
                />
                <PlanRemote account={account} />
            </div>
            <div className="title-block"></div>
        </>
    );
};

export default WritePlanTitle;
