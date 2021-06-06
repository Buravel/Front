import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as homeAPI from '../lib/api/home';

const INITIALIZE = 'home/INITIALIZE';
const [LIST_PLANS, LIST_PLANS_SUCCESS, LIST_PLANS_FAILURE] =
    createRequestActionTypes('home/LIST_PLANS');

export const initalize = createAction(INITIALIZE);
export const listPlans = createAction(LIST_PLANS, ({ keyword, min, max }) => ({
    keyword,
    min,
    max,
}));

const listPlansSaga = createRequestSaga(LIST_PLANS, homeAPI.planList);

export function* homeSaga() {
    yield takeLatest(LIST_PLANS, listPlansSaga);
}

const initialState = {
    plans: [],
    totalElements: 0,
    totalPages: 0,
    error: null,
};

const home = handleActions(
    {
        [INITIALIZE]: (state) => ({
            ...initialState,
        }),
        [LIST_PLANS_SUCCESS]: (state, { payload }) => {
            const plans = payload.data._embedded?.planResponseDtoList || [];
            const totalElements = payload.data.page.totalElements;
            const totalPages = payload.data.page.totalPages;
            return {
                ...state,
                plans,
                totalElements,
                totalPages,
            };
        },
        [LIST_PLANS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default home;
