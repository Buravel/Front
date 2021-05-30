/*import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as mypageAPI from "../lib/api/mypage";

const CHANGE_FIELD = "mypage/CHANGE_FIELD";
const INITIALIZE_FORM = "mypage/INITIALIZE_FORM";
const [NICKNAME, NICKNAME_SUCCESS, NICKNAME_FAILURE] =
  createRequestActionTypes("mypage/NICKNAME");
const [PROFILEIMAGE, PROFILEIMAGE_SUCCESS, PROFILEIMAGE_FAILURE] =
  createRequestActionTypes("mypage/PROFILEIMAGE");
const [PASSWORD, PASSWORD_SUCCESS, PASSWORD_FAILURE] =
  createRequestActionTypes("mypage/PASSWORD");

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const nicknameChange = createAction(NICKNAME, ({ nickname }) => ({
  nickname,
}));

export const profileImageChange = createAction(
  PROFILEIMAGE,
  ({ profileImage }) => ({
    profileImage,
  })
);

export const passwordChange = createAction(PASSWORD, ({ password }) => ({
  password,
}));

const nicknameSaga = createRequestSaga(NICKNAME, mypageAPI.nicknameChange);
const profileImageSaga = createRequestSaga(PROFILEIMAGE, mypageAPI.imageChange);
const passwordSaga = createRequestSaga(PASSWORD, mypageAPI.passwordChange);

export function* mypageSaga() {
  yield takeLatest(NICKNAME, nicknameSaga);
  yield takeLatest(PROFILEIMAGE, profileImageSaga);
  yield takeLatest(PASSWORD, passwordSaga);
}

const initialState = {
  nicknameChange: {
    nickname: "",
    password: "",
  },
  auth: null,
  authError: null,
  success: null,
};

const mypage = handleActions(
  {
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
    [NICKNAME_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [NICKNAME_FAILURE]: (state) => ({
      ...state,
      success: false,
    }),
    [PROFILEIMAGE_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [PROFILEIMAGE_FAILURE]: (state) => ({
      ...state,
      success: false,
    }),
    [PASSWORD_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [PASSWORD_FAILURE]: (state) => ({
      ...state,
      success: false,
    }),
  },
  initialState
);
export default mypage;
*/
