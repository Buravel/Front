import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import ProductList from '../../components/home/ProductList';
import Topbar from '../../components/home/Topbar';
import { listPlans, initalize } from '../../modules/home';
import queryString from 'query-string';
import Loading from '../../components/common/Loading';

const SearchContainer = () => {
    const dispatch = useDispatch();
    const { search } = useLocation();
    const { keyword, max, min } = queryString.parse(search);
    const loading = useSelector((state) => state.loading['home/LIST_PLANS']);

    const plans = useSelector((state) => state.home.plans);

    //페이지 열자마자 정보 가져오기.
    useEffect(() => {
        dispatch(initalize());

        dispatch(
            listPlans({
                keyword: keyword,
                min: min,
                max: max,
            }),
        );
    }, [dispatch, search, keyword, max, min]);
    if (loading) return <Loading>검색중</Loading>;

    return (
        <div className="content">
            <Topbar keyword={keyword}></Topbar>
            <ProductList plans={plans} />
        </div>
    );
};

export default SearchContainer;
