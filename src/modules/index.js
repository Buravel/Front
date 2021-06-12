import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import home, { homeSaga } from "./home";
import loading from "./loading";
import write, { writeSaga } from "./write";
import user, { userSaga } from "./user";

const rootReducer = combineReducers({
  auth,
  loading,
  write,
  home,
  user,
});

export function* rootSaga() {
  yield all([authSaga(), writeSaga(), homeSaga(), userSaga()]);
}
export default rootReducer;
