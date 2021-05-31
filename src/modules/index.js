import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import write, { writeSaga } from "./write";
//import user, { userSaga } from "./user";
//import mypage, { mypageSaga } from "./mypage";

const rootReducer = combineReducers({
  auth,
  loading,
  write,
  // user,
  //  mypage,
});

export function* rootSaga() {
  yield all([authSaga(), writeSaga()]);
}
export default rootReducer;
