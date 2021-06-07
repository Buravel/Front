import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Loading from '../../components/common/Loading';
import WritePlanTitle from '../../components/write/WritePlanTitle';
import {
    category_type,
    changePlanInfo,
    editPlan,
    initialize,
    removePlan,
    writePlan,
} from '../../modules/write';
const getAccount = (arr) => {
    let account = {
        [category_type.FLIGHT]: 0,
        [category_type.DISH]: 0,
        [category_type.ETC]: 0,
        [category_type.HOTEL]: 0,
        [category_type.SHOPPING]: 0,
        [category_type.TRAFFIC]: 0,
    };
    for (const arr1 of arr) {
        for (const arr2 of arr1) {
            account[arr2.category] =
                account[arr2.category] + parseInt(arr2.price) / 10000;
        }
    }
    return { ...account };
};

const WritePlanTitleContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // title 플랜 입력 관련
    const id = useSelector((state) => state.write.id);
    const planTitle = useSelector((state) => state.write.planTitle);
    const startDate = useSelector((state) => state.write.startDate);
    const endDate = useSelector((state) => state.write.endDate);
    const published = useSelector((state) => state.write.published);
    const hashTag = useSelector((state) => state.write.hashTag);
    const planImage = useSelector((state) => state.write.planImage);
    const plans = useSelector((state) => state.write.plans);

    const write = useSelector((state) => state.write.write);
    const writeError = useSelector((state) => state.write.writeError);

    const remove = useSelector((state) => state.write.remove);
    const removeError = useSelector((state) => state.write.removeError);

    const loading1 = useSelector((state) => state.loading['write/WRITE_PLAN']);
    const loading2 = useSelector((state) => state.loading['write/EDIT_PLAN']);
    const loading3 = useSelector((state) => state.loading['write/REMOVE_PLAN']);
    // title 금액관련
    const account = useMemo(() => getAccount(plans), [plans]);

    // plan 정보 저장
    const onChangePlanInfo = ({
        planTitle,
        startDate,
        published,
        hashTag,
        planImage,
    }) => {
        dispatch(
            changePlanInfo({
                planTitle,
                startDate,
                published,
                hashTag,
                planImage,
            }),
        );
    };

    const onSave = () => {
        if (id) {
            dispatch(
                editPlan({
                    planId: id,
                    planTitle,
                    published,
                    startDate,
                    endDate,
                    planImage,
                    planTag: hashTag,
                    postDtos: [...plans],
                }),
            );
        } else {
            dispatch(
                writePlan({
                    planTitle,
                    published,
                    startDate,
                    endDate,
                    planImage,
                    planTag: hashTag,
                    postDtos: [...plans],
                }),
            );
        }
    };
    const onRemove = () => {
        if (window.confirm('정말 삭제하시겠어요?')) {
            dispatch(removePlan(id));
        }
    };
    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);
    useEffect(() => {
        if (write) {
            console.log('작성 성공');
            history.push(`/plan/${write.data.id}`);
        }
        if (writeError) {
            alert('작성 실패');
        }
    }, [history, writeError, write]);

    useEffect(() => {
        if (remove) {
            console.log('삭제 성공');
            history.push(`/mypage`);
        }
        if (removeError) {
            alert('삭제 실패');
        }
    }, [history, removeError, remove]);
    return (
        <>
            <WritePlanTitle
                published={published}
                startDate={startDate}
                endDate={endDate}
                planTitle={planTitle}
                hashTag={hashTag}
                planImage={planImage}
                account={account}
                onChangePlanInfo={onChangePlanInfo}
                onSave={onSave}
                onRemove={onRemove}
                edit={!!id}
            />
            {(loading1 || loading2) && <Loading>저장중</Loading>}
            {loading3 && <Loading>삭제중</Loading>}
        </>
    );
};

export default WritePlanTitleContainer;
