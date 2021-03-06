import React from 'react';
import './expected.scss';
import { getTopThree } from './Product';
const Expected = ({ product, nickname }) => {
    if (!product) return null;
    const {
        totalPrice,
        planTitle,
        startDate,
        hotelTotalPrice,
        dishTotalPrice,
        flightTotalPrice,
        etcTotalPrice,
        shoppingTotalPrice,
        trafficTotalPrice,
    } = product;

    const topThree = getTopThree({
        hotelTotalPrice,
        dishTotalPrice,
        flightTotalPrice,
        etcTotalPrice,
        shoppingTotalPrice,
        trafficTotalPrice,
    });

    return (
        <div className="expected-container">
            <div className="div">
                <p className="div-top">{nickname}님의 예정된 여행</p>
                <p className="div-bottom">{startDate}</p>
            </div>
            <div className="div">
                <p className="div-top">여행 제목</p>
                <p className="div-bottom">{planTitle}</p>
            </div>
            <div className="div">
                <p className="div-top">예산</p>
                <p className="div-bottom">
                    {parseFloat((parseInt(totalPrice) / 10000).toFixed(1))}만원
                </p>
            </div>
            <div className="div">
                <p className="div-top">예산 상세</p>
                {topThree.map(({ category, price }, i) => (
                    <div className="product-top-three" key={'expected' + i}>
                        <span className="icon">
                            <img
                                src={`/images/mainpage/sky_${category}.png`}
                                alt=""
                            />
                        </span>
                        <span className="plan">
                            {parseFloat((parseInt(price) / 10000).toFixed(1))}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Expected;
