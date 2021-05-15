import { createAction, handleActions } from 'redux-actions';
import { getNextDate, getToday } from '../util/date';

//type 생성
const INITIALIZE = 'write/INITIALIZE';
const ADD_DATE = 'write/ADD_DATE';
const CHANGE_PLAN_INFO = 'write/CHANGE_PLAN_INFO';
const ADD_POST = 'write/ADD_POST';
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
export const addPost = createAction(ADD_POST, (day) => day);
const initialState = {
    planTitle: '',
    startDate: getToday().join(''),
    endDate: getToday().join(''),
    disclosure: false,
    hashTag: '',
    plans: [[]],
    bookmarks: [
        {
            id: 0,
            title1: '루프트한자',
            title2: '이코노미',
            price: 1200000,
            postImage: null,
            category: '비행기',
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
            postImage: null,
            category: '비행기',
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
            postImage: null,
            category: '비행기',
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
            postImage: null,
            category: '비행기',
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
            postImage: null,
            category: '비행기',
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
            id: 5,
            title1: '루프트한자',
            title2: '이코노미',
            price: 1200000,
            postImage: null,
            category: '비행기',
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
            };
            return {
                ...state,
                plans: state.plans.map((plan, idx) =>
                    idx === day ? [...plan, post] : plan,
                ),
            };
        },
    },
    initialState,
);

export default write;
