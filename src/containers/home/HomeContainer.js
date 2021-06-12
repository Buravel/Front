import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/home/ProductList';
import Advertise from '../../components/home/Advertise';
import Topbar from '../../components/home/Topbar';
import { listPlans, initalize } from '../../modules/home';
import Expected from '../../components/home/Expected';
import Loading from '../../components/common/Loading';
import Pagination from '../../components/home/Pagination';

const HomeContainer = () => {
    const dispatch = useDispatch();
    const plans = useSelector((state) => state.home.plans);
    const loading = useSelector((state) => state.loading['home/LIST_PLANS']);

    const user = useSelector(({ user }) => user.user);
    const [sort, setSort] = useState('lastModified,desc');

    const [currentPage, setCurrentPage] = useState(0);
    const totalElements = useSelector((state) => state.home.totalElements);
    const totalPages = useSelector((state) => state.home.totalPages);

    //페이지 열자마자 정보 가져오기.
    useEffect(() => {
        dispatch(initalize());
        dispatch(
            listPlans({
                keyword: '',
                min: 0,
                max: 0,
                sort: 'lastModified,desc',
                page: 0,
            }),
        );
    }, [dispatch]);
    useEffect(() => {
        dispatch(
            listPlans({
                keyword: '',
                min: 0,
                max: 0,
                sort,
                page: currentPage,
            }),
        );
    }, [currentPage, dispatch, sort]);

    if (loading) return <Loading>불러오는중</Loading>;

    return (
        <div className="content">
            {user && (
                <Expected
                    product={user.data.planResponseDto}
                    nickname={user.data.account.nickname}
                />
            )}
            <Advertise />
            <Topbar sort={sort} setSort={setSort} />
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

export default HomeContainer;
