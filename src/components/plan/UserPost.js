import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Appstyle from './Planstyle.scss';
import Icon from './Icon';

function UserPost({ posts, onClickEditBtn, onRemove }) {
    if (!posts) return null;

    const postDate = String(posts.startDate).split('-');
    const Year = postDate[0];
    const Month = postDate[1];
    const Day = postDate[2];

    const postTerm = posts.postForPlanResponseDtos;
    const { id } = posts;
    const onEditClick = () => {
        // console.log(posts);
        // console.log(id);
        onClickEditBtn(posts, id);
    };
    const onRemoveClick = () => {
        // console.log(posts);
        // console.log(id);
        onRemove(id);
    };
    return (
        //     <>
        //       <div></div>
        //       <div>{postTerm && postTerm.map((itme, i) => itme.day)}</div>
        //       {console.log(
        //         Math.max.apply(null, postTerm && postTerm.map((itme, i) => itme.day))
        //       )}
        //     </>
        <div className="PostInfo">
            <div className="InfoBackground">
                <span className="PostDay">
                    <span className="PostDate">
                        {Year}년 {Month}월
                    </span>
                    <span className="PostTerm">
                        (
                        {Math.max.apply(
                            null,
                            postTerm && postTerm.map((item, i) => item.day),
                        )}
                        박
                        {Math.max.apply(
                            null,
                            postTerm && postTerm.map((item, i) => item.day),
                        ) + 1}
                        일)
                    </span>
                </span>
                <span className="UserPostName">
                    <span className="UserPlace">{posts.planTitle}</span>
                </span>
                {!!onClickEditBtn && (
                    <div className="plan-edit-container">
                        <button className="plan-edit" onClick={onEditClick}>
                            수정
                        </button>
                        <button className="plan-delete" onClick={onRemoveClick}>
                            삭제
                        </button>
                    </div>
                )}

                <span className="CostBackground">
                    <span className="TotalCost">
                        <span className="TotalMoney">
                            {(String(posts.totalPrice) / 10000).toFixed(0)}
                        </span>
                        <span className="TotalMoneyname">만원</span>
                    </span>
                    <span className="TotalImg">
                        <Icon
                            picture="FLIGHT"
                            className="TotalAirplane"
                            alt="budget icon"
                        />
                        <Icon
                            picture="DISH"
                            className="Totalfood"
                            alt="budget icon"
                        />
                        <Icon
                            picture="shopping"
                            className="Totalshopping"
                            alt="budget icon"
                        />
                        <Icon
                            picture="TRAFFIC"
                            className="Totalbus"
                            alt="budget icon"
                        />
                        <Icon
                            picture="HOTEL"
                            className="Totalbed"
                            alt="budget icon"
                        />
                        <Icon
                            picture="ETC"
                            className="Totaletc"
                            alt="budget icon"
                        />
                    </span>
                    <span className="TotalMoneylist">
                        <span className="TotalAirplaneCost">
                            {(String(posts.flightTotalPrice) / 10000).toFixed(
                                0,
                            )}
                        </span>
                        <span className="TotalfoodCost">
                            {(String(posts.dishTotalPrice) / 10000).toFixed(0)}
                        </span>
                        <span className="TotalshoppingCost">
                            {(String(posts.shoppingTotalPrice) / 10000).toFixed(
                                0,
                            )}
                        </span>
                        <span className="TotalbusCost">
                            {(String(posts.trafficTotalPrice) / 10000).toFixed(
                                0,
                            )}
                        </span>
                        <span className="TotalbedCost">
                            {(String(posts.hotelTotalPrice) / 10000).toFixed(0)}
                        </span>
                        <span className="TotaletcCost">
                            {(String(posts.etcTotalPrice) / 10000).toFixed(0)}
                        </span>
                    </span>
                </span>
            </div>
        </div>
    );
}

export default UserPost;
