import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import { getNextDate, getToday } from '../util/date';
import * as writeAPI from '../lib/api/write';
import { takeLatest } from 'redux-saga/effects';

export const category_type = {
    AIRPLANE: 'AIRPLANE',
    EAT: 'EAT',
    SHOPPING: 'SHOPPING',
    TRANSPORTAION: 'TRANSPORTAION',
    ROOMS: 'ROOMS',
    ETC: 'ETC',
};
//type 생성
const INITIALIZE = 'write/INITIALIZE';
const ADD_DATE = 'write/ADD_DATE';
const CHANGE_PLAN_INFO = 'write/CHANGE_PLAN_INFO';
const ADD_POST = 'write/ADD_POST';
const UPDATE_POST = 'write/UPDATE_POST';
const REMOVE_POST = 'write/REMOVE_POST';
const [WRITE_PLAN, WRITE_PLAN_SUCCESS, WRITE_PLAN_FAILURE] =
    createRequestActionTypes('write/WRITE_PLAN');

//action 생성
export const changePlanInfo = createAction(
    CHANGE_PLAN_INFO,
    ({ planTitle, startDate, disclosure, hashTag }) => ({
        planTitle,
        startDate,
        disclosure,
        hashTag,
    }),
);
export const addDate = createAction(ADD_DATE);
export const addPost = createAction(ADD_POST, (card) => card);
export const updatePost = createAction(UPDATE_POST, (card) => card);
export const removePost = createAction(REMOVE_POST, (day, idx) => ({
    day,
    idx,
}));
export const writePlan = createAction(WRITE_PLAN, (card) => card);

const writePlanSaga = createRequestSaga(WRITE_PLAN, writeAPI.write);

export function* writeSaga() {
    yield takeLatest(WRITE_PLAN, writePlanSaga);
}

const initialState = {
    planTitle: '',
    startDate: getToday().join(''),
    endDate: getToday().join(''),
    disclosure: false,
    hashTag: '',
    plans: [[]],
    bookmarks: [],
};

const write = handleActions(
    {
        [INITIALIZE]: (state) => initialState,
        [ADD_DATE]: (state) => ({
            ...state,
            plans: [...state.plans, []],
            endDate: getNextDate(state.endDate).join(''),
        }),
        [CHANGE_PLAN_INFO]: (
            state,
            { payload: { planTitle, startDate, disclosure, hashTag } },
        ) => ({
            ...state,
            planTitle,
            startDate,
            disclosure,
            hashTag,
        }),
        [ADD_POST]: (
            state,
            {
                payload: {
                    day,
                    title1,
                    title2,
                    price,
                    location,
                    rating,
                    hashTags,
                    memo,
                    category,
                },
            },
        ) => {
            const post = {
                title1,
                title2,
                price,
                location,
                rating,
                hashTags,
                memo,
                category,
            };
            return {
                ...state,
                plans: state.plans.map((plan, idx) =>
                    idx === day ? [...plan, post] : plan,
                ),
            };
        },
        [UPDATE_POST]: (
            state,
            {
                payload: {
                    day,
                    idx,
                    title1,
                    title2,
                    price,
                    location,
                    rating,
                    hashTags,
                    memo,
                    category,
                },
            },
        ) => {
            const post = {
                title1,
                title2,
                price,
                location,
                rating,
                hashTags,
                memo,
                category,
            };
            return {
                ...state,
                plans: state.plans.map((plan, i) =>
                    i === day
                        ? plan.map((p, j) => (j === idx ? { ...post } : p))
                        : plan,
                ),
            };
        },
        [REMOVE_POST]: (state, { payload: { day, idx } }) => ({
            ...state,
            plans: state.plans.map((plan, i) =>
                i === day ? plan.filter((post, j) => j !== idx) : plan,
            ),
        }),
        [WRITE_PLAN]: (state) => {
            return {
                ...state,
            };
        },
        [WRITE_PLAN_SUCCESS]: (state, { payload: card }) => ({
            ...state,
        }),
        [WRITE_PLAN_FAILURE]: (state, { payload: postError }) => ({
            ...state,
        }),
    },
    initialState,
);

export default write;
