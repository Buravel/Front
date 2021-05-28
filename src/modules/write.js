import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import { getNextDate, getToday } from '../util/date';
import * as writeAPI from '../lib/api/write';
import { takeLatest } from 'redux-saga/effects';

export const category_type = {
    FLIGHT: 'FLIGHT',
    DISH: 'DISH',
    SHOPPING: 'SHOPPING',
    TRAFFIC: 'TRAFFIC',
    HOTEL: 'HOTEL',
    ETC: 'ETC',
};
//type 생성
const INITIALIZE = 'write/INITIALIZE';
const ADD_DATE = 'write/ADD_DATE';
const REMOVE_DATE = 'write/REMOVE_DATE';
const CHANGE_PLAN_INFO = 'write/CHANGE_PLAN_INFO';
const ADD_POST = 'write/ADD_POST';
const UPDATE_POST = 'write/UPDATE_POST';
const REMOVE_POST = 'write/REMOVE_POST';
const [WRITE_PLAN, WRITE_PLAN_SUCCESS, WRITE_PLAN_FAILURE] =
    createRequestActionTypes('write/WRITE_PLAN');

//action 생성
export const changePlanInfo = createAction(
    CHANGE_PLAN_INFO,
    ({ planTitle, startDate, published, hashTag, planImage }) => ({
        planTitle,
        startDate,
        published,
        hashTag,
        planImage,
    }),
);
export const addDate = createAction(ADD_DATE);
export const removeDate = createAction(REMOVE_DATE);
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
    planImage: '',

    startDate: getToday().join('-'),
    endDate: getToday().join('-'),
    published: false,
    hashTag: '', //planTag
    plans: [[]],
    bookmarks: [
        {
            id: 0,
            title1: '루프트한자',
            title2: '이코노미',
            price: 1200000,
            postImage: '',
            category: category_type.FLIGHT,
            location: {
                name: '',
                lat: 0,
                lng: 0,
            },
            rating: 4.5,
            hashTags: ['ktx', 'ktx', 'ktx'],
            memo: '111',
        },
        {
            id: 1,
            title1: '루프트한자',
            title2: '이코노미',
            price: 1200000,
            postImage: '',
            category: category_type.DISH,
            location: {
                name: '',
                lat: 0,
                lng: 0,
            },
            rating: 4.5,
            hashTags: ['ktx', 'ktx', 'ktx'],
            memo: '111',
        },
        {
            id: 2,
            title1: '루프트한자',
            title2: '이코노미',
            price: 1200000,
            postImage: '',
            category: category_type.ETC,
            location: {
                name: '',
                lat: 0,
                lng: 0,
            },
            rating: 4.5,
            hashTags: ['ktx', 'ktx', 'ktx'],
            memo: '111',
        },
        {
            id: 3,
            title1: '루프트한자',
            title2: '이코노미',
            price: 1200000,
            postImage: '',
            category: category_type.HOTEL,
            location: {
                name: '',
                lat: 0,
                lng: 0,
            },
            rating: 4.5,
            hashTags: ['ktx', 'ktx', 'ktx'],
            memo: '111',
        },
        {
            id: 4,
            title1: '루프트한자',
            title2: '이코노미',
            price: 1200000,
            postImage: '',
            category: category_type.TRAFFIC,
            location: {
                name: '',
                lat: 0,
                lng: 0,
            },
            rating: 4.5,
            hashTags: ['ktx', 'ktx', 'ktx'],
            memo: '111',
        },
    ],
};

const write = handleActions(
    {
        [INITIALIZE]: (state) => initialState,
        [ADD_DATE]: (state) => ({
            ...state,
            plans: [...state.plans, []],
            endDate: getNextDate(state.endDate).join(''),
        }),
        [REMOVE_DATE]: (state, { payload: day }) => ({
            ...state,
            plans: state.plans.filter((plan, idx) => idx !== day),
        }),
        [CHANGE_PLAN_INFO]: (
            state,
            {
                payload: {
                    planTitle,
                    startDate,
                    published,
                    hashTag,
                    planImage,
                },
            },
        ) => ({
            ...state,
            planImage,
            planTitle,
            startDate,
            published,
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
                    postImage,
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
                postImage,
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
                    postImage,
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
                postImage,
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
