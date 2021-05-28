import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
const INITIALIZE = 'auth/INITIALIZE';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
    createRequestActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
    createRequestActionTypes('auth/LOGIN');
const [FINDID, FINDID_SUCCESS, FINDID_FAILURE] =
    createRequestActionTypes('auth/FINDID');
const [FINDPW, FINDPW_SUCCESS, FINDPW_FAILURE] =
    createRequestActionTypes('auth/FINDPW');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({ form, key, value }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const register = createAction(
    REGISTER,
    ({ nickname, username, email, password }) => ({
        nickname,
        username,
        email,
        password,
    }),
);
export const login = createAction(LOGIN, ({ username, password }) => ({
    username,
    password,
}));

export const findID = createAction(FINDID, ({ email }) => ({
    email,
}));
export const findPW = createAction(FINDPW, ({ email }) => ({
    email,
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const findIDSaga = createRequestSaga(FINDID, authAPI.findID);
const findPWSaga = createRequestSaga(FINDPW, authAPI.findPW);

export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(FINDID, findIDSaga);
    yield takeLatest(FINDPW, findPWSaga);
}

const initialState = {
    register: {
        nickname: '',
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    },
    findID: {
        email: '',
    },
    findPW: {
        email: '',
    },
    auth: null,
    authError: null,
};

const auth = handleActions(
    {
        [INITIALIZE]: (state) => ({ ...state, ...initialState }),
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, (draft) => {
                draft[form][key] = value;
            }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            authError: null,
        }),
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        [FINDID_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [FINDID_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        [FINDPW_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [FINDPW_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
    },
    initialState,
);

export default auth;
