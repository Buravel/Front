import React from 'react';
import './writePlanTitle.scss';
const splitDate = (date) => {
    const yyyy = date.slice(0, 4);
    const mm = date.slice(4, 6);
    const dd = date.slice(6, 8);
    return [yyyy, mm, dd];
};
const getNight = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const night = (end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24;
    return night;
};

const PlanInfo = ({ startDate, endDate, planTitle }) => {
    const [sY, sM, sD] = splitDate(startDate);
    const [eY, eM, eD] = splitDate(endDate);
    const night = getNight(`${sY}-${sM}-${sD}`, `${eY}-${eM}-${eD}`);
    return (
        <div className="plan-info">
            <p className="plan-date">
                {`${sY}년 ${sM}월 ${sD}일 ~ ${eY}년 ${eM}월 ${eD}일`} (
                {parseInt(night) - 1}박 {parseInt(night)}일)
            </p>
            <p className="plan-title">{planTitle}</p>
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
    );
};
const WritePlanTitle = ({
    disclosure,
    startDate,
    endDate,
    planTitle,
    account,
}) => {
    return (
        <>
            <div className="title-container">
                <PlanInfo
                    startDate={startDate}
                    endDate={endDate}
                    planTitle={planTitle}
                />
                <PlanRemote account={account} />
            </div>
            <div className="title-block"></div>
        </>
    );
};

export default WritePlanTitle;
