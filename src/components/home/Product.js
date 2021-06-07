import React from 'react';
import { useHistory } from 'react-router-dom';
import './product.scss';
import { getNight, splitDate } from '../../util/date';
export const getTopThree = ({
    hotelTotalPrice,
    dishTotalPrice,
    flightTotalPrice,
    etcTotalPrice,
    shoppingTotalPrice,
    trafficTotalPrice,
}) => {
    return [
        { price: hotelTotalPrice, category: 'HOTEL' },
        { price: dishTotalPrice, category: 'DISH' },
        { price: flightTotalPrice, category: 'FLIGHT' },
        { price: etcTotalPrice, category: 'ETC' },
        { price: shoppingTotalPrice, category: 'SHOPPING' },
        { price: trafficTotalPrice, category: 'TRAFFIC' },
    ]
        .sort((a, b) => b.price - a.price)
        .slice(0, 3);
};

const Product = ({ product }) => {
    const history = useHistory();
    if (!product) return null;
    const {
        id,
        planImage,
        totalPrice,
        planTitle,
        planTagResponseDtos,
        planRating,
        startDate,
        endDate,
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
    const [sY, sM, sD] = splitDate(startDate.split('-').join(''));
    const [eY, eM, eD] = splitDate(endDate.split('-').join(''));
    const night = getNight(`${sY}-${sM}-${sD}`, `${eY}-${eM}-${eD}`);
    const day = night + 1;

    return (
        <>
            <div
                style={{
                    backgroundImage: `url("/images/mainpage/stack.png")`,
                }}
                className="home-product-shadowbox"
                onClick={() => history.push(`/plan/${id}`)}
            >
                <div className="product-img">
                    {planImage ? (
                        <img
                            src={`data:image/png;base64,${planImage}`}
                            alt=""
                        />
                    ) : (
                        <img
                            className="img-full"
                            src={`/images/write/thumb_${topThree[0].category}.png`}
                            alt="Product Images"
                        />
                    )}
                    <span className="product-tag">
                        &nbsp;#{planTagResponseDtos[0].planTagTitle}&nbsp;
                    </span>
                </div>
                <div className="product-info">
                    <div className="info-top">
                        <span className="product-title">
                            <b>{planTitle}</b>
                        </span>
                        <span className="product-price">
                            <b>
                                {parseFloat(
                                    (parseInt(totalPrice) / 10000).toFixed(1),
                                )}
                                만원
                            </b>
                        </span>
                    </div>
                    <div className="info-mid">
                        <span className="product-date">
                            {night}박{day}일
                        </span>
                    </div>
                    <div className="info-bottom">
                        {topThree.map(({ category, price }, i) => (
                            <div
                                className="product-top-three"
                                key={'product' + i}
                            >
                                <span className="icon">
                                    <img
                                        src={`/images/write/mini_${category}_black.png`}
                                        alt=""
                                    />
                                </span>
                                <span className="plan">
                                    {parseFloat(
                                        (parseInt(price) / 10000).toFixed(1),
                                    )}
                                </span>
                            </div>
                        ))}
                        <div className="product-rating">
                            <span className="icon">
                                <img src="/images/mainpage/star.png" alt="" />
                            </span>
                            <span className="rating">{planRating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Product;
