import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import ProductList from '../../components/home/ProductList';
import Topbar from '../../components/home/Topbar';
import { listPlans, initalize } from '../../modules/home';
import queryString from 'query-string';
import Loading from '../../components/common/Loading';
import Pagination from '../../components/home/Pagination';

const SearchContainer = () => {
    const dispatch = useDispatch();
    const { search } = useLocation();
    const { keyword, max, min, sort, page } = queryString.parse(search);
    const loading = useSelector((state) => state.loading['home/LIST_PLANS']);
    const plans = useSelector((state) => state.home.plans);

    const [sortt, setSortt] = useState(sort);

    const [currentPage, setCurrentPage] = useState(page);
    const totalElements = useSelector((state) => state.home.totalElements);
    const totalPages = useSelector((state) => state.home.totalPages);

    //페이지 열자마자 정보 가져오기.
    useEffect(() => {
        dispatch(initalize());

        dispatch(
            listPlans({
                keyword,
                min,
                max,
                sort: sortt,
                currentPage,
            }),
        );
    }, [dispatch, search, keyword, max, min, sortt, currentPage]);

    if (loading) return <Loading>검색중</Loading>;

    return (
        <div className="content">
            <Topbar keyword={keyword} sort={sortt} setSort={setSortt}></Topbar>
            <ProductList plans={plans} />
            {!!plans.length && (
                <Pagination
                    totalPages={totalPages}
                    totalElements={totalElements}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
};

export default SearchContainer;
