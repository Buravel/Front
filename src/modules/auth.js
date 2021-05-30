import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
const INITIALIZE = "auth/INITIALIZE";
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/REGISTER");
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");
const [FINDID, FINDID_SUCCESS, FINDID_FAILURE] =
  createRequestActionTypes("auth/FINDID");
const [FINDPW, FINDPW_SUCCESS, FINDPW_FAILURE] =
  createRequestActionTypes("auth/FINDPW");
const [R_AUTH, R_AUTH_SUCCESS, R_AUTH_FAILURE] =
  createRequestActionTypes("auth/R_AUTH");
const [RE_AUTH, RE_AUTH_SUCCESS, RE_AUTH_FAILURE] =
  createRequestActionTypes("auth/RE_AUTH");
export const initialize = createAction(INITIALIZE);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const register = createAction(
  REGISTER,
  ({ nickname, username, email, password }) => ({
    nickname,
    username,
    email,
    password,
  })
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
export const registerAuth = createAction(R_AUTH, ({ number }) => ({
  number,
}));
export const registerReAuth = createAction(RE_AUTH, ({ number }) => ({
  number,
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const findIDSaga = createRequestSaga(FINDID, authAPI.findID);
const findPWSaga = createRequestSaga(FINDPW, authAPI.findPW);
const registerAuthSaga = createRequestSaga(R_AUTH, authAPI.registerAuth);
const registerReAuthSaga = createRequestSaga(RE_AUTH, authAPI.registerReAuth);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(FINDID, findIDSaga);
  yield takeLatest(FINDPW, findPWSaga);
  yield takeLatest(R_AUTH, registerAuthSaga);
  yield takeLatest(RE_AUTH, registerReAuthSaga);
}

const initialState = {
  register: {
    nickname: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
  findID: {
    email: "",
  },
  findPW: {
    email: "",
  },
  registerAuth: {
    number: "",
  },
  registerReAuth: {
    number: "",
  },
  auth: null,
  authError: null,
  success: null,
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
      auth: null,
      authError: null,
    }),
    [REGISTER_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [REGISTER_FAILURE]: (state) => ({
      ...state,
      success: false,
    }),
    [LOGIN_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [LOGIN_FAILURE]: (state) => ({
      ...state,
      success: false,
    }),
    [FINDID_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [FINDID_FAILURE]: (state) => ({
      ...state,
      success: false,
    }),
    [FINDPW_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [FINDPW_FAILURE]: (state) => ({
      ...state,
      success: false,
    }),
    [R_AUTH_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [R_AUTH_FAILURE]: (state) => ({
      ...state,
      success: false,
    }),
    [RE_AUTH_SUCCESS]: (state) => ({
      ...state,
      success: null,
    }),
    [RE_AUTH_FAILURE]: (state) => ({
      ...state,
      success: null,
    }),
  },
  initialState
);
export default auth;
