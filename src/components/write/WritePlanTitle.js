import React, { useState } from 'react';
import './writePlanTitle.scss';
import { getNight } from '../../util/date';
import TitleModal from './TitleModal';
import { useHistory } from 'react-router';
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
                <img src="/images/write/modify.png" alt="" />
            </button>
        </div>
    );
};
const PlanRemote = ({ account, onSave /* onRemove, edit */ }) => {
    const history = useHistory();
    let total = 0;
    for (const value of Object.values(account)) {
        total += value;
    }
    return (
        <div className="plan-remote">
            <div className="white-box">
                <div className="total">
                    <span className="blue-text">
                        {parseFloat(total.toFixed(1))}
                    </span>
                    만원
                </div>
                <div className="individual">
                    <div>
                        <img
                            src="/images/write/mini_FLIGHT_black.png"
                            alt="1"
                        />
                        {parseFloat(account.FLIGHT.toFixed(1))}
                    </div>
                    <div>
                        <img src="/images/write/mini_DISH_black.png" alt="1" />
                        {parseFloat(account.DISH.toFixed(1))}
                    </div>
                    <div>
                        <img
                            src="/images/write/mini_SHOPPING_black.png"
                            alt="1"
                        />
                        {parseFloat(account.SHOPPING.toFixed(1))}
                    </div>
                    <div>
                        <img
                            src="/images/write/mini_TRAFFIC_black.png"
                            alt="1"
                        />
                        {parseFloat(account.TRAFFIC.toFixed(1))}
                    </div>
                    <div>
                        <img src="/images/write/mini_HOTEL_black.png" alt="1" />
                        {parseFloat(account.HOTEL.toFixed(1))}
                    </div>
                    <div>
                        <img src="/images/write/mini_ETC_black.png" alt="1" />
                        {parseFloat(account.ETC.toFixed(1))}
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button className="plan-save" onClick={onSave}>
                    저장
                </button>
                <button
                    className="plan-delete"
                    onClick={() => {
                        if (window.confirm('정말 취소하시겠어요?.')) {
                            history.push('/');
                        }
                    }}
                >
                    취소
                </button>
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
    /*onRemove,
    edit,*/
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
                <PlanRemote
                    account={account}
                    onSave={onClickSave}
                    // onRemove={onRemove}
                    // edit={edit}
                />
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
