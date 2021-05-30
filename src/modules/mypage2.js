/*import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as mypageAPI from "../lib/api/mypage";

const CHANGE_FIELD = "mypage/CHANGE_FIELD";
const INITIALIZE_FORM = "mypage/INITIALIZE_FORM";
const [EDIT, EDIT_SUCCESS, EDIT_FAILURE] =
  createRequestActionTypes("mypage/EDIT");

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const edit = createAction(EDIT, ({ nickname, password }) => ({
  nickname,
  password,
}));
const editSaga = createRequestSaga(EDIT, mypageAPI.edit);
export function* mypageSaga() {
  yield takeLatest(editSaga);
}

const initialState = {
  edit: {
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
    [EDIT_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [EDIT_FAILURE]: (state) => ({
      ...state,
      success: false,
    }),
  },
  initialState
);
export default mypage;
*/
