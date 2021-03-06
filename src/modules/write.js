import { createAction, createActions, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import { getNextDate, getNight, getToday } from '../util/date';
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
const SET_PLAN = 'write/SET_PLAN';
const SET_BOOKMARS = 'write/SET_BOOKMARKS';

const [WRITE_PLAN, WRITE_PLAN_SUCCESS, WRITE_PLAN_FAILURE] =
    createRequestActionTypes('write/WRITE_PLAN');

const [EDIT_PLAN, EDIT_PLAN_SUCCESS, EDIT_PLAN_FAILURE] =
    createRequestActionTypes('write/EDIT_PLAN');

const [REMOVE_PLAN, REMOVE_PLAN_SUCCESS, REMOVE_PLAN_FAILURE] =
    createRequestActionTypes('write/REMOVE_PLAN');

//action 생성
export const initialize = createAction(INITIALIZE);
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
export const setPlan = createAction(SET_PLAN, (plans) => plans);
export const editPlan = createAction(EDIT_PLAN, (card) => card);
export const removePlan = createAction(REMOVE_PLAN, (id) => id);
export const setBookmarks = createAction(
    SET_BOOKMARS,
    (bookmarks) => bookmarks,
);
const writePlanSaga = createRequestSaga(WRITE_PLAN, writeAPI.writePlan);
const editPlanSaga = createRequestSaga(EDIT_PLAN, writeAPI.editPlan);
const removePlanSaga = createRequestSaga(REMOVE_PLAN, writeAPI.removePlan);

export function* writeSaga() {
    yield takeLatest(WRITE_PLAN, writePlanSaga);
    yield takeLatest(EDIT_PLAN, editPlanSaga);
    yield takeLatest(REMOVE_PLAN, removePlanSaga);
}

/*{
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
{
    id: 6,
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
{
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
{
    id: 11,
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
}*/
const initialState = {
    id: null,
    planTitle: '',
    planImage: '',
    startDate: getToday().join('-'),
    endDate: getToday().join('-'),
    published: false,
    hashTag: '', //planTag
    plans: [[]],
    bookmarks: [],
    write: null,
    writeError: null,
    remove: null,
    removeError: null,
};

const write = handleActions(
    {
        [INITIALIZE]: (state) => initialState,
        [ADD_DATE]: (state) => {
            const p = [...state.plans, []];
            return {
                ...state,
                plans: p,
                endDate: getNextDate(
                    state.startDate.split('-').join(''),
                    p.length - 1,
                ).join('-'),
            };
        },
        [REMOVE_DATE]: (state, { payload: day }) => {
            const p = state.plans.filter((plan, idx) => idx !== day);
            return {
                ...state,
                plans: p,
                endDate: getNextDate(
                    state.startDate.split('-').join(''),
                    p.length - 1,
                ).join('-'),
            };
        },
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
        ) => {
            const len = state.plans.length - 1;
            return {
                ...state,
                planImage,
                planTitle,
                startDate,
                endDate: getNextDate(startDate.split('-').join(''), len).join(
                    '-',
                ),
                published,
                hashTag,
            };
        },
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
        [WRITE_PLAN_SUCCESS]: (state, { payload }) => {
            return {
                ...state,
                write: payload,
                writeError: null,
            };
        },
        [WRITE_PLAN_FAILURE]: (state, { payload, error }) => {
            return {
                ...state,
                write: null,
                writeError: error,
            };
        },
        [EDIT_PLAN]: (state) => {
            return {
                ...state,
            };
        },
        [EDIT_PLAN_SUCCESS]: (state, { payload }) => {
            return {
                ...state,
                write: payload,
                writeError: null,
            };
        },
        [EDIT_PLAN_FAILURE]: (state, { payload, error }) => {
            return {
                ...state,
                write: null,
                writeError: error,
            };
        },
        [SET_PLAN]: (state, { payload }) => {
            const {
                id,
                planTitle,
                planImage,
                startDate,
                endDate,
                published,
                planTagResponseDtos: [{ planTagTitle }],
                postForPlanResponseDtos,
                accountResponseDto,
            } = payload;
            const [sY, sM, sD] = startDate.split('-'); //splitDate(startDate);
            const [eY, eM, eD] = endDate.split('-'); //splitDate(endDate);
            const night = getNight(`${sY}-${sM}-${sD}`, `${eY}-${eM}-${eD}`);

            const plans = postForPlanResponseDtos.reduce(
                (arr, plan) => {
                    const {
                        day,
                        postTitle,
                        price,
                        location,
                        lng,
                        lat,
                        rating,
                        postTagResponseDtoList,
                        memo,
                        category,
                        postImage,
                    } = plan;
                    if (arr.length - 1 !== day) {
                        arr.push([]);
                    }
                    arr[day].push({
                        title1: postTitle,
                        price,
                        location: { name: location, lng, lat },
                        rating,
                        memo,
                        category,
                        postImage,
                        hashTags: postTagResponseDtoList.map(
                            (tag) => tag.postTagTitle,
                        ),
                    });
                    return [...arr];
                },
                [[]],
            );
            return {
                ...state,
                id,
                planTitle,
                planImage,
                startDate,
                endDate:
                    plans.length !== night + 1
                        ? getNextDate(
                              startDate.split('-').join(''),
                              plans.length - 1,
                          ).join('-')
                        : endDate,
                published,
                plans,
                hashTag: planTagTitle,
            };
        },
        [SET_BOOKMARS]: (state, { payload }) => {
            // originPost_id,
            // title1,
            // title2,
            // price,
            // postImage,
            // category,
            // location,
            // rating,
            // hashTags,
            // memo,

            const bookmarks = payload.map(
                ({
                    postBookmarkPostResponseDto: {
                        category,
                        closed,
                        lat,
                        lng,
                        location,
                        name,
                        memo,
                        originPost_id,
                        postImage,
                        postTitle,
                        price,
                        rating,
                        postTagResponseDtoList,
                    },
                }) => ({
                    id: originPost_id,
                    title1: postTitle,
                    price,
                    postImage,
                    category,
                    location: {
                        lat,
                        lng,
                        name: location,
                    },
                    rating,
                    hashTags: postTagResponseDtoList.map(
                        (tag) => tag.postTagTitle,
                    ),
                    memo,
                }),
            );
            console.log(bookmarks);

            return {
                ...state,
                bookmarks: [...bookmarks],
            };
        },
        [REMOVE_PLAN_SUCCESS]: (state, { payload }) => {
            return {
                ...state,
                remove: payload,
                removeError: null,
            };
        },
        [REMOVE_PLAN_FAILURE]: (state, { payload, error }) => {
            return {
                ...state,
                remove: null,
                removeError: error,
            };
        },
    },
    initialState,
);

export default write;
